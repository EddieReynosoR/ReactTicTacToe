import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'

// Componente(s)
import Square from './components/Square'
import WinnerModal from './components/WinnerModal'

import  BotonReiniciar  from './components/botonReiniciar'

// Constantes
import { TURNOS } from './constants'
import { WINCOMBINATIONS } from './constants'

// Funciones
import { checkEndGame } from './board'
import { checkWinner } from './board'
import { Tablero } from './components/Tablero';




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

  // useState para saber si hay algun ganador, con un valor booleano
  const [winner, setWinner] = useState(null) // usaremos null, para hacer referencia a que aun no hay un ganador. false se usara para mostrar un empate


  const resetGame = () => {
    // Regresar a todos los estados a sus valores predeterminados
    setTablero(Array(9).fill(null))
    setTurno(TURNOS.X)
    setWinner(null)
  }


  // Actualizar el tablero y los turnos
  const updateBoard = (index) => {


    // No actualizamos posicion, si ya tiene algo
    if(tablero[index] || winner) return
    // Las props son inmutables, debes crear una copia del arreglo para actualizarlo, sin afectar al original
    const newTablero = [...tablero]
    newTablero[index] = turno // X o O

    setTablero(newTablero)

    const newTurn = turno === TURNOS.X ? TURNOS.O : TURNOS.X

    setTurno(newTurn)

    // Revisar si hay ganador
    const newWinner = checkWinner(newTablero)

    if(newWinner){
      setWinner(newWinner) // Los estados son asincronos, no bloquea el renderizado de un componente ni la ejecucion del codigo que hay despues.
      confetti()


      // setWinner(winner)
    }else if(checkEndGame(newTablero)){
      setWinner(false) // empate
    }
  }


  return (
    <main className='board'>
          <h1>Tic Tac Toe</h1>
          <BotonReiniciar resetGame={resetGame}/>

          <Tablero tablero={tablero} updateBoard={updateBoard}/>

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

          <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
