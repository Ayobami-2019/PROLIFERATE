import { ReactComponent as Star } from "../../assets/icon/star.svg";
import style from './style.module.css'

export const MyRating = () => {
    return (
        <div className={style.rating}>
            <Star /><Star /><Star /><Star /><Star />
        </div>
    )
}