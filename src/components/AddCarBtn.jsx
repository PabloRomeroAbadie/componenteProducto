import "./AddCarBtn.css"

const AddCarBtn = ({name, newPrice}) => {
  return (
    <button onClick={()=>{alert(`Has comprado ${name} a $${newPrice}`)}}>Comprar</button>
  )
}

export default AddCarBtn;