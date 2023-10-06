import React from 'react'
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Turkish
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                English
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Deutch
            </a>
        ),
    },
];

const NavbarLanguage = () => {
    return (
        <>
            <Dropdown menu={{ items }} placement="bottom" arrow>
                <Button>Language</Button>
            </Dropdown>
        </>
    )
}

export default NavbarLanguage
