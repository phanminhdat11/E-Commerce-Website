import axios from "axios";
import { from } from "rxjs";
import { map } from 'rxjs/operators';

const url_data = process.env.NEXT_PUBLIC_API_URL;

export class ProductService {

    private url_db = `${url_data}/api/products`;
    getProductList() {
        return from(axios.get(this.url_db)).pipe(
            map((res: any) => res.data.data.items)
        );
    };
    getProductImagesByID(id: number) {
        return from(
            axios.get(`${url_data}/api/products/${id}/images`)
        ).pipe(
            map((res) => res.data)
        );
    }
}