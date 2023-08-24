import axios from "axios";
import { useState } from "react"
import { weather_type } from "../Type/type";
import Card from "./Card";

const Home = () => {
  const [loc, setloc] = useState<string>("")
  const [data, setdata] = useState<weather_type>()
  const [error, seterror] = useState<boolean>(false)

  const func = (e: React.ChangeEvent<HTMLInputElement>) => {
    setloc(e.target.value);
  }
  const get_weather = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (loc != "") {
      try {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`).then(res => {
          setdata(res.data)
          console.log(data);

        })
      } catch (error) {
        console.log("err");
      }
    } else {
      alert("😄Oops.. you forget to enter city ")
    }
  }


  return (
    <div>
      <form action="">
        <input type="text" onChange={func} />
        <button onClick={get_weather}>Submit</button>
      </form>
 
    </div>
  )
}

export default Home
