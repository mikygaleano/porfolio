import style from './particles.module.css'




export  function particles () {
    let particulas = [];
    for (let i = 0; i < 100; i++) {
        particulas.push(<div key={i} className={style.particle}></div>);
    }
    return particulas;
}