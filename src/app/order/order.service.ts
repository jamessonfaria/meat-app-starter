import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map'

import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { Order } from './order.model';
import { MEAT_API } from './../app.api';

@Injectable()
export class OrderService {

    constructor(
        private cartService: ShoppingCartService,
        private http: Http
    ){}

    itemsValue() {
        return this.cartService.total()
    }

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`,
                              JSON.stringify(order),
                              new RequestOptions({headers: headers}))
                        .map(response=> response.json())
    }

    clear(){
        this.cartService.clear()
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem){
        this.cartService.removeItem(item)
    }

}
