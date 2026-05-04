"use client";

import { useEffect, useState } from "react";
import {
    faMinus,
    faPlus,
    faCartShopping,
    faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { getProductDetail } from "@/lib/redux/products/productSlice";
import { useParams } from "next/navigation";
import { useFortmatPriceToVND } from "@/utils/fortmatPricetoVND";
import { addToCart, fetchCart } from "@/lib/redux/cart/cartSlice";
import ItemProductComponent from "@/components/ui/ItemProductComponent";
import { useHandleClickProduct } from "@/utils/slugify";

export default function ProductDetailPage() {
    const [quantity, setQuantity] = useState(1);

    const dispatch = useAppDispatch();
    const params = useParams();
    const { handleClickProduct } = useHandleClickProduct();
    const slugArray = params.slug as string[];
    const id = slugArray?.at(1);

    const handleConvertPriceToVND =
        useFortmatPriceToVND().handleConvertPriceToVND;

    const { productDetail: product, loading, error } = useAppSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);
    
    useEffect(() => {
        if (id) {
            dispatch(getProductDetail({ productId: id }));
        }
    }, [id, dispatch]);

    if (loading) {
        return <div className="p-10 text-center">Loading...</div>;
    }

    if (error) {
        return <div className="p-10 text-center text-red-500">{error}</div>;
    }

    if (!product) {
        return <div className="p-10 text-center">No product found</div>;
    }

    return (
        <div className="relative left-1/2 w-[calc(100vw-2rem)] max-w-[1720px] -translate-x-1/2 space-y-6 pb-20 md:w-[calc(100vw-8rem)] md:pb-6 lg:w-[calc(100vw-21rem)] 2xl:w-[calc(100vw-23rem)]">
            <Breadcrumb
                items={[
                    { href: "", title: <HomeOutlined /> },
                    { title: "Shop" },
                    { title: "Product" },
                    { title: product.name },
                ]}
            />

            <div className="grid mt-4 grid-cols-1 gap-6 lg:grid-cols-[1fr_1.1fr] xl:gap-10">

                <div className="space-y-4">
                    <div className="flex aspect-square items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <img
                            src={product.images?.[0] || "/placeholder.png"}
                            alt={product.name}
                            className="max-h-[420px] w-full object-contain"
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
                        {product.images?.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${product.name} ${index + 1}`}
                                className="aspect-square w-full rounded-xl border border-slate-200 bg-white object-cover p-1 shadow-sm transition hover:border-orange-300 hover:shadow"
                            />
                        ))}
                    </div>
                </div>


                <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                            {product.name}
                        </h1>
                        <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                            {product.price !== product.finalPrice && (
                                <p className="text-sm text-slate-400 line-through">
                                    {handleConvertPriceToVND(product.price)}
                                </p>
                            )}
                            <p className="text-2xl font-semibold text-orange-500">
                                {handleConvertPriceToVND(product.finalPrice)}
                            </p>
                        </div>
                    </div>

                    {product.specifications?.length ? (
                        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                            <h2 className="text-sm font-semibold text-slate-700">
                                Specifications
                            </h2>
                            <div className="mt-3 max-h-[320px] overflow-y-auto overscroll-contain pr-1 [scrollbar-gutter:stable] sm:pr-2">
                                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                    {product.specifications?.map((s, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2 text-sm"
                                        >
                                            <span className="text-slate-500">
                                                {s.key}
                                            </span>
                                            <span className="text-right font-medium text-slate-800">
                                                {s.value}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* description  */}
                                <p className="mt-5 text-sm text-slate-500">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quam, eaque sit quidem
                                    enim in et recusandae provident porro
                                    voluptate laudantium delectus veniam
                                    repellat nobis, minus ipsa natus temporibus
                                    tenetur vitae. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Quam, eaque
                                    sit quidem enim in et recusandae provident
                                    porro voluptate laudantium delectus veniam
                                    repellat nobis, minus ipsa natus temporibus
                                    tenetur vitae. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Quam, eaque
                                    sit quidem enim in et recusandae provident
                                    porro voluptate laudantium delectus veniam
                                    repellat nobis, minus ipsa natus temporibus
                                    tenetur vitae.
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quam, eaque sit quidem
                                    enim in et recusandae provident porro
                                    voluptate laudantium delectus veniam
                                </p>
                            </div>
                        </div>
                    ) : null}

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                            <button
                                type="button"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-[0.98]"
                                onClick={() =>
                                    setQuantity(Math.max(1, quantity - 1))
                                }
                                aria-label="Decrease quantity"
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </button>

                            <span className="min-w-10 text-center text-sm font-semibold tabular-nums">
                                {quantity}
                            </span>

                            <button
                                type="button"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-[0.98]"
                                onClick={() => setQuantity(quantity + 1)}
                                aria-label="Increase quantity"
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>

                        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:justify-end">
                            <ButtonComponent
                                label="Add to cart"
                                iconStart={
                                    <FontAwesomeIcon
                                        icon={faCartShopping}
                                        className="text-base"
                                    />
                                }
                                className="w-full rounded-2xl shadow-sm sm:w-auto"
                                onClick={() => {
                                    dispatch(
                                        addToCart({
                                            productId: product.id,
                                            quantity: 1,
                                        })
                                    );
                                }}
                            />
                            <ButtonComponent
                                iconEnd={
                                    <FontAwesomeIcon icon={faShoppingBag} />
                                }
                                label="Buy now"
                                variant="secondary"
                                className="w-full rounded-2xl shadow-sm sm:w-auto"
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 mt-4 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5 2xl:grid-cols-5 2xl:gap-6">

                {
                    product.relatedProducts.map((product: any, index: any) => (
                        <ItemProductComponent
                            key={index}
                            product={product}
                            onAddToCart={() => dispatch(
                                addToCart({
                                    productId: product.id,
                                    quantity: 1,
                                })
                            )}
                            onClick={() => handleClickProduct({ productId: product.id, name: product.name })}
                        />
                    ))
                }
            </div>
        </div>
    );
}
