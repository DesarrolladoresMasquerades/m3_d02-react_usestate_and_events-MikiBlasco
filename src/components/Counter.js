import { useState } from "react"

export default function Counter () {

    const [count, setCounter] = useState(0)
    const [dayOfWeek, sedayOfWeek] = useState("Monday")
    const [holiday, setHoliday] = useState(true)
    const [myObject, setMyObject] = useState({drink: "capuccino"})

    return (
        <div className="Counter">
        <p>
          You have a total of: <span>{count}</span>
        </p>
        <button onClick={()=> setCounter(Counter + 1)}>Add 1</button>
        <button onClick={()=> setCounter(Counter - 1)}>Subtract 1</button>
      </div>

    )
}