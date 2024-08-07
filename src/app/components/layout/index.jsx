import { ChakraProvider, useMediaQuery } from '@chakra-ui/react'
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/icon/menuIcon.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icon/notification.svg';
import { ReactComponent as Profile } from '../../assets/icon/profileMin.svg';
import style from './style.module.css'
import {
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { SideBar } from '../sidebar';
import React from 'react';

export const MobileOnboardingLayout = (prop) => {
    return (
        <header className={style.header}>
            <Logo className={style.logo} />
            <div>
                {prop.children}
            </div>
        </header>
    )
}




export const DashboardHeader = (props) => {
    // const [showHeader, setShowHeader] = React.useState(false)
    const handleMenu = () => {

    }
    return (
        <ChakraProvider><header className={style.mobileDashboard}>
            <div className='header'>
                <Menu isLazy>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<MenuIcon />}
                        variant='outline'
                    // onClick={handleMenu} 
                    />
                    <MenuList>
                        <SideBar />
                    </MenuList>
                </Menu>
                <h3>{props.children}</h3>
            </div>
            <div>
                <NotificationIcon />
                {/* <div className={style.profile}> */}
                <Profile />
                {/* </div> */}
            </div>

        </header>
        </ChakraProvider>
    )
}