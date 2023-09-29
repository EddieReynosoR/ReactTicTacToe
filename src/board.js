import { WINCOMBINATIONS } from "./constants"

// Funcion para saber si alguien gano
export const checkWinner = (tablero) => {
    for(const combo of WINCOMBINATIONS){
      const [a,b,c] = combo
  
      if(
        tablero[a] && // Checar si tiene un valor
        tablero[a] === tablero[b] && // Checar si el de a es igual al de b
        tablero[a] === tablero[c] // Checar si el de a es igual al de c
      ){
        return tablero[a]
      }
    }
  
    // si no hay ganador
    return null
  }
  
export const checkEndGame = (newTablero) => {
    // Checar si hay empate, tomando en cuenta que no haya espacios vacios en el tablero.
    return newTablero.every((square) => square !== null)
  }