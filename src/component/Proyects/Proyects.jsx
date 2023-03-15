import { particles } from '../utils/utils'
import style from './Proyects.module.css'

export default function Proyects (props) {

    return (
        <section id="proyects" className={style.proyects}>
            {
                particles()
            }
            <div className={style.conteinerPrincipal}>
               {
                props.cards.map(e => {
                    return <article key={e.id}>
                                <a href={e.link}>{e.title}</a>
                            </article>
                })
               }
            </div>
        </section>
    )
}