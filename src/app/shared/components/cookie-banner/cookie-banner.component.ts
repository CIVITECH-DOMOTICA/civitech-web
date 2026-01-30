import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  template: `
    <div class="cookie-overlay" *ngIf="isVisible">
      <div class="cookie-card">
        <div class="cookie-header">
          <span class="cookie-icon">🍪</span>
          <h3>¿Aceptas unas galletitas?</h3>
        </div>
        <p>
          Utilizamos cookies propias y de terceros para analizar nuestro tráfico y mejorar tu experiencia. 
          Puedes leer más en nuestra <a routerLink="/politica-cookies">Política de Cookies</a>.
        </p>
        <div class="actions">
          <button class="btn-secondary" (click)="acceptCookies()">Necesarias</button>
          <button class="btn-primary" (click)="acceptCookies()">Aceptar Todo</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cookie-overlay {
      position: fixed;
      bottom: 20px;
      left: 20px;
      right: 20px;
      display: flex;
      justify-content: center;
      z-index: 10000;
      pointer-events: none;
    }

    .cookie-card {
      pointer-events: auto;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      padding: 1.5rem;
      border-radius: 20px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0,0,0,0.05);
      max-width: 400px;
      width: 100%;
      animation: slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    @media (min-width: 769px) {
      .cookie-card {
        position: fixed;
        bottom: 30px;
        left: 30px;
        right: auto;
      }
    }

    .cookie-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 0.8rem;
    }

    .cookie-header h3 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 700;
        color: #1f2937;
    }

    .cookie-icon {
      font-size: 1.5rem;
      animation: bounce 2s infinite;
    }

    p {
      margin: 0 0 1.2rem;
      font-size: 0.9rem;
      line-height: 1.5;
      color: #4b5563;
    }

    a {
      color: #B30000; /* Civitech Red */
      font-weight: 600;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
      color: #900000;
    }

    .actions {
      display: flex;
      gap: 10px;
    }

    button {
      flex: 1;
      padding: 10px 16px;
      border-radius: 12px;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      border: none;
    }

    .btn-primary {
      background: linear-gradient(135deg, #B30000 0%, #7d0000 100%); /* Primary Gradient */
      color: white;
      box-shadow: 0 4px 12px rgba(179, 0, 0, 0.3);
    }
    
    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(179, 0, 0, 0.4);
    }

    .btn-secondary {
      background: transparent;
      border: 1px solid #d1d5db;
      color: #374151;
    }
    
    .btn-secondary:hover {
        background: #f3f4f6;
        border-color: #9ca3af;
    }

    @keyframes slideInUp {
      from { transform: translateY(100px) scale(0.95); opacity: 0; }
      to { transform: translateY(0) scale(1); opacity: 1; }
    }

    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-3px); }
    }
  `]
})
export class CookieBannerComponent implements OnInit {
  isVisible = false;

  ngOnInit(): void {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      this.isVisible = true;
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.isVisible = false;
  }
}
