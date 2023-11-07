import {Component} from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  imports: [
    ButtonModule
  ],
  standalone: true
})
export class SettingsComponent {
}
