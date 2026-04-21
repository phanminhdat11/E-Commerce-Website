// epics/product.epic.ts
import { Epic, ofType } from 'redux-observable';
import { mergeMap, map, catchError, forkJoin, of } from 'rxjs';
import { ProductService } from '../../../../services/product/product.service';
import { Observable } from '@reduxjs/toolkit';
import { fetchProduct, fetchProductError, fetchProductSuccess } from '@/lib/redux/products/productSice';
import { RootState } from '@/lib/redux/store';

const productService = new ProductService();

export const fetchProductEpic: Epic<any, any, RootState> = (action$) =>
    action$.pipe(
        ofType(fetchProduct.type),
        mergeMap(() =>
            productService.getProductList().pipe(
                mergeMap((products: any[]) => {
                    const requests = products.map((product) =>
                        productService.getProductImagesByID(product.id).pipe(
                            map((images: any[]) => {
                                const primary = images.find((img) => img.isPrimary);
                                return {
                                    ...product,
                                    image: primary?.imageUrl || null,
                                };
                            }),
                            catchError(() =>
                                of({
                                    ...product,
                                    image: null,
                                })
                            )
                        )
                    );

                    return forkJoin(requests);
                }),
                map((result) => fetchProductSuccess(result)),
                catchError((error) => of(fetchProductError(error)))
            )
        )
);