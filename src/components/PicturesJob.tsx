interface IProps {
    pictures: [],
} 

export const PicturesJob:React.FC<IProps> = ({ pictures }) => {
    return (
      <div className="mb-16 xl:mb-24">
        <h3 className="pb-2.5 mb-3.5 text-large font-bold text-accentColor border-b border-gray-200">
          Attached images
        </h3>
        <div className="flex justify-center xl:justify-start">
          {pictures.map((picture, index) => (
            <div
              key={index}
              className="mr-2.5 last:mr-0 w-52 h-115 overflow-hidden rounded-sm"
            >
              <img
                alt="jobs"
                src={picture}
                className="object-cover h-115 w-full"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  