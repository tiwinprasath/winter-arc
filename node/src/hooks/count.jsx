const Count = ({ value, onIncrement }) => {
  return (
    <div>
      <p>Count: {value}</p>
      <button type="button" onClick={onIncrement}>Increment</button>
    </div>
  )
}

export default Count
