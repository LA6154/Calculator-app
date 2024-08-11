import React, { useState } from 'react'

const Calculator = () => {
    const[data,setData]=useState("");
    const click=(e)=>{
        setData(data.concat(e.target.value))
    }
    const calculation=()=>{
        setData(eval(data).toString())

    }
    const clear=()=>{
        setData("");
    }
    const back=()=>{
        setData(data.slice(0,-1))
    }


  return (
    <>
    <div className='container'>
        <div>
        <input placeholder='0' value={data} />
        </div>
        <button onClick={click} value="(">(</button>
        <button onClick={click} value=")">)</button>
        <button onClick={click} value="%">%</button>
        <button onClick={clear}>AC</button>

        <button onClick={click} value="7">7</button>
        <button onClick={click} value="8">8</button>
        <button onClick={click} value="9">9</button>
        <button onClick={click} value="*">*</button>

        <button onClick={click} value="4">4</button>
        <button onClick={click} value="5">5</button>
        <button onClick={click} value="6">6</button>
        <button onClick={click} value="-">-</button>

        <button onClick={click} value="1">1</button>
        <button onClick={click} value="2">2</button>
        <button onClick={click} value="3">3</button>
        <button onClick={click} value="+">+</button>

        <button onClick={click} value="0">0</button>
        <button onClick={back}>BACK</button>
        <button onClick={calculation}>=</button>
        <button onClick={click} value="/">/</button>
    </div>
    </>
  )
}

export default Calculator
