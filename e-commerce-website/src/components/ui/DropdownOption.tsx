import { Button, Dropdown } from "antd";
import { League_Spartan } from "next/font/google";
import { MenuProps } from "antd"
import { DownOutlined, } from '@ant-design/icons';




type Props = {
    listMenu: MenuProps,
    dataStudent: (e: any) => void

}

const leagueSpartan = League_Spartan({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-league-spartan",
});

export default function DropDownComponent({ listMenu, dataStudent}: Props) {


    return (
        <Dropdown menu={listMenu} >
            <Button
                size="large"
                className={`${leagueSpartan.className} w-30`}
                icon={<DownOutlined />}
                iconPlacement="end"
                onChange={dataStudent}
            >
           
            </Button>
        </Dropdown>
    )
};
