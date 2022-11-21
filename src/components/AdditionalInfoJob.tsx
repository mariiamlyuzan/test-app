
interface IProps {
  employment_type : [],
  benefits: [],
} 

export const AdditionalInfoJob:React.FC<IProps> = ({ employment_type, benefits }) => {
    return (
      <div className="mb-16 xl:mb-87">
        <h3 className="pb-2.5 mb-3.5 text-large font-bold text-accentColor border-b border-gray-200">
          Additional info
        </h3>
        <p className="font-normal text-lg text-textBlue xl:text-accentColor mb-2.5">
          Employment type
        </p>
        <div className="flex">
          {employment_type.map((type, index) => (
            <span
              key={index}
              className="bg-opacityBlue text-sm text-textBlue xl:text-accentColor p-3.5 pl-14 pr-4 xl:px-20 rounded-lg border border-borderBlue font-bold mr-2 last:mr-0"
            >
              {type}
            </span>
          ))}
        </div>
        <p className="font-normal text-lg text-textBlue mb-2.5">Benefits</p>
        <div className="flex">
          {benefits.map((benefit, index) => (
            <span
              key={index}
              className="bg-opacityYellow text-textYellow text-sm py-3.5 px-5 xl:px-16 rounded-lg border border-borderYellow font-bold mr-2 last:mr-0"
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    );
  };