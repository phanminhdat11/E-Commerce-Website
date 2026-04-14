import { usePathname } from "next/navigation";

export const useGetPathName = () => {
    const pathname = usePathname();
    const formatTitle = (path: string) =>
        path.replace("/", "").charAt(0).toUpperCase() + path.slice(2);
    const title = formatTitle(pathname);

    return title;
}