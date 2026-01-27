import { Component, OnInit } from '@angular/core';

interface NewsItem {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
    tag: string;
    link: string;
}

@Component({
    selector: 'app-news-section',
    templateUrl: './news-section.component.html',
    styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent implements OnInit {
    news: NewsItem[] = [];

    constructor() { }

    ngOnInit(): void {
        this.loadNews();
    }

    async loadNews() {
        try {
            const response = await fetch('assets/data/news.json');
            this.news = await response.json();
        } catch (error) {
            console.error('Error cargando noticias:', error);
            // Fallback manual si falla la carga
            this.news = [];
        }
    }
}
