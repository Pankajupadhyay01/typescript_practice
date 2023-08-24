import { weather_type } from '../Type/type'

 
const Card = (data:weather_type) => {
  return (
    <div>
      {data?.name}
    </div>
  )
}

export default Card
