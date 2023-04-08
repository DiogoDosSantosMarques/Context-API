import { useContext } from "react" //Hook
import ChangeCounter from "../componentes/ChangeCounter"

import  {CounterContext} from "../context/CounterContext" // Dono da porra toda

const Vagas = () => {

  const {counter} = useContext(CounterContext)
  return (
    <div>

<p>Valor do Contexto: {counter}</p>



    </div>
  )
}

export default Vagas