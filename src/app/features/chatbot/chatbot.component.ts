import { Component, ElementRef, ViewChild, OnInit, AfterViewChecked, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChatbotService, ChatMessage } from '../../core/services/chatbot.service';
import { Observable } from 'rxjs';

@Pipe({ name: 'nl2br', standalone: true })
export class Nl2brPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    let formatted = value.replace(/\n/g, '<br/>');
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return formatted;
  }
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, Nl2brPipe],
  template: `
    <!-- Floating Button -->
    <div class="chatbot-trigger" (click)="toggleChat()" *ngIf="!isOpen">
      <div class="notification-badge" *ngIf="hasUnread">1</div>
      <div class="ping-animation"></div>
      <img src="assets/images/logo_blanco.png" alt="Chat" class="trigger-logo">
    </div>

    <!-- Chat Window -->
    <div class="chat-window" [@slideUp]="isOpen ? 'open' : 'closed'">
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
          <div class="message-bubble" [ngClass]="{'user-msg': msg.isUser, 'bot-msg': !msg.isUser}">
            <div class="msg-content" [innerHTML]="msg.text | nl2br"></div>

            <!-- Chips / Options -->
            <div class="chips-container" *ngIf="msg.options && msg.options.length > 0">
              <button class="chip-btn"
                      *ngFor="let opt of msg.options"
                      (click)="handleOptionClick(opt)"
                      [class.whatsapp-btn]="opt.action === 'link'">
                {{ opt.label }}
              </button>
            </div>

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
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
        </button>
      </div>

      <div class="chat-footer">Powered by OpenAI & Civitech</div>
    </div>
  `,
  styles: [`
    :host {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      font-family: 'Inter', sans-serif;
    }

    /* ---- Trigger Button ---- */
    .chatbot-trigger {
      position: relative;
      width: 60px;
      height: 60px;
      background: var(--primary, #B30000);
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(179,0,0,0.4);
      transition: transform 0.2s ease;
    }
    .chatbot-trigger:hover { transform: scale(1.08); }

    .trigger-logo {
      width: 36px;
      height: 36px;
      object-fit: contain;
      filter: brightness(10);
    }

    .notification-badge {
      position: absolute;
      top: -4px;
      right: -4px;
      background: #ff4444;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      font-size: 11px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    .ping-animation {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 3px solid var(--primary, #B30000);
      animation: ping 1.5s ease-out infinite;
      opacity: 0.6;
    }
    @keyframes ping {
      0% { transform: scale(1); opacity: 0.6; }
      100% { transform: scale(1.6); opacity: 0; }
    }

    /* ---- Chat Window ---- */
    .chat-window {
      position: fixed;
      bottom: 90px;
      right: 24px;
      width: 360px;
      max-height: 520px;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.18);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* ---- Header ---- */
    .chat-header {
      background: var(--primary, #B30000);
      padding: 14px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
    }
    .header-info { display: flex; align-items: center; gap: 12px; }
    .avatar {
      position: relative;
      width: 42px;
      height: 42px;
      background: rgba(255,255,255,0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .avatar img { width: 28px; height: 28px; object-fit: contain; filter: brightness(10); }
    .status-dot {
      position: absolute;
      bottom: 2px;
      right: 2px;
      width: 10px;
      height: 10px;
      background: #4ade80;
      border-radius: 50%;
      border: 2px solid white;
    }
    .title-col h3 { margin: 0; font-size: 14px; font-weight: 700; }
    .status-text { font-size: 11px; opacity: 0.85; }
    .close-btn {
      background: none;
      border: none;
      color: white;
      font-size: 18px;
      cursor: pointer;
      opacity: 0.8;
      transition: opacity 0.2s;
    }
    .close-btn:hover { opacity: 1; }

    /* ---- Messages ---- */
    .chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: #f8f9fa;
    }
    .message-bubble {
      max-width: 80%;
      padding: 10px 14px;
      border-radius: 16px;
      font-size: 13px;
      line-height: 1.5;
      position: relative;
    }
    .bot-msg {
      background: white;
      border: 1px solid #e5e7eb;
      border-bottom-left-radius: 4px;
      align-self: flex-start;
      color: #1f2937;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    }
    .user-msg {
      background: var(--primary, #B30000);
      color: white;
      border-bottom-right-radius: 4px;
      align-self: flex-end;
    }
    .msg-time {
      display: block;
      font-size: 10px;
      opacity: 0.5;
      margin-top: 4px;
      text-align: right;
    }

    /* ---- Chips ---- */
    .chips-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 10px;
    }
    .chip-btn {
      background: white;
      border: 1.5px solid var(--primary, #B30000);
      color: var(--primary, #B30000);
      padding: 5px 12px;
      border-radius: 16px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s;
      font-weight: 500;
    }
    .chip-btn:hover { background: var(--primary, #B30000); color: white; }
    .whatsapp-btn { background: #25D366; border-color: #25D366; color: white; font-weight: bold; }
    .whatsapp-btn:hover { background: #128C7E; border-color: #128C7E; }

    /* ---- Typing Indicator ---- */
    .typing-indicator {
      display: flex;
      gap: 5px;
      padding: 12px 16px;
      background: white;
      border-radius: 16px;
      border-bottom-left-radius: 4px;
      width: fit-content;
      border: 1px solid #e5e7eb;
    }
    .typing-indicator span {
      width: 8px;
      height: 8px;
      background: #cbd5e1;
      border-radius: 50%;
      animation: bounce 1.2s ease-in-out infinite;
    }
    .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
    .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes bounce {
      0%, 60%, 100% { transform: translateY(0); }
      30% { transform: translateY(-6px); }
    }

    /* ---- Input ---- */
    .chat-input-area {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 14px;
      border-top: 1px solid #e5e7eb;
      background: white;
    }
    .chat-input-area textarea {
      flex: 1;
      border: 1px solid #e5e7eb;
      border-radius: 20px;
      padding: 8px 14px;
      font-size: 13px;
      resize: none;
      outline: none;
      font-family: inherit;
      background: #f8f9fa;
      transition: border-color 0.2s;
    }
    .chat-input-area textarea:focus { border-color: var(--primary, #B30000); background: white; }
    .send-btn {
      background: var(--primary, #B30000);
      border: none;
      border-radius: 50%;
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s;
      flex-shrink: 0;
    }
    .send-btn:hover { transform: scale(1.08); opacity: 0.9; }
    .send-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
    .send-btn svg { width: 18px; height: 18px; fill: white; }

    /* ---- Footer ---- */
    .chat-footer {
      text-align: center;
      font-size: 10px;
      color: #9ca3af;
      padding: 6px;
      background: white;
      border-top: 1px solid #f3f4f6;
    }
  `],
  animations: [
    trigger('slideUp', [
      state('closed', style({ opacity: 0, transform: 'translateY(20px) scale(0.97)', pointerEvents: 'none' })),
      state('open', style({ opacity: 1, transform: 'translateY(0) scale(1)', pointerEvents: 'all' })),
      transition('closed => open', animate('220ms cubic-bezier(0.4, 0, 0.2, 1)')),
      transition('open => closed', animate('180ms cubic-bezier(0.4, 0, 0.2, 1)'))
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
    setTimeout(() => {
      if (this.messages.length === 0) {
        this.messages.push(this.chatbotService.getWelcomeMessage());
      }
    }, 800);
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
    this.messages.push({ text, isUser: true, timestamp: new Date() });
    this.isTyping = true;
    this.scrollToBottom();
    this.triggerBotResponse(this.chatbotService.sendMessage(text));
  }

  handleOptionClick(option: { label: string; value: string; action?: string }) {
    if (option.action === 'link') {
      window.open(option.value, '_blank');
      return;
    }
    this.messages.push({ text: option.label, isUser: true, timestamp: new Date() });
    this.isTyping = true;
    this.scrollToBottom();
    this.triggerBotResponse(this.chatbotService.sendMessage(option.value));
  }

  private triggerBotResponse(obs: Observable<ChatMessage>) {
    obs.subscribe({
      next: (response: ChatMessage) => {
        this.isTyping = false;
        this.messages.push(response);
        this.scrollToBottom();
      },
      error: () => {
        this.isTyping = false;
        this.messages.push({
          text: 'Lo siento, hubo un problema de conexión. Prueba a refrescar. 🙏',
          isUser: false,
          timestamp: new Date()
        });
      }
    });
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch { }
  }
}
