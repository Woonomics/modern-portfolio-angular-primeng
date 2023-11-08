import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SettingsComponent} from '../settings/settings.component';

@Component({
  selector: 'header-toolbar',
  templateUrl: './header-toolbar.component.html',
  imports: [
    SettingsComponent
  ],
  standalone: true
})
export class HeaderToolbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [{label: 'Modern Portfolio Theory'}];
    this.home = {icon: 'none', label: 'Economics Lab'};
  }
}
