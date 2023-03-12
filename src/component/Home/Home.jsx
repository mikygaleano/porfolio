import style from './Home.module.css'
import { particles } from '../utils/utils'


export default function Home () {

    return (
        <section className={style.home} id='home'>
            {
                particles()
            }
            <div className={style.saludo}>
                <span>Hola soy, Developer web</span>
                <h1>Michael Galeano</h1>
                <button>Contactame</button>
            </div>
            <div className={style.card}>
                <figure className={style.cardImg}>
                   
                </figure>
                <article className={style.info}>
                    <p>
                        estudiante de ingeneria <br />
                        en informatica en la Universidad<br />
                        Nacional de Avellaneda (UNDAV)<br />
                        desde el 2023. 
                    </p>
                </article>
            </div>
        </section>
    )
}