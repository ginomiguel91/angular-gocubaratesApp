import { Component, Input } from '@angular/core';
import { RateReport } from '../interfaces/rates.interface';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card-response',
  templateUrl: './card-response.component.html',
  styleUrls: ['./card-response.component.css'],
})
export class CardResponseComponent {
  @Input() res!: RateReport;
  faFlag = faFlag;
}
