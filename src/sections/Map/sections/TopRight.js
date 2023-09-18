import { IconButton } from "../../../components/IconButton";

export function TopRight({ onClick1, onClick2 }) {
  const buttonData = [
    {
      url: "../../../../images/topRight/profile_icon.svg",
      onClick: onClick1
    },
    {
      url: "../../../../images/topRight/map_app_icon.svg",
      onClick: onClick2
    },
    {
      url: "../../../../images/topRight/three_d_icon.svg",
      onClick: onClick2
    }
  ]

  return (
    <div class="top-right">
      {buttonData.map((button, index) => {
        return (<IconButton key={index} icon={button.url} onClick={button.onClick} />)
      })}
    </div>
  )
}