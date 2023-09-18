import { MapButton } from "../../../components/MapButton"

export function MapControl() {
  const urlArray = [
    '../../../../images/mapControl/zoom_in_icon.svg',
    '../../../../images/mapControl/zoom_out_icon.svg',
    '../../../../images/mapControl/current_loc_icon.svg'
  ]

  return (
    <div className="map-control">
      {urlArray.map((url, index) => {
        return <MapButton icon={url} />
      })}
    </div>
  )
}