import { ofType, Epic } from "redux-observable";
import { mergeMap, map, catchError, tap, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import { addToCart, addToCartError, addToCartSuccess, decreamentQuanity,  deleteItem,  fetchCart, fetchCartError, fetchCartSuccess, increamentQuanity, } from "../cartSlice";
import { cartServices } from "@/services/cart/cart.service";
import { RootState } from "../../store";


export const addToCartEpic: Epic<any, any, RootState> = (action$) =>
    action$.pipe(
        ofType(addToCart.type),

        mergeMap((action: any) =>
            cartServices.addToCart(
                action.payload.productId,
                action.payload.quantity
            ).pipe(
                map((res: any) => {
                    const items = res.items;
                    console.log(items)
                    return addToCartSuccess(items);
                }),
                catchError((err) =>
                    of(addToCartError(err.message))
                )
            )
        )
    );

export const fetchCartEpic: Epic<any, any, RootState>  = (action$) =>
    action$.pipe(
        ofType(fetchCart.type),
        mergeMap(() =>
            cartServices.getListCart()
                .pipe(
                    map((res: any) =>
                           fetchCartSuccess(res)
                    ),
                    catchError((err) =>
                        of(fetchCartError(err.message))
                    )
                )
        )
    );

export const increamentQuanityProduct: Epic = (action$) =>
    action$.pipe(
        ofType(increamentQuanity.type),
        mergeMap((action: any) =>
            cartServices.updateQuanity(
                action.payload.productId,
                action.payload.quantity
            ).pipe(
                map((items) => fetchCartSuccess(items)),
                catchError((err) => of(fetchCartError(err.message)))
            )
        )
    )

export const decreamentQuanityProduct: Epic = (action$) =>
    action$.pipe(
        ofType(decreamentQuanity.type),
        mergeMap((action: any) =>
            cartServices.updateQuanity(
                action.payload.productId,
                action.payload.quantity - 1,
            ).pipe(
                map((items) => 
                   
                    fetchCartSuccess(items)
            ),
                catchError((err) => of(fetchCartError(err.message)))
            )
        )
    )


export const deleteItemInCartEpic: Epic<any, any, RootState>  = (action$) => 
    action$.pipe(
        ofType(deleteItem.type),
        mergeMap((action:any) => 
            cartServices.deleteItem(
                action.payload.id,
            )
        .pipe(
            map((items: any) => 
              
             fetchCart()
              
            ),
              catchError((err) => of(fetchCartError(err.message)))
        )
    )
)