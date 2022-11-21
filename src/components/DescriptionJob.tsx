import { IoSquareSharp } from 'react-icons/io5';

interface IProps {
    title: string,
    salary: string,
    description: string,
    updatedAt: string,
    benefits: [],
} 
export const DescriptionJob:React.FC<IProps> = ({
  title,
  salary,
  description,
  updatedAt,
  benefits,
}) => {
  return (
    <>
      <div className="grid xl:grid-flow-row-dense grid-cols-2 xl:grid-cols-3 xl:grid-rows-2">
        <h3 className="font-bold text-2xl text-accentColor col-span-2 ">
          {title}
        </h3>
        <p className="font-lightxl;font-normal text-small xl:text-lg text-mainGray xl:col-span-2 pt-5 pb-26 xl:py-7">
          {updatedAt
            .toLocaleString()
            .slice(0, 10)}
        </p>
        <div className="grid grid-rows-2 place-items-end  pb-3.5 xl:pb-12">
          <span className="text-lg font-normal text-textBlue xl:text-accentColor">
            Bruto, peryear
          </span>
          <p className="font-bold text-xl text-accentColor"> {salary}</p>
        </div>
      </div>
      <p className="font-norml text-lg text-textBlue xl:mt-negative mb-10">
        {description}
      </p>
      <h2 className="font-bold text-xl text-accentColor">Responsopilities</h2>
      <p className="font-normal text-lg text-textBlue xl:text-accentColor mb-6">
        {description}
      </p>
      <h2 className="font-bold text-xl text-accentColor mb-7 xl:mb-1">
        Compensation & Benefits:
      </h2>
      <p className="font-normal text-lg text-textBlue xl:text-accentColor">
        Our phisicians a wide range of benefits,
        <br className="xl:hidden" />
        including:
      </p>
      <ul className="mb-8 xl:mb-11">
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className=" flex font-normal text-lg text-textBlue xl:text-accentColor"
          >
            <IoSquareSharp className="mr-4 mt-1.5 xl:ml-negative32 text-textBlue" />{' '}
            {benefit}
          </li>
        ))}
      </ul>
    </>
  );
};
