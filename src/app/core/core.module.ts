import { NgModule } from "@angular/core";

import { RestaurantService } from './../restaurants/restaurants.service';
import { OrderService } from './../order/order.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';

@NgModule({
    providers: [ShoppingCartService, OrderService, RestaurantService]
})
export class CoreModule {}