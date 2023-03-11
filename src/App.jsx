import Header from "./component/Header/Header"
import Home from './component/Home/Home'
import SobreMi from "./component/SobreMi/SobreMi"

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
    <div>
      <Header array={array}/>
      <Home/>
      <SobreMi/>
    </div>
  )
}

export default App
