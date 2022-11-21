import { MapJob } from './MapJob';
import { ImLocation } from 'react-icons/im';

interface IProps {
    location: {lat: number,long: number},
    name: string, 
    address: string, 
    phone: string,
    email: string,
}  

export const AddressJob:React.FC<IProps> = ({ location, name, address, phone, email }) => {
  return (
    <address className="bg-white ">
      <h3 className="xl:hidden pb-2.5 mb-3.5 text-large font-bold text-accentColor border-b border-gray-200">
        Contacts
      </h3>
      <ul className="m-auto not-italic text-base font-normal rounded-t-lg text-opacityWhite bg-accentColor w-372 xl:w-402 pt-8 pb-4 px-16 xl:py-8">
        <li className="xl:text-xl font-bold  mb-4 xl:mb-2">
          Department name.
          <br />
          {name}
        </li>
        <li className="flex items-baseline">
          <ImLocation className="mr-1 text-mainGrey" />
          <a href={address} className="xl:text-lg mb-1.5  ">
            {address}
          </a>
        </li>
        <li>
          <a href={phone} className="xl:text-lg">
            {phone}
          </a>
        </li>
        <li>
          <a href={email} className="xl:text-lg">
            {email}
          </a>
        </li>
      </ul>
      <MapJob location={location} />
    </address>
  );
};
