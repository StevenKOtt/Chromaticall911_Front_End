import { Icon, InlineIcon } from '@iconify/react'
import mapMarker from '@iconify-icons/mdi/crosshairs-gps'
import './maps.css'

const LocationPin = (props) => {
     const {text} = props
    return (
    <div className="pin">
      <Icon icon={mapMarker} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
    )
}
export default LocationPin