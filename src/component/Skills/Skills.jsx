import style from './Skills.module.css'
import { particles } from '../utils/utils'


export default function SobreMi () {
    return (
        <section id='skills' className={style.sobreMi}>
            {
                particles()
            }
            <div className={style.card}>
            </div>
        </section>
    )
}