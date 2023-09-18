export function IconButton({ activeStatus, icon, text, onClick }) {
  const buttonClass = text ? 'icon-text-button' : 'icon-button';
  const iconClass = text ? 'icon-with-text' : 'icon-only';
  const textClass = activeStatus ? "button-text active" : "button-text";
  const textProps = text ? text : '';

  return (
    <button className={buttonClass} onClick={ () => onClick(textProps) }>
      <div className={iconClass}>
        <img src={icon} alt='{icon}'></img>
      </div>
      {text && <div className={textClass}>{text}</div>}
    </button>
  )
}