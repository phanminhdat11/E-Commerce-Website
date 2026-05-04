// epics/product.epic.ts
import { Epic, ofType } from 'redux-observable';
import { mergeMap, map, catchError, forkJoin, of, switchMap } from 'rxjs';
import { Observable, PayloadAction } from '@reduxjs/toolkit';
import {  fetchProduct, fetchProductError, fetchProductSuccess, getProductDetail, getProductDetailError, getProductDetailSuccess, } from '@/lib/redux/products/productSlice';
import { RootState } from '@/lib/redux/store';
import { productService } from '@/services/product/product.service';
import { cartServices } from '@/services/cart/cart.service';


export const fetchProductEpic: Epic<any, any, RootState> = (action$) =>
    action$.pipe(
        ofType(fetchProduct.type),
        mergeMap(() =>
            productService.getProductList().pipe(
                mergeMap((products: any[]) => {
                    const requests = products.map((product) =>
                        productService.getProductImagesByID(product.id).pipe(
                            map((images: any) => {
                                const primary = images.data.data.find((img: any) => img.isMain);
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


export const getProductImagesEpic: Epic = (action$) => 
    action$.pipe(
        
        
    )

export const getDetailProductEpic: Epic<any, any, RootState>  = (action$) =>
    action$.pipe(
        ofType(getProductDetail.type),
        mergeMap((action: any) =>
            productService.getProductDetailById(action.payload.productId).pipe(
                map((item) => getProductDetailSuccess(item)),
                catchError((error) =>
                    of(getProductDetailError(error.message))
                )
            )
        )
    );