import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare let gtag: Function;

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {
    private initialized = false;

    constructor(private router: Router) { }

    /**
     * Initialize Google Analytics 4
     * TODO: Reemplazar 'G-XXXXXXXXXX' con tu ID de Google Analytics real
     */
    init(trackingId: string = 'G-XXXXXXXXXX'): void {
        if (this.initialized) {
            return;
        }

        // Check if gtag is already loaded via index.html
        if (typeof (window as any).gtag !== 'undefined') {
            console.log('Google Analytics already initialized via index.html');
            this.initialized = true;
            this.listenForRouteChanges();
            return;
        }

        // Check if gtag is available from index.html
        if (typeof (window as any).gtag !== 'undefined') {
            this.initialized = true;
            this.listenForRouteChanges();
        } else {
            console.warn('Google Analytics not loaded');
        }
    }

    /**
     * Track page views on route changes
     */
    private listenForRouteChanges(): void {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: any) => {
                this.trackPageView(event.urlAfterRedirects);
            });
    }

    /**
     * Track a page view
     */
    trackPageView(url: string): void {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                page_path: url
            });
        }
    }

    /**
     * Track custom events
     */
    trackEvent(eventName: string, eventParams?: any): void {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventParams);
        }
    }

    /**
     * Track form submissions
     */
    trackFormSubmit(formName: string): void {
        this.trackEvent('form_submit', {
            form_name: formName
        });
    }

    /**
     * Track button clicks
     */
    trackButtonClick(buttonName: string, location?: string): void {
        this.trackEvent('button_click', {
            button_name: buttonName,
            location: location
        });
    }

    /**
     * Track WhatsApp clicks
     */
    trackWhatsAppClick(): void {
        this.trackEvent('whatsapp_click', {
            event_category: 'engagement',
            event_label: 'WhatsApp Button'
        });
    }

    /**
     * Track phone calls
     */
    trackPhoneCall(): void {
        this.trackEvent('phone_call', {
            event_category: 'engagement',
            event_label: 'Phone Number Click'
        });
    }

    /**
     * Track outbound links
     */
    trackOutboundLink(url: string): void {
        this.trackEvent('click', {
            event_category: 'outbound',
            event_label: url,
            transport_type: 'beacon'
        });
    }
}
