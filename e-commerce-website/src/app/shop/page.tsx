"use client"
import ItemCardComponent from "@/components/ui/ItemCartComponent";
import { Breadcrumb } from "antd";

import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import SearchBoxComponent from "@/components/ui/SearchBoxComponent";
import { useState } from "react";
import FilterComponent from "@/components/ui/FilterComponent";

export default function ShopPage() {


    const [openFilter, setOpenFilter] = useState(false);


    return (
        <>
            <div className="" >
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <Breadcrumb
                        items={[
                            {
                                href: '',
                                title: <HomeOutlined />,
                            },
                            {
                                title: 'Shop',
                            },
                        ]}
                    />
                    <div className="flex items-center space-x-4">
                        <SearchBoxComponent />
                        <FontAwesomeIcon icon={faFilter} className="text-2xl" onClick={() => setOpenFilter(!openFilter)} />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-6 mt-5" >
                    <ItemCardComponent />
                    <ItemCardComponent />
                </div>

            </div>
            {openFilter && (
                <div className="absolute top-40 right-6 z-50">
                    <FilterComponent />
                </div>
            )}
        </>
    )
};
