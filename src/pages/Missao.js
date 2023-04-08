import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../componentes/ChangeCounter'

const Missao = () => {

const {counter} = useContext(CounterContext)

  return (
    <div>

<p>Valor do Contexto: {counter}</p>




    </div>
  )
}

export default Missao