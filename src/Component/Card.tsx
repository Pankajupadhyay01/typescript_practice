import { weather_type } from '../Type/type'


const Card = (d: { props: weather_type | null, err: string }) => {
  return (
    <div>
      {
        d.err == "200" ?
          <div className='flex flex-col justify-center m-auto items-center bg-green-100 my-2 h-[50vh] w-[80%] md:w-[40%]'>
            {/* top row section  */}
            <div className='flex w-[90%] justify-between my-5'>
              <div className='bg-blue-500 p-3 rounded-full flex h-auto'>
                {d.props?.name}
              </div>

              <div className='bg-blue-500 p-3 rounded-full flex h-auto'>
                {d.props?.main.feels_like}
              </div>

              <div className='bg-blue-500 p-3 rounded-full flex h-auto'>
                {d.props?.sys.country}
              </div>
            </div>

            {/* weather display  */}
            <div className='flex justify-center items-center'>
              <img src={`https://openweathermap.org/img/wn/${d.props?.weather[0].icon}@2x.png`} alt="" />
            </div>
            <div className='flex justify-between w-[90%] flex-col items-center text-lg text-blue-900 font-bold'>
              {d.props?.main.temp}
              <div className='text-green-900 font-bold text-[28px] md:text-[30px]'>
                {d.props?.weather[0].description}
              </div>
            </div>
          </div>
          : <div className='flex flex-col justify-center m-auto items-center bg-green-100 my-2 h-[50vh] w-[80%] text-black font-bold md:w-[40%]' >{d.err}</div>
      }

    </div>
  )
}

export default Card
