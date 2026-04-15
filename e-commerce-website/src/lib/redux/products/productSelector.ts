import { createSelector } from "reselect";
import { RootState } from "../store";

const normalizeVietnameseText = (value: string) => {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
};

const selectedProductState = (state: RootState) => state.products;
export const selectFilteredProduct = createSelector(
    [selectedProductState],
    (state) => {
        const { listDataProduct, searchKeyword, filterPrice } = state;

        let result = [...listDataProduct];

        const keyword = normalizeVietnameseText(searchKeyword);

        if (keyword) {
            result = result.filter((p) =>
                normalizeVietnameseText(p.name).includes(keyword)
            );
        }

        if (filterPrice?.minPrice !== null && filterPrice?.minPrice !== undefined) {
            result = result.filter((p) => p.price >= filterPrice.minPrice!);
        }

        if (filterPrice?.maxPrice !== null && filterPrice?.maxPrice !== undefined) {
            result = result.filter((p) => p.price <= filterPrice.maxPrice!);
        }

        return result;
    }
);