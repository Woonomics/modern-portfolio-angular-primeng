import {FormControl} from '@angular/forms';

export interface StockDialogFormInterface {
  name: FormControl<string | null>;
  variance: FormControl<number | null>;
  expectedReturn: FormControl<number | null>;
}
