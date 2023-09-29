import Square from "./Square"
import BotonReiniciar from "./botonReiniciar"

const WinnerModal = ({winner, resetGame}) => {
    if(winner === null) return null


    const winnerText = winner === false
        ? 'Empate'
        : 'Ganó: '
      

    return (
        winner !== null &&(
          <section className='winner'>
            <div className='text'>
              <h2>
                {winnerText}
              </h2>

              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <BotonReiniciar resetGame={resetGame}/>
              </footer>
            </div>
          </section>
        )
      )
}

export default WinnerModal