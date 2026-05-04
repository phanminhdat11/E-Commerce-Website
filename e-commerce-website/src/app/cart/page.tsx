"use client";

import { Breadcrumb } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { useEffect } from "react";
import {
    decreamentQuanity,
    deleteItem,
    fetchCart,
    increamentQuanity,
} from "@/lib/redux/cart/cartSlice";
import type { CartItems } from "@/lib/redux/cart/cartSlice";
import ItemCartComponent from "@/components/cart/ItemCartComponent";
import { useHandleClickProduct } from "@/utils/slugify";
import CheckoutBarComponent from "@/components/cart/CheckoutBarComponent";

export default function CartPage() {
    const dispatch = useAppDispatch();
    const cartState = useAppSelector((state) => state.cart);
    const { handleClickProduct } = useHandleClickProduct();

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    let total: number = 0;
    let tong: number = 0;
    let tax: number = 10;

    cartState.items.forEach((item) => {
        tong = item.unitPrice! * item.quantity!
        total = total + tong
        
    })
    tong = total;
    total = total * 0.9;

 

    if(cartState.items.length == 0 ) return <div className="flex justify-center items-center"><p>Giỏ hàng trống</p></div>
   if(cartState.loading) return <div className="flex justify-center items-center"><p>{cartState.loading}</p></div>
    return (
        <>

            <div className="relative left-1/2 w-[calc(100vw-2rem)] max-w-[1720px] -translate-x-1/2 space-y-6 pb-48 md:w-[calc(100vw-8rem)] md:pb-44 lg:w-[calc(100vw-21rem)] 2xl:w-[calc(100vw-23rem)]">

                <Breadcrumb
                    items={[
                        {
                            href: "",
                            title: <ShoppingCartOutlined />,
                        },
                        {
                            title: "Cart",
                        },
                    ]}
                />


                <div className="space-y-4 mt-4">
                    {cartState.items.map((item: CartItems) => (
                        <ItemCartComponent
                            key={item.productId}
                            onClick={() => handleClickProduct(item)}
                            cart={item}
                            increaseQuantity={() =>
                                dispatch(
                                    increamentQuanity({
                                        productId: item.productId,
                                        quantity: 1,
                                    })
                                )
                            }
                            decreaseQuantity={() =>
                                dispatch(
                                    decreamentQuanity({
                                        productId: item.productId,
                                        quantity: 1,
                                    })
                                )
                            }
                            deleteItem={() =>
                                dispatch(
                                    deleteItem(
                                        {
                                            id: item.id!
                                        }
                                    )
                                )
                            }
                        />
                    ))}
                </div>
            </div>
            <div className="fixed bottom-2 left-3/5 z-50 w-[calc(100vw-2rem)] max-w-[1720px] -translate-x-1/2 md:w-[calc(100vw-8rem)] lg:w-[calc(100vw-21rem)] 2xl:w-[calc(100vw-23rem)]">
                <CheckoutBarComponent total={total} tax={tax} subtotal={tong} />
            </div>

        </>
    );
}
