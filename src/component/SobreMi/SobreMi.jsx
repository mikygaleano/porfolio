import style from './SobreMi.module.css'

export default function SobreMi () {
    return (
        <section id='sobreMi' className={style.sobreMi}>
            <div className={style.card}>
                <figure className={style.cardImg}>
                    <img src="./image/perfil.png" alt="" />
                </figure>
                <article className={style.info}>
                    <span>Michael Galeano</span>
                    <p>
                        developer junior Y estudiante <br />
                        de ingeneria en informatica <br />
                        en la Universidad Nacional de Avellaneda <br />
                        desde el 2023. 
                    </p>
                </article>
            </div>
        </section>
    )
}