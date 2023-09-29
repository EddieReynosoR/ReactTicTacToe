import Square from "./Square"

export const Tablero = ({tablero, updateBoard}) => {
    return (
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
  )
}