
import style from './style.module.css';
import { LoginComp } from './LoginComp';
import { ChakraProvider } from '@chakra-ui/react';

export const Login = () => {
    return (
        <ChakraProvider>
            <section className={style.section}>
                <LoginComp />
            </section>
        </ChakraProvider>
    )
}