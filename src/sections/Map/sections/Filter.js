import { FilterButton } from "../../../components/FilterButton"

export function Filter() {
  const buttonData = [
    {
      text: 'MY필터',
      class: 'my-filter'
    },
    {
      text: '아파트재건축',
      class: 'filtered'
    },
    {
      text: '매매,전세,월세',
      class: 'filtered'
    },
    {
      text: '가격',
      class: 'unfiltered'
    },
    {
      text: '면적',
      class: 'unfiltered'
    },
    {
      text: 'Dropdown',
      class: 'unfiltered'
    }
  ]

  return (
    <div className="filter-section">
      {buttonData.map((button, index) => {
        return (<FilterButton key={1} filterClass={button.class} text={button.text} />)
      })}
    </div>
  )
}