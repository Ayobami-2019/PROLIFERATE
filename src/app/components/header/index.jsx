import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { Search } from '../input';
import { headerNav } from './data';
import style from './style.module.css'

export const Header=()=>{
    return <header className={style.header}>
        <Logo className={style.logo} />
        <Search/>
        <ul>
            {headerNav.map((icon, index)=>
            <li key={index} className={index==5 ? style.lastIndex : style.all}>{icon}</li>
            )}
        </ul>
    </header>
}