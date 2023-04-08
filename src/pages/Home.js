import React from 'react'
// import { useContext } from 'react'
import  ChangeCounter  from '../componentes/ChangeCounter'
// import  { CounterContext }   from '../context/CounterContext'

// Refatorando Hook
import { useCounterContext } from '../Hooks/useCounterContext'

// 5 - context mais complexo
import { useTitleColorContext } from '../Hooks/useTitleColorContext'

const Home = () => {

//const {counter} = useContext(CounterContext)


// 5 - Contexto mais complexo


const { counter } = useCounterContext()

const { color, dispatch } = useTitleColorContext();

  return (
    <div>
<h1>Home</h1>

<p>Valor do Contexto: {counter}</p>

{/*3 -  Change Counter*/}

<ChangeCounter />

    </div>

    
  )
}

export default Home