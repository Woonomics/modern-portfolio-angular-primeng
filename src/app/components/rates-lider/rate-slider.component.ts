import {Component} from '@angular/core';
import {SliderModule} from 'primeng/slider';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'rate-slider',
  templateUrl: './rate-slider.component.html',
  imports: [
    SliderModule,
    FormsModule,
    InputTextModule
  ],
  standalone: true
})
export class RateSliderComponent {
  value: number = 50;
}
