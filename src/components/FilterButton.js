export function FilterButton({filterClass, text}) {
  return (
    <div>
      <button className={`filter-button ${filterClass}`}>{text}</button>
    </div>
  )
}