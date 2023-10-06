import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Slider } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const SideMenu = () => {

    const [openKeys, setOpenKeys] = useState(['sub1']);

    const items: MenuItem[] = [
        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Option 1', '1'),
            getItem('Option 2', '2'),
            getItem('Option 3', '3'),
            getItem('Option 4', '4'),
        ]),
        getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
        ]),
        getItem('Navigation Three', 'sub4', <SettingOutlined />, [
            getItem(<Slider defaultValue={30}  />, '9'),
            getItem('Option 10', '10'),
            getItem('Option 11', '11'),
            getItem(<Slider defaultValue={30} />, '12'),
        ]),
    
    ];


    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <div className='side-menu'>
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ width: 256 }}
                items={items}
            />
        </div>
    )
}

export default SideMenu
