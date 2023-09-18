export function MapButton({ icon }) {
  return (
    <button className="icon-button map-button">
      <div className="icon-only">
        <img src={icon} alt='{icon}'></img>
      </div>
    </button>
  )
}