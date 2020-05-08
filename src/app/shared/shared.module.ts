import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';


@NgModule({
    declarations: [InputComponent, RatingComponent,RadioComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
            CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}