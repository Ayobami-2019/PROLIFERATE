import {combinedClasses} from '../../utilities/format'
import style from './style.module.css'
export const MyButton=(props)=>{
    
    const classNames={
        primary: style.fill,
        outline: style.nofill,
    }
    const className=classNames[props.type]
    const combineClass=combinedClasses(className, props.className)
    return(
        props.onClick ?
        <button {...props} className={combineClass}>{props.title || props.children}</button> :

       <button className={combineClass}>{props.title || props.children}</button> 
        )
}