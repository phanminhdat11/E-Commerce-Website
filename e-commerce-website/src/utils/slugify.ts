import { useRouter } from "next/navigation";


// export const slugify = (text?: string): string => {
//     if (!text) return "product";

//     return text
//         .toLowerCase()
//         .normalize("NFD")
//         .replace(/[\u0300-\u036f]/g, "")
//         .replace(/đ/g, "d")
//         .replace(/[^a-z0-9\s-]/g, "")
//         .trim()
//         .replace(/\s+/g, "-")
//         .replace(/-+/g, "-");
// };

// export const handleClickProduct = (product: { id: string; name?: string }) => {

//     const slug = slugify(product.name);
//     router.push(`/production/${slug}/${product.id}`);
// };


export const useHandleClickProduct = () => {

    const router = useRouter()
    const slugify = (text?: string): string => {
        if (!text) return "product";

        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    };
    const handleClickProduct = (product: { id: string; name?: string }) => {

        const slug = slugify(product.name);
        router.push(`/production/${slug}/${product.id}`);
    };

    return { handleClickProduct }



}