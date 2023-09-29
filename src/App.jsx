import './App.css'
import { useState } from 'react'

// Dos posibles valores para los turnos
const TURNOS = {
  X: 'X',
  O: 'O'
}

// Componente que representa una casilla
const Square = ({children, updateBoard, index, isSelected}) => {
  /* Dependiendo del valor de isSelected,
  se le asignara una clase especial. */

  const handleClick = () => {
    updateBoard(index)
  }


  const className = `square ${isSelected ? 'is-selected' : ''}`
  return (
    <div className={className} onClick={handleClick}>
        {children}
    </div>
  )
}
function App() {

  /*/
  Ponemos el tablero dentro del componente de la app, para usarlo como un useState, para aprovechar los renderizados del componente.

  Usaremos el tablero como un useState, para actualizarlo cada vez que se haga un click en el tablero.
  */
  // const tablero = Array(9).fill(null)

  // Crear el tablero
  const [tablero, setTablero] = useState(Array(9).fill(null))

  // Usaremos un estado, para ir cambiando valor del turno para cada uno de los jugadores

  // Cambiar los turnos
  const [turno, setTurno] = useState(TURNOS.X)

  // Actualizar el tablero y los turnos
  const updateBoard = (index) => {

    // Las props son inmutables, debes crear una copia del arreglo para actualizarlo, sin afectar al original
    const newTablero = [...tablero]
    newTablero[index] = turno // X o O

    setTablero(newTablero)

    const newTurn = turno === TURNOS.X ? TURNOS.O : TURNOS.X

    setTurno(newTurn)
  }


  return (
    <main className='board'>
          <h1>Tic Tac Toe</h1>
          <section className='game'>
            {

              /* Mapeo de cada elemento del
                arreglo, para desplegarlo usando el componente Square
              */
              tablero.map((item, index) => {
                return (
                  
                  <Square
                    key={index}
                    index = {index}
                    updateBoard={updateBoard}
                    >
                      {item}
                    </Square>
                )
              })
            }
          </section>

          <section className='turn'>
            {/* Checar el turno, con valores
            booleanos. */}
            <Square isSelected={turno === TURNOS.X}>
              {TURNOS.X}
            </Square>

            <Square isSelected={turno === TURNOS.O}>
              {TURNOS.O}
            </Square>
          </section>
    </main>
  )
}

export default App
