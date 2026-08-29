import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className="parent">
      <Card user='Bunty' age={18} img={'https://filmfare.wwmindia.com/content/2024/oct/prabhastherajasaab21729510723.jpg'}/>
      <Card user='Alice' age={24} img={'https://th.bing.com/th/id/OIP.DY-YPVssxr4E1S2j65J00gHaLD?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'}/>
      <Card user='Bob' age={30} img={'https://wallpaperaccess.com/full/16473287.jpg'}/>
      <Card user='Charlie' age={14} img={'https://tse4.mm.bing.net/th/id/OIP.gMBxdyRJhAllHWqJop2xpgHaLJ?r=0&w=850&h=1279&rs=1&pid=ImgDetMain&o=7&rm=3'}/>
    </div>

  )
}

export default App
