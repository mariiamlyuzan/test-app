import React from 'react';

import { FiChevronLeft } from 'react-icons/fi';
import { HeaderDetailedJob } from './HeaderDetailedJob';
import { PicturesJob } from './PicturesJob';
import { AddressJob } from './AddressJob';
import { AdditionalInfoJob } from './AdditionalInfoJob';
import { DescriptionJob } from './DescriptionJob';

import {IJob} from '../types/job';

interface IProps {

    detailedJob: IJob;
    onClick: () => void;
}

export const DetailedJob:React.FC<IProps> = ({ detailedJob, onClick }) => {
  const {
    title,
    salary,
    address,
    benefits,
    description,
    email,
    employment_type,
    location,
    name,
    phone,
    pictures,
    updatedAt,
  } = detailedJob;

  return (
    <>
      <div className="w-full xl:flex justify-between px-3.5 pt-6 pb-9 bg-white xl:pt-14 xl:pb-52 2xl:pl-309 2xl:pr-334 xl:px-10">
        <div className="xl:mr-20">
          <HeaderDetailedJob />
          <button className="hidden cursor-pointer xl:block cursor-pointer bg-accentColor rounded-lg px-8 py-4 text-xs font-semibold text-white mb-8 hover:bg-white hover:text-accentColor border border-accentColor">
            APPLY NOW
          </button>
          <article>
            <DescriptionJob
              title={title}
              salary={salary}
              description={description}
              updatedAt={updatedAt}
              benefits={benefits}
            />
            <div className="text-center xl:text-left mb-135 xl:mb-86">
              <button className="bg-accentColor rounded-lg px-8 py-4 text-xs font-semibold text-white hover:bg-white cursor-pointer hover:text-accentColor border border-accentColor">
                APPLY NOW
              </button>
            </div>
            <div className="xl:flex xl:flex-col-reverse">
               <PicturesJob pictures={pictures} />
              <AdditionalInfoJob
                employment_type={employment_type}
                benefits={benefits}
              /> 
            </div>
            <button
              onClick={onClick}
              className="ml-negative32 hidden xl:flex items-center justify-center cursor-pointer text-accentColor py-2 px-6 text-xs font-semibold bg-gray-200 rounded-lg hover:bg-accentColor hover:text-gray-200"
            >
              <FiChevronLeft className="mr-3 h-9 w-6" />
              RETURN TO JOB BOARD
            </button>
          </article>
        </div>
        <AddressJob
          location={location}
          name={name}
          address={address}
          phone={phone}
          email={email}
        />
      </div>
    </>
  );
};
