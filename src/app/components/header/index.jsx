import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { Search } from '../input';
import { headerNav } from './data';
import style from './style.module.css'
import { ChakraProvider } from "@chakra-ui/react";


export const Header = () => {
    return (
        <ChakraProvider><header className={style.header}>
            <Logo className={style.logo} />
            <Search />
            <ul>
                {headerNav.map((icon, index) =>
                    <li key={index} className={index == 5 ? style.lastIndex : style.all}>{icon}</li>
                )}
            </ul>
        </header>
        </ChakraProvider>
    )
}

