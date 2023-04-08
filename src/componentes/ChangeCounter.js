//3 - Alterando Contexto

//Hook para poder usufruir do Context
import { useContext } from "react"

// Importando lá do Context Counter
import { CounterContext } from "../context/CounterContext"


const ChangeCounter = () => {

   const {counter, setCounter} = useContext(CounterContext)
  return (
    <div>

<button onClick={() => setCounter(counter + 1)}>
Adciona Valor ai Pai
</button>

    </div>
  )
}

export default ChangeCounter