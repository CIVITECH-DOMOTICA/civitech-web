import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'carrousel-opiniones-civitech',
  templateUrl: './carrousel-opiniones.component.html',
  styleUrls: ['./carrousel-opiniones.component.scss']
})
export class CarrouselOpinionesComponent implements OnInit {
  @Input() opiniones: any[] = [];  // Recibe opiniones desde el padre
  @Output() cardClick = new EventEmitter<any>();  // Emite cuando se hace click en una card
  responsiveOptions: any[] = [];

  onCardClick(opinion: any): void {
    this.cardClick.emit(opinion);
  }

  ngOnInit() {

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }];
  }
}
