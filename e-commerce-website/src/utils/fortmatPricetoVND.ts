export const useFortmatPriceToVND = () => {
    const handleConvertPriceToVND = (price: number) => {
        return new Intl.NumberFormat("vi-VN").format(price) + " VND"
    }
    const handlePercentDisoucnt = (price: number, filnalPrice: number) => {
        const percent = ((price - filnalPrice) / price) * 100
        return percent;
    }

    return {handleConvertPriceToVND, handlePercentDisoucnt}

}