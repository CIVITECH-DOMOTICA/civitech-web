import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cookie-banner',
    templateUrl: './cookie-banner.component.html',
    styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {
    showBanner = false;

    ngOnInit(): void {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setTimeout(() => {
                this.showBanner = true;
            }, 2000);
        }
    }

    acceptCookies(): void {
        localStorage.setItem('cookieConsent', 'accepted');
        this.showBanner = false;
    }

    declineCookies(): void {
        localStorage.setItem('cookieConsent', 'declined');
        this.showBanner = false;
    }
}
