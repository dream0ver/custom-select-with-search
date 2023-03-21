import { useState } from "react"
import CustomSelect from "./components/CustomSelect"
import { country_list } from "./data"
function App() {
  const [value, setValue] = useState("")
  return (
    <div style={{ marginTop: "10rem" }}>
      <CustomSelect
        items={country_list}
        width={250}
        setValue={setValue}
        value={value}
      />
    </div>
  )
}

export default App
