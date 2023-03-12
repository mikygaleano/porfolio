import style from './Home.module.css'

export default function Home () {

    return (
        <section className={style.home} id='home'>

            <figure className={style.imageHome}>
            </figure>
            <div className={style.saludo}>
                <span>Hola soy, Developer web</span>
                <h1>Michael Galeano</h1>
                <button>Contactame</button>
            </div>
        </section>
    )
}