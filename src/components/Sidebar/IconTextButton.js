export function IconTextButton({ activeStatus, icon, text='', onClick }) {
  const buttonClass = activeStatus ? "button-text active" : "button-text";

  return (
    <button onClick={ () => onClick(text) }>
      <div className="button-icon">
        <img src={icon} alt='{icon}'></img>
      </div>
      <div className={buttonClass}>{text}</div>
    </button>
  )
}