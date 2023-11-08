import {Component, inject} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {StockDialogFormInterface} from '../../interfaces/stock-dialog-form.interface';
import {StockModel} from '../../models/stock.model';

@Component({
  selector: 'stock-dialog',
  standalone: true,
  imports: [ButtonModule, PaginatorModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './stock-dialog.component.html'
})
export class StockDialogComponent {
  protected form: FormGroup<StockDialogFormInterface>;
  private readonly dialogRef = inject(DynamicDialogRef);
  private readonly dialogConfig = inject(DynamicDialogConfig);

  constructor() {
    const stock: StockModel | undefined = this.dialogConfig.data;
    this.form = this.initForm(stock);
  }

  protected onSaveClick(): void {
    if (this.form.untouched || this.form.pristine) {
      return;
    }
    const formValues = this.form.getRawValue();
    this.dialogRef.close(formValues);
  }

  protected onCloseClick(): void {
    this.dialogRef.close();
  }

  private initForm(stock?: StockModel): FormGroup<StockDialogFormInterface> {
    return new FormGroup<StockDialogFormInterface>({
      name: new FormControl<string | null>(stock?.name ?? null, Validators.required),
      variance: new FormControl<number | null>(stock?.variance ?? null, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]*$')]),
      expectedReturn: new FormControl<number | null>(stock?.expectedReturn ?? null, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]*$')])
    });
  }
}
