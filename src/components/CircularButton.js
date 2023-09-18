export function CircularButton({ text, onClick }) {
  return (
      <button onClick={onClick} className="circular-button"> {text} </button>
  )
}