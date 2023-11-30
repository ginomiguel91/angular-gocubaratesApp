import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RatesService } from '../../services/rates.service';
import { RateReport } from '../../interfaces/rates.interface';
import { switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rate-daily',
  templateUrl: './rate-daily.component.html',
})
export class RateDailyComponent implements OnInit {
  coins: string[] = [];
  res!: RateReport;
  showResultDiv = false;
  rateLabel: string = '';
  constructor(
    private fb: FormBuilder,
    private rateService: RatesService,
    private route: Router
  ) {}

  rateForm: FormGroup = this.fb.group({
    coin: ['', Validators.required],
  });

  get coin() {
    return this.rateForm.get('coin');
  }

  errorFieldClass(field: string) {
    return this.rateForm.controls[field].invalid &&
      (this.rateForm.controls[field].touched ||
        this.rateForm.controls[field].dirty)
      ? 'form-control is-invalid'
      : 'form-control is-valid';
  }

  msgErrorsClassField(field: string): string {
    if (this.errorFieldClass(field) === 'form-control is-invalid') {
      return 'invalid-feedback';
    } else {
      return 'valid-feedback';
    }
  }

  msgErrorValidation(field: string): string {
    if (this.msgErrorsClassField(field) === 'form-control is-invalid') {
      return '¡Debe seleccionar un elemento!';
    } else {
      return '!Seleccionado el elemento!';
    }
  }

  ngOnInit(): void {
    this.rateForm.markAllAsTouched();
    this.coins = this.rateService.coins;

    // Obtén el segmento de la URL
    const urlSegment = this.route.url.toString();
    console.log('URL Segment:', urlSegment);

    // Mapea el segmento a un label correspondiente
    this.rateLabel = this.mapUrlSegmentToLabel(urlSegment);

    // Escucha los cambios en la moneda seleccionada
    this.rateForm
      .get('coin')
      ?.valueChanges.pipe(
        switchMap((coin) => this.getRatesBasedOnLabel(coin)),
        tap((result) => {
          this.showResultDiv = true;
          this.res = result;
          console.log('Resultado:', this.res);
        })
      )
      .subscribe({
        next: () => {
          Swal.fire({
            position: 'top-end',
            title: '¡Consulta satisfactoria!',
            text: 'Los datos fueron encontrados',
            icon: 'success',
            showConfirmButton: false,
          });
        },

        error: (err) => {
          console.log('err:', err);
          Swal.fire({
            position: 'top-end',
            title: '¡Error!',
            text: 'Problemas con el servicio,intente más tarde...',
            icon: 'error',
            showConfirmButton: false,
          });
        },
      });
  }

  private mapUrlSegmentToLabel(urlSegment: string): string {
    // Remover '/rates/' y mapear el segmento restante a una etiqueta
    const segmentWithoutRates = urlSegment.replace('/rates/', '');

    switch (segmentWithoutRates) {
      case 'formalDaily':
        return 'Diaria Formal';
      case 'invertedFormalDaily':
        return 'Diaria Formal Invertida';
      case 'informalDaily':
        return 'Diaria Informal';
      case 'invertedInformalDaily':
        return 'Diaria Informal Invertida';
      default:
        return '';
    }
  }

  private getRatesBasedOnLabel(coin: string) {
    switch (this.rateLabel) {
      case 'Diaria Formal':
        return this.rateService.getFormalDailyRates(coin);
      case 'Diaria Formal Invertida':
        return this.rateService.getInvertedFormalDailyRates(coin);
      case 'Diaria Informal':
        return this.rateService.getInformalDailyRates(coin);
      case 'Diaria Informal Invertida':
        return this.rateService.getInvertedInformalDailyRates(coin);
      default:
        throw new Error('Invalid URL segment');
    }
  }
}
