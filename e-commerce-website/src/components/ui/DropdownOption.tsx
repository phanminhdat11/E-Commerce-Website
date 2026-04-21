import { Button, Dropdown } from "antd";
import { League_Spartan } from "next/font/google";
import { MenuProps } from "antd"
import { DownOutlined, } from '@ant-design/icons';
import { last } from "rxjs";




type Props = {
    listMenu: MenuProps,
    dataStudent: (e: any) => void,
    label: string

}


const leagueSpartan = League_Spartan({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-league-spartan",
});

export default function DropDownComponent({ listMenu, dataStudent, label }: Props) {


    return (
        <Dropdown menu={{
            ...listMenu,
            onClick: dataStudent
        }} >
            <Button
                size="large"
                className={`${leagueSpartan.className} w-36`}
                icon={<DownOutlined />}
                iconPlacement="end"
                onChange={dataStudent}
            >
                {
                   label || "Chọn giá"
                }
            </Button>
        </Dropdown>
    )
};
