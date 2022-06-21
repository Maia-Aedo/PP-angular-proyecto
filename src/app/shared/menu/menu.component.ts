import { Component, OnInit } from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  visibleSidebar1;

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  constructor(private primengConfig: PrimeNGConfig) { }

}
