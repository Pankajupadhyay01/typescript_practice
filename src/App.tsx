import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { updateProduct } from "./redux/userSlice"
import { pro } from "./Type/type"
const App = () => {
  const [first, setfirst] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      setfirst(res.data)
      // dispatch(updateProduct(res.data))
    })

  }, [])

  return (
    <div>
      {
        first.map((data:pro)=>(
      <li key={data.id}>
        {data.title}
      </li>
      ))
      }
    </div>
  )
}

export default App