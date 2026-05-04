import { url_data } from "@/config/db.config";
import axios from "axios";
import { from } from "rxjs";
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';



class ProductService {

    private url_db_product = `${url_data}/api/products`;

    getProductList() {
        return ajax.getJSON(this.url_db_product).pipe(
            map((res: any) => res.data.items))

    };

    getProductImagesByID(productId: number) {
        return ajax.getJSON(`${this.url_db_product}/${productId}/images`)
            .pipe(
                map((res) => res)
            );
    };
    getProductDetailById(productId: string) {
        return ajax
            .getJSON(`${this.url_db_product}/${productId}/detail`)
            .pipe(
                map((res: any) => {
                    return res.data; 
                })
            );
    }
}

export const productService = new ProductService();