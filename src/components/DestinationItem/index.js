// Write your code here
import './index.css'

const DestinationItem = props => {
  const {cardItem} = props
  const {name, imgUrl} = cardItem

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
