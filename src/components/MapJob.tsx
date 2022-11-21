import { MapContainer, TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import { LatLngExpression } from "leaflet";
interface IProps {
    location: {lat: number,long: number} ;
}  

export const MapJob:React.FC<IProps> = ({location}) => {

  const locationMap: LatLngExpression = [location.lat, location.long];
  
  return (
    <MapContainer center={locationMap} zoom={6} scrollWheelZoom={false}>
      <TileLayer
     
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        className="map-tiles"
      />
      <Marker position={locationMap}></Marker>
    </MapContainer>
  );
};
