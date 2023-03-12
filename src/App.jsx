import Header from "./component/Header/Header"
import Home from './component/Home/Home'
import Skills from "./component/Skills/Skills"
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
      item: 'Skills',
      ruta: '#skills'
    }
  ] 

  return (
    <div className={style.main}>
      <Header array={array}/>
      <Home/>
      <Skills/>
    </div>
  )
}

export default App
