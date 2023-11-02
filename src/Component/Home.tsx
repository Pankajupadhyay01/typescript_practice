import axios from "axios";
import { useEffect, useState } from "react"
import { weather_type } from "../Type/type";
import Card from "./Card";

const Home = () => {
  const [loc, setloc] = useState<string>("pune")
  const [data, setdata] = useState<weather_type | null>(null)
  const [err, seterr] = useState<string>("200")
  const [loading, setloading] = useState<boolean>(true)
  const func = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.value == "") {
      setloc("haldwani")
    } else {
      setloc(e.target.value);
    }
  }
  useEffect(() => {
    axios
      .get<weather_type>(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=419eaf432fb4945c24652c41d06ddfcf&units=metric`)
      .then(res => {
        seterr("200")
        setdata(res.data)
        setloading(false)
      }).catch(e => {
        seterr(e.response.data.message)
      })
  }, [loc])



  return (
    <div className="flex justify-center flex-col m-auto w-full" >
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()} action="" className="flex justify-center m-auto w-full">
        <input className="h-[5vh] text-center rounded-3xl focus:border-white" type="text" placeholder="Enter your city " onChange={func} />
      </form>

      {
        loading ?
          <div className='flex flex-col justify-center m-auto items-center bg-green-100 my-2 h-[50vh] w-[80%] md:w-[40%]'>
            Loading ..
          </div> :
          <Card props={data} err={err} />
      }


    </div>
  )
}

export default Home
