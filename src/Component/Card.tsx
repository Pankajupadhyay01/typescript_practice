import { weather_type } from '../Type/type'


const Card = (d: { data: weather_type; }) => {


  return (
    <div>
      <div className='flex flex-col justify-center m-auto items-center bg-green-100 my-2 h-[50vh] w-[80%] md:w-[40%]'>
        {/* top row section  */}
        <div className='flex w-[90%] justify-between my-5'>
          <div className='bg-blue-500 p-3 rounded-full flex h-auto'>
            {d.data?.name}
          </div>

          <div className='bg-blue-500 p-3 rounded-full flex h-auto'>
            {d.data?.main.feels_like}
          </div>

          <div className='bg-blue-500 p-3 rounded-full flex h-auto'>
            {d.data?.sys.country}
          </div>
        </div>

        {/* weather display  */}
        <div className='flex justify-center items-center'>
          <img src={`https://openweathermap.org/img/wn/${d.data?.weather[0].icon}@2x.png`} alt="" />
        </div>
        <div className='flex justify-between w-[90%] flex-col items-center text-lg text-blue-900 font-bold'>
          {d.data?.main.temp}
        </div>
      </div>
    </div>
  )
}

export default Card
