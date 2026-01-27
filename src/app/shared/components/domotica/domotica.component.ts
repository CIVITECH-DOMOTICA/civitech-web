import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseCasesService } from '../../../core/services/use-cases.service';
import { UseCase } from '../../../core/models/use-case.model';

@Component({
  selector: 'domotica-civitech',
  templateUrl: './domotica.component.html',
  styleUrls: ['./domotica.component.scss']
})
export class DomoticaComponent implements OnInit {
  useCases: UseCase[] = [];

  constructor(
    private router: Router,
    private useCasesService: UseCasesService
  ) { }

  ngOnInit(): void {
    this.useCases = this.useCasesService.getUseCases();
  }

  verUseCase(slug: string): void {
    this.router.navigate(['/domotica', slug]);
  }
}
