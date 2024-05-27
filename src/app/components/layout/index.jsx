import { useMediaQuery } from '@chakra-ui/react'
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import style from './style.module.css'

export const MobileOnboardingLayout=(prop)=>{
    return(
        <header className={style.header}>
            <Logo className={style.logo}/>
            <div>
                {prop.children}
            </div>
        </header>
    )
}