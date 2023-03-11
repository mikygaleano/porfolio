import style from './Header.module.css'

export default function Header (props) {

    return (
        <header>
            <nav>
                <ul>
                    {
                        props.array.map(e => {
                            return <li key={e.id} className={style.navBar}><a href={e.ruta}>{e.item}</a></li>
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}