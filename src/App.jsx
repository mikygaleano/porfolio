import Header from "./component/Header/Header"
import Home from './component/Home/Home'
import Proyects from "./component/Proyects/Proyects";
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
    }, 
    {
      id: 3,
      item: 'Proyects',
      ruta: '#proyects'
    }
  ];

  const listaSkills = [
    {
      id: 1,
      icon: './icon/html-5.png',
      name: 'html-5'
    },
    {
      id: 2,
      icon: './icon/css.png',
      name: 'css'
    },
    {
      id: 3,
      icon: './icon/github.png',
      name: 'github'
    },
    {
      id: 4,
      icon: './icon/git.png',
      name: 'git'
    },
    {
      id: 5,
      icon: './icon/javascript.png',
      name: 'javascript'
    },
    {
      id: 6,
      icon: './icon/piton.png',
      name: 'python'
    },
    {
      id: 7,
      icon: './icon/react.png',
      name: 'react'
    },
  ];

  const estudiosLista = [
    {
      id: 1,
      title: 'Introducción a python',
      fecha: 'Diciembre 2022',
      text: 'Curso introductorio de python, dictado por la UNDAV',
    },
    {
      id: 2,
      title: 'Prep Curs',
      fecha: 'Diciembre 2020',
      text: 'Curso introductorio a javascript, dictado por Soy Henry',
    },
  ];

  const proyects = [
    {
      id: 1,
      link: 'https://mikygaleano.github.io/pokeinfo/',
      title: 'pokeinfo'
    },
    {
      id: 2,
      link: 'https://mikygaleano.github.io/lista-de-tareas/',
      title: 'lista de tareas'
    }
  ]

  return (
    <div className={style.main}>
      <Header array={array}/>
      <Home/>
      <Skills lista={listaSkills} estudios={estudiosLista}/>
      <Proyects cards={proyects}/>
    </div>
  )
}

export default App
