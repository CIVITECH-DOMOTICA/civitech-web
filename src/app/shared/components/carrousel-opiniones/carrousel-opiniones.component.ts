import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'carrousel-opiniones-civitech',
  templateUrl: './carrousel-opiniones.component.html',
  styleUrls: ['./carrousel-opiniones.component.scss']
})
export class CarrouselOpinionesComponent implements OnInit {
  // opiniones: any[] = [];

  @Input() opiniones: any[] = [];  // Recibe opiniones desde el padre
  responsiveOptions: any[] = [];

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
