import { Component } from '@angular/core';

import {
  IconDefinition,
  faMoneyCheckDollar,
} from '@fortawesome/free-solid-svg-icons';
export interface MenuItem {
  text: string;
  link: string;
  icon: IconDefinition;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class SidebarComponent {
  faMoneyCheckDollar = faMoneyCheckDollar;
  items: MenuItem[] = [
    {
      text: 'Tasas Diarias formales',
      link: '/rates/formalDaily',
      icon: faMoneyCheckDollar,
    },
    {
      text: 'Tasas Diarias formales invertidas',
      link: '/rates/invertedFormalDaily',
      icon: faMoneyCheckDollar,
    },
    {
      text: 'Tasas Diarias informales',
      link: '/rates/informalDaily',
      icon: faMoneyCheckDollar,
    },
    {
      text: 'Tasas Diarias informales invertidas',
      link: '/rates/invertedInformalDaily',
      icon: faMoneyCheckDollar,
    },
  ];
}
