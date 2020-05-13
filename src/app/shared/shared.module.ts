import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { OrderService } from "app/order/order.service";
import { RestaurantService } from "app/restaurants/restaurants.service";
import { SnackbarComponent } from 'app/shared/messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';
import { LoggedInGuard } from './../security/loggedin.guard';
import { LoginService } from './../security/login/login.service';
import { LeaveOrderGuard } from './../order/leave-order.guard';

@NgModule({
    declarations: [InputComponent, RatingComponent,RadioComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent,
            CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, OrderService, 
                RestaurantService, NotificationService, 
                LoginService, LoggedInGuard, LeaveOrderGuard]
        }
    }
}