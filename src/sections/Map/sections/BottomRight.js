export function BottomRight({onClick}) {
  return (
    <div className="bottom-right">
      <button className="sisay-average" onClick={onClick}>시세평균</button>
      <div className="flex-row">
        <a className="naver-link" href="https://ssl.pstatic.net/static/maps/mantle/notice/legal.html" target="_blank">
          <img src="https://ssl.pstatic.net/static/maps/mantle/2x/naver-logo-normal-new.png" alt="Naver Link"></img>
        </a>
        <div>지도 단위</div>
      </div>
    </div>
  )
}