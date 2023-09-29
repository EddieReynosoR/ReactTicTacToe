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

export default Square