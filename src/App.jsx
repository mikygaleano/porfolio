import Header from "./component/Header/Header"
import Home from './component/Home/Home'
import SobreMi from "./component/SobreMi/SobreMi"
import { particles } from './component/utils/utils'
import style from './index.module.css'


function App() {

  const array = [
    {
      id: 1,
      item: 'Home',
      ruta: '#home'
    },
    {
      id: 2,
      item: 'Sobre mí',
      ruta: '#sobreMi'
    }
  ] 

  return (
    <div className={style.main}>
      <Header array={array}/>
      {
        particles()
      }
      <Home/>
      <SobreMi/>
    </div>
  )
}

export default App
