import { useState } from "react"
import { useFetch } from "./hooks/useFetch"

const App = () => {

  const { data } = useFetch("./src/data/db.json")

  const [num, setNum] = useState<number>(Math.trunc(Math.random() * 8))


  return (
    <div className="app">
      <h1>Hazllar generatori</h1>
      <h2>{data && data[num].title}</h2>
      <button onClick={() => setNum(Math.trunc(Math.random() * 8))}>Boshqa hazllar</button>
    </div>
  )
}

export default App