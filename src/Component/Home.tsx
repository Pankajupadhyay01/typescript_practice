import axios from "axios";
import { useEffect, useState } from "react"
import { weather_type } from "../Type/type";
import Card from "./Card";

const Home = () => {
  const [loc, setloc] = useState<string>("haldwani")
  const [data, setdata] = useState<weather_type | null>(null)

  const func = (e: React.ChangeEvent<HTMLInputElement>) => {
    setloc(e.target.value);
    e.preventDefault()
  }
  useEffect(() => {
    axios
      .get<weather_type>(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`)
      .then(res => {
        setdata(res.data)
      })
  }, [loc])



  return (
    <div className="flex justify-center flex-col m-auto w-full" >
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>e.preventDefault()} action="" className="flex justify-center m-auto w-full">
        <input className="h-[5vh] text-center rounded-3xl focus:border-white" type="text" onChange={func} />
      </form>
      {
        data === null ? <div>No data </div> : <Card data={data} />
      }
    </div>
  )
}

export default Home
