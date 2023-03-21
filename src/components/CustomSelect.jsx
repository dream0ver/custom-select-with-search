import React from "react"
import "./CustomSelect.scss"
function CustomSelect({ items, width = 150, value, setValue }) {
  const [isExpanded, setISExpanded] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [filterItems, setFilterItems] = React.useState(items)
  React.useEffect(() => {
    if (search) {
      setFilterItems(
        items?.filter(item =>
          item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      )
    } else {
      setFilterItems(items)
    }
  }, [search])
  return (
    <section className="container" style={{ width: width }}>
      <div className="selected-content">
        <input placeholder="Please Select" disabled value={value} />
        <i
          className={`${isExpanded ? "drop-up-arrow" : "drop-down-arrow"}`}
          onClick={() => setISExpanded(prev => !prev)}
        />
      </div>
      <div className={` ${isExpanded ? "selectable-content" : "d-none"}`}>
        <input placeholder="Search" onChange={e => setSearch(e.target.value)} />
        <div className="item-list">
          <ul>
            {filterItems?.map(item => (
              <li
                key={item}
                onClick={() => {
                  setValue(item)
                  setISExpanded(false)
                  setSearch("")
                }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CustomSelect
