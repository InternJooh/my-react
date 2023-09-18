import { CircularButton } from "../../../components/CircularButton";

export function Circular({ onClick }) {
  return (
    <div className="circular">
      <CircularButton text="단지" />
      <CircularButton text="입지" onClick={onClick}/>
    </div>
  )
}