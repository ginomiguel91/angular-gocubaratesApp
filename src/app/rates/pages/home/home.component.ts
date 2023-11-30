import { Component } from '@angular/core';
import {
  faDatabase,
  faServer,
  faGlobe,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  faDatabase = faDatabase;
  faServer = faServer;
  faGlobe = faGlobe;
  faHome = faHome;
}
