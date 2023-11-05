import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'headertoolbar',
  templateUrl: './headertoolbar.component.html',
})
export class HeadertoolbarComponent implements OnInit {

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [{ label: 'Modern Portfolio Theory' }];

      this.home = { icon: "none", label:"Economics Lab"};
  }
}
