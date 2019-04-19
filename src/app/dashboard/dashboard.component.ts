import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Plaid } from '../_services/plaid.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  date = Date.now();
  panelOpenState:boolean;

  constructor(private plaid:Plaid) {
    plaid.test().subscribe((res) => {
      console.log(res);
    });
  }


}
