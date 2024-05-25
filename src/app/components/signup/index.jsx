
import style from './style.module.css';
import { InfoForm, AcademicsForm, PreferencesForm, GoalsForm, Terms } from './signUpComp';

export const Form1 = () => {
    return (
        <section className={style.section}>
            <InfoForm />
        </section>
    )
}

export const Form2 = () => {
    return (
        <section className={style.section}>
            <AcademicsForm/>
        </section>
    )
}

export const Form3 = () => {
    return (
        <section className={style.section}>
            <PreferencesForm />
        </section>
    )
}

export const Form4 = () => {
    return (
        <section className={style.section}>
            <GoalsForm />
        </section>
    )
}

export const Form5 = () => {
    return (
        <section className={style.section}>
            <Terms/>
        </section>
    )
}