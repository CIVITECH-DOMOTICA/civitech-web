import { Component, ElementRef, ViewChild, OnInit, AfterViewChecked, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChatbotService, ChatMessage } from '../../core/services/chatbot.service';

// Simple pipe for line breaks and bold text
@Pipe({ name: 'nl2br', standalone: true })
export class Nl2brPipe implements PipeTransform {
  transform(value: string): string {
    let formatted = value.replace(/\n/g, '<br/>');
    // Replace **text** with <strong>text</strong>
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return formatted;
  }
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, Nl2brPipe],
  template: `
    <!-- Floating Button with Animated Ping -->
    <div class="chatbot-trigger" (click)="toggleChat()" *ngIf="!isOpen">
      <div class="notification-badge" *ngIf="hasUnread">1</div>
      <div class="ping-animation"></div>
      <img src="assets/images/logo_blanco.png" alt="Chat" class="trigger-logo">
    </div>

    <!-- Chat Window -->
    <div class="chat-window" [@slideUpdate]="isOpen ? 'open' : 'closed'">
      <!-- Header -->
      <div class="chat-header">
        <div class="header-info">
          <div class="avatar">
            <img src="assets/images/logo_blanco.png" alt="Civitech AI">
            <span class="status-dot"></span>
          </div>
          <div class="title-col">
            <h3>Civitech Assistant</h3>
            <span class="status-text">En línea ahora</span>
          </div>
        </div>
        <button class="close-btn" (click)="toggleChat()">✕</button>
      </div>

      <!-- Messages Area -->
      <div class="chat-messages" #scrollContainer>
        <div class="message-group" *ngFor="let msg of messages">
          <div class="message-bubble" 
               [ngClass]="{'user-msg': msg.isUser, 'bot-msg': !msg.isUser}">
            <div class="msg-content" [innerHTML]="msg.text | nl2br"></div>
            <span class="msg-time">{{ msg.timestamp | date:'HH:mm' }}</span>
          </div>
        </div>
        
        <!-- Typing Indicator -->
        <div class="typing-indicator" *ngIf="isTyping">
          <span></span><span></span><span></span>
        </div>
      </div>

      <!-- Input Area -->
      <div class="chat-input-area">
        <textarea 
          [(ngModel)]="userInput" 
          (keydown.enter)="sendMessage($event)"
          placeholder="Escribe tu consulta..."
          rows="1"></textarea>
        <button class="send-btn" [disabled]="!userInput.trim() || isTyping" (click)="sendMessage()">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
          </svg>
        </button>
      </div>
      
      <div class="chat-footer">
        Powered by OpenAI & Civitech
      </div>
    </div>
  `,
  styles: [`
    /* Variables */
    :host {
      --primary: #B30000;
      --primary-dark: #8a0000;
      --bg-chat: #ffffff;
      --bg-msg-user: #B30000;
      --bg-msg-bot: #f3f4f6;
      --text-user: #ffffff;
      --text-bot: #1f2937;
      --radius: 16px;
      --shadow-lg: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    }

    /* Trigger Button */
    .chatbot-trigger {
      position: fixed;
      bottom: 25px;
      right: 25px;
      width: 60px;
      height: 60px;
      background: #0f172a;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.4);
      z-index: 999999;
      transition: transform 0.2s;
    }

    .chatbot-trigger:hover {
      transform: scale(1.05);
    }

    .trigger-logo {
      width: 32px;
      height: 32px;
      object-fit: contain;
      filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
    }

    .notification-badge {
      position: absolute;
      top: -2px;
      right: -2px;
      background: #ef4444;
      color: white;
      font-size: 11px;
      font-weight: bold;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid white;
    }

    /* Ping Animation */
    .ping-animation {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #0f172a;
      opacity: 0.6;
      z-index: -1;
      animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    @keyframes ping {
      75%, 100% {
        transform: scale(1.6);
        opacity: 0;
      }
    }

    /* Chat Window */
    .chat-window {
      position: fixed;
      bottom: 100px;
      right: 25px;
      width: 380px;
      max-width: calc(100vw - 40px);
      height: 550px;
      max-height: calc(100vh - 120px);
      background: var(--bg-chat);
      border-radius: var(--radius);
      box-shadow: var(--shadow-lg);
      display: flex;
      flex-direction: column;
      z-index: 999999;
      overflow: hidden;
      font-family: 'Inter', system-ui, sans-serif;
      border: 1px solid rgba(0,0,0,0.05);
    }

    /* Header */
    .chat-header {
      background: #0f172a;
      color: white;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .avatar {
      position: relative;
      width: 40px;
      height: 40px;
      background: rgba(255,255,255,0.15);
      border-radius: 50%;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .avatar img {
      width: 24px;
      height: 24px;
    }

    .status-dot {
      position: absolute;
      bottom: 2px;
      right: 2px;
      width: 10px;
      height: 10px;
      background: #10b981;
      border: 2px solid white;
      border-radius: 50%;
    }

    .title-col h3 {
      font-size: 16px;
      font-weight: 600;
      margin: 0;
    }

    .status-text {
      font-size: 12px;
      opacity: 0.9;
    }

    .close-btn {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      opacity: 0.8;
      transition: opacity 0.2s;
    }

    .close-btn:hover { opacity: 1; }

    /* Messages Area */
    .chat-messages {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      background: #f9fafb;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .message-bubble {
      max-width: 85%;
      padding: 12px 16px;
      border-radius: 12px;
      font-size: 14px;
      line-height: 1.5;
      position: relative;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }

    .bot-msg {
      background: var(--bg-msg-bot);
      color: var(--text-bot);
      align-self: flex-start;
      border-bottom-left-radius: 2px;
    }

    .user-msg {
      background: var(--primary);
      color: var(--text-user);
      align-self: flex-end;
      border-bottom-right-radius: 2px;
      margin-left: auto; /* Push to right */
    }

    .msg-time {
      display: block;
      font-size: 10px;
      margin-top: 4px;
      opacity: 0.7;
      text-align: right;
    }

    /* Typing Indicator */
    .typing-indicator {
      align-self: flex-start;
      background: var(--bg-msg-bot);
      padding: 12px 16px;
      border-radius: 12px;
      border-bottom-left-radius: 2px;
      display: flex;
      gap: 4px;
    }

    .typing-indicator span {
      width: 6px;
      height: 6px;
      background: #9ca3af;
      border-radius: 50%;
      animation: bounce 1.4s infinite ease-in-out both;
    }

    .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
    .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

    @keyframes bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }

    /* Input Area */
    .chat-input-area {
      padding: 16px;
      background: white;
      border-top: 1px solid #e5e7eb;
      display: flex;
      gap: 10px;
      align-items: flex-end;
    }

    textarea {
      flex: 1;
      border: 1px solid #e5e7eb;
      border-radius: 24px;
      padding: 12px 16px;
      resize: none;
      font-family: inherit;
      font-size: 14px;
      outline: none;
      max-height: 100px;
      transition: border-color 0.2s;
    }

    textarea:focus {
      border-color: var(--primary);
    }

    .send-btn {
      background: var(--primary);
      color: white;
      border: none;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s;
      flex-shrink: 0;
    }

    .send-btn:disabled {
      background: #e5e7eb;
      cursor: not-allowed;
    }

    .send-btn:hover:not(:disabled) {
      background: var(--primary-dark);
    }

    .send-btn svg {
      width: 20px;
      height: 20px;
      margin-left: 2px; /* Visual centering adjustment */
    }

    .chat-footer {
      text-align: center;
      font-size: 10px;
      color: #9ca3af;
      padding-bottom: 8px;
      background: white;
    }
  `],
  animations: [
    trigger('slideUpdate', [
      state('open', style({ transform: 'translateY(0)', opacity: 1, visibility: 'visible' })),
      state('closed', style({ transform: 'translateY(20px)', opacity: 0, visibility: 'hidden' })),
      transition('closed => open', animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')),
      transition('open => closed', animate('200ms ease-out'))
    ])
  ]
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  isOpen = false;
  isTyping = false;
  hasUnread = true;
  userInput = '';
  messages: ChatMessage[] = [];

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  constructor(private chatbotService: ChatbotService) { }

  ngOnInit() {
    // Initial greeting
    setTimeout(() => {
      if (this.messages.length === 0) {
        this.addBotMessage('¡Hola! 👋 Soy la IA de Civitech. ¿Quieres que tu casa trabaje para ti o prefieres seguir usando interruptores? 😉\n\nPregúntame cómo transformamos tu hogar.');
      }
    }, 1500);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.hasUnread = false;
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  sendMessage(event?: Event) {
    if (event) event.preventDefault();

    if (!this.userInput.trim() || this.isTyping) return;

    const text = this.userInput;
    this.userInput = '';

    // Add user message
    this.messages.push({
      text: text,
      isUser: true,
      timestamp: new Date()
    });

    this.isTyping = true;
    this.scrollToBottom();

    // Call service (OpenAI integration handled there)
    this.chatbotService.sendMessage(text).subscribe({
      next: (response) => {
        this.isTyping = false;
        this.addBotMessage(response);
      },
      error: () => {
        this.isTyping = false;
        this.addBotMessage('Lo siento, he tenido un problema de conexión. ¿Podrías repetirlo?');
      }
    });
  }

  private addBotMessage(text: string) {
    this.messages.push({
      text: text,
      isUser: false,
      timestamp: new Date()
    });
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}


