import React from 'react'
import{useState} from "react"

function App() {

const [numero1, setnumero1] = useState("")
const [numero2, setnumero2] = useState("")
const [currentOperation, setcurrenOperation] = useState("")
const [result, setresult] = useState(0)

const initialState= JSON.parse(localStorage.getItem("Operaciones"))||[];
const [historial,sethistorial]=useState(initialState)

const handleBorrar=()=>{
    sethistorial([]);
    localStorage.setItem("Operaciones", JSON.stringify([]));
  }

function allclean(){
    const lista={numero1:numero1,currentOperation:currentOperation,numero2:numero2,result:result}
    const nuevoArreglo = [...historial, lista]
      sethistorial([...nuevoArreglo]);
      localStorage.setItem("historial", JSON.stringify(nuevoArreglo));
          setnumero1("")
          setnumero2("")
          setcurrenOperation("")
          setresult("")
}

function clicknumber(val){
  if (currentOperation===""){
      setnumero1(numero1+val)
  }
    else
    {
    setnumero2(numero2+val);
    }
}

function clickOperation(val){
  setcurrenOperation(val);
}

function getresult(){
  switch(currentOperation){
    case "+":
      return setresult(Number(numero1)+Number(numero2));
    case "-":
      return setresult(Number(numero1)-Number(numero2));
    case "*":
      return setresult(Number(numero1)*Number(numero2));
    case "/":
      return setresult(Number(numero1)/Number(numero2));
    case "%":
      return setresult(Number(numero1)/100*Number(numero2));
    default:
      return "error";
  }
}

  return (
<div className='App Container'>
<h1 className="title">Calculadora</h1> <hr />   
      <div className='row'>
        <div className='col'>
          <div className='App'>
                <div className='calculator-grid'>
                  <div className='calculadora'>
                  <div className='display'>
                  {currentOperation ? numero1 + currentOperation: ''}
                  {result ? result:(!currentOperation ? numero1:numero2)}
                    </div>
                    <div className="btnOperadores">
                      <button 
                              type="button" 
                              onClick={()=>{clickOperation("/")}} 
                              className="btn btn-warning">
                                &divide;
                      </button>
                      <button 
                              type="button" 
                              onClick={()=>{clickOperation("+")}} 
                              className="btn btn-warning">
                                +
                      </button>
                      <button 
                              type="button" 
                              onClick={()=>{clickOperation("-")}} 
                              className="btn btn-warning">
                                -
                      </button>
                      <button 
                              type="button" 
                              onClick={()=>{clickOperation("*")}} 
                              className="btn btn-warning">
                                x
                      </button>
                      <button 
                              type="button" 
                              onClick={()=>{clickOperation("%")}} 
                              className="btn btn-warning">
                                %
                      </button>
                    </div>                        
                    
                    <div className="digitos">
                      <button 
                              type="button" 
                              onClick={()=>{clicknumber(7)}} 
                              className="btn btn-dark">
                                7
                      </button>
                      <button 
                              type="button" 
                              onClick={()=>{clicknumber(8)}} 
                              className="btn btn-dark">
                                8
                      </button>
                      <button 
                              type="button" 
                              onClick={()=>{clicknumber(9)}} 
                              className="btn btn-dark">
                                9
                      </button>
                      <button 
                              type="button" 
                              onClick={()=>{clicknumber(4)}} 
                              className="btn btn-dark">
                                4
                      </button>
                      <button 
                              type="button" 
                              onClick={()=>{clicknumber(5)}} 
                              className="btn btn-dark">
                                5
                      </button>
                      <button 
                              type="button" 
                              onClick={()=>{clicknumber(6)}} 
                              className="btn btn-dark">
                                6
                      </button> 
                      <button 
                              type="button" 
                              onClick={()=>{clicknumber(1)}} 
                              className="btn btn-dark">
                                1
                      </button>
                      <button 
                              type="button" 
                              onClick={()=>{clicknumber(2)}} 
                              className="btn btn-dark">
                                2
                      </button>
                      <button 
                              type="button" 
                              onClick={()=>{clicknumber(3)}} 
                              className="btn btn-dark">
                                3
                      </button>
                      <button 
                              type="button" 
                              onClick={()=>{clicknumber(0)}} 
                              className="btn btn-dark ">
                                0
                      </button>
                      <button 
                              type="button" 
                              onClick={allclean} 
                              className="btn btn-danger">
                                AC
                      </button>
                      <button 
                              type="button" 
                              onClick={getresult} 
                              className="btn btn-warning">
                                =
                      </button>
                          
                    </div>
                    </div>
                </div>
              </div>
        </div>
        <div className='col'>
          <div>
            <h3>Historial</h3>
              {
                historial.length=== 0 &&
                <p>Historial vacío.</p>
              }{
                historial.length !== 0 && (
              <ol>
                {historial.map((item, index)=>{
                  return(
                    <li key={index}>
                      {item.numero1}{item.currentOperation}{item.numero2}={item.result}
                      <br />
                    </li>
                  )
                })}
              </ol>
            )
          }
          </div>
            <button 
                    onClick={handleBorrar} 
                    className="btn btn-outline-danger">
                      Limpiar historial
            </button>
        </div>
      </div>
    </div>
  )
}

export default App