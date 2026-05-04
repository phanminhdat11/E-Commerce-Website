import { url_data } from "@/config/db.config";
import axios from "axios";
import { ajax } from "rxjs/ajax";
import { from } from "rxjs/internal/observable/from";
import { map } from "rxjs/internal/operators/map";


class CartServices {
    private url_cart = `${url_data}/api/cart`;

    addToCart(productId: string, quantity: number) {
        return ajax.post(`${this.url_cart}`, { productId, quantity })
            .pipe(
                map((res: any) => res.response.data)
            )
    };

    getListCart() {
        return ajax.getJSON(`${this.url_cart}`)
            .pipe(
                map((res: any) =>
                    res.data.items)
            )
    };

    updateQuanity(productId: string, quantity: number) {
        return ajax.post(`${this.url_cart}`, { productId, quantity })
            .pipe(
                map((res: any) =>
                    res.data.items)
            )
    };

    deleteItem(itemId: string){
        return ajax.delete(`${this.url_cart}?itemId=${itemId}`, {itemId})
        .pipe(
            map((res: any)=> {
                
                res.response.data
            })
        )
    };


}
export const cartServices = new CartServices();