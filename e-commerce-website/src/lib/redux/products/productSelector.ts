import { RootState } from "../store";

const normalizeVietnameseText = (value: string) => {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
};

export const selectFilteredProduct = (state: RootState) => {

    const {listDataProduct, searchKeyword} = state.products
    const keyword = normalizeVietnameseText(searchKeyword);

    if (!keyword) {
        return listDataProduct;
    }

    const filtered = listDataProduct.filter( product => {
        const normalizedName = normalizeVietnameseText(product.name);
        const matchingSearch = 
        normalizedName.includes(keyword)
        return matchingSearch;
    })
    return filtered;
}
