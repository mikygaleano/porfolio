import style from './Skills.module.css'
import { particles } from '../utils/utils'


export default function SobreMi (props) {
    return (
        <section id='skills' className={style.sobreMi}>
            {
                particles()
            }
            <div className={style.conteinerPrincipal}>
                <div className={style.conteinerTec}>
                    <h4>Tecnologias</h4>
                    <ul>
                        {
                            props.lista.map(e => {
                                return <li key={e.id}><img src={e.icon} alt={e.name} /></li>
                            })
                        }
                    </ul>
                </div>
                <h4>Certificados</h4>
                <div className={style.conteinerCert}>
                    
                    {
                        props.estudios.map(e => {
                            return <div key={e.id} className={style.tarjestasCert}>
                                        <h5>{e.title}</h5>
                                        <span>{e.fecha}</span>
                                        <p>{e.text}</p>
                                    </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}