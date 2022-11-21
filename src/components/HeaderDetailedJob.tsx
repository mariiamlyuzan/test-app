import { BiStar } from 'react-icons/bi';
import { SlShare } from 'react-icons/sl';
import { BsBookmark } from 'react-icons/bs';

export const HeaderDetailedJob = () => {
  return (
    <header className="xl:flex justify-between xl:pb-2 xl:mb-39 xl:border-b border-gray-200">
      <h2 className="pb-3 mb-6 xl:p-o xl:mb-0 text-large font-bold text-accentColor border-b xl:border-none border-gray-200">
        Job Details
      </h2>
      <ul className="flex mb-8 xl:mb-0 ">
        <li className="flex mr-9 xl:mb-0 text-sm xl:text-lg font-normal text-textBlue xl:text-accentColor">
          <BsBookmark className="hidden xl:block w-26 h-26 mr-4 text-iconBookmark" />
          <BiStar className="xl:hidden w-5 h-5 mr-3 text-textBlue xl:text-iconBookmark" />{' '}
          Save to my list
        </li>

        <li className="flex text-sm xl:text-lg font-normal text-textBlue xl:text-accentColor">
          <SlShare className="w-5 h-5 mr-2.5 xl:mr-3.5 xl:w-6 xl:h-6 text-textBlue text-iconBookmark" />
          Share
        </li>
      </ul>
    </header>
  );
};
