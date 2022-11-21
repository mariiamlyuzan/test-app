import { useState, useEffect } from 'react';
import * as API from '../services/job-api';
import { DetailedJob } from './DetailedJob';
import { IJob } from '../types/job';
import { ImStarFull, ImLocation } from 'react-icons/im';
import { BsBookmark } from 'react-icons/bs';
import { PaginatedList } from 'react-paginated-list';

export const Jobs:React.FC = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [detailedJob, setDetailedJob] = useState<{
    id: string,
    title: string,
    salary: string,
    address: string,
    benefits: [],
    description: string,
    email: string,
    employment_type: [],
    location: {lat: number,long: number},
    name: string,
    phone: string,
    pictures: [],
    updatedAt: string,

} | null>(null);

  useEffect(() => {
    async function fetch() {
      try {
        const jobs = await API.fetchJobs();
        setJobs(jobs);

      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  const onClickTitle = (id:string) : void => {
    const [job] = jobs.filter(item => item.id === id);
    setDetailedJob(job);
  };

  const onClickReturn = () :void => {
    setDetailedJob(null);
  };

  return (
    <>
      {detailedJob ? (
    
        <DetailedJob detailedJob={detailedJob} onClick={onClickReturn} />
      ) : (
        <div className="w-full p-2 pb-4 xl:px-64 xl:pt-7 xl:pb-16">
        <ul className="w-full p-0 xl:mx-auto">
        <PaginatedList
        list={jobs}
        itemsPerPage={15}
        renderList={jobs => (
          <>
            {jobs.map(
              ({ id, title, name, address, updatedAt, pictures }) => (
                <li
                  className="flex justify-between mb-2 last:mb-0 px-4 pt-3 pb-7 bg-bgBlue xl:py-6 xl:bg-white rounded-lg drop-shadow-lg"
                  key={id}
                >
                  <div className="overflow-hidden mt-8 md:mt-6 xl:mt-0 w-16 md:mr-6 h-16 md:w-20 md:h-20 rounded-full">
                    <img
                      alt="Job"
                      src={pictures.reduce((acc,el) => {
                         return el ;
                        },'')}
                      className="object-cover h-16 md:h-20 xl:h-20 w-full"
                    />
                  </div>

                  <div className="w-4/5 md:w-11/12 xl:flex xl:justify-between xl:flex-row-reverse ">
                    <div className="flex justify-between items-center xl:justify-end xl:items-end xl:w-5/12">
                      <div className="hidden xl:block absolute top-6">
                        {' '}
                        <BsBookmark className="w-5 h-22 text-iconBookmark" />
                      </div>

                      <div className="flex xl:mb-14 xl:mr-8">
                        <ImStarFull className="w-2.5 h-2.5 text-iconStar xl:text-opacityAccent xl:w-18 xl:h-18" />
                        <ImStarFull className="w-2.5 h-2.5 text-iconStar xl:text-opacityAccent xl:w-18 xl:h-18" />
                        <ImStarFull className="w-2.5 h-2.5 text-iconStar xl:text-opacityAccent xl:w-18 xl:h-18" />
                        <ImStarFull className="w-2.5 h-2.5 text-iconStar xl:text-opacityAccent xl:w-18 xl:h-18" />
                        <ImStarFull className="w-2.5 h-2.5 text-iconStar xl:text-opacityAccent xl:w-18 xl:h-18" />
                      </div>
                      <p className="text-mainGray text-sm font-light xl:text-base xl:font-normal ">
                        Posted {updatedAt
                          .toLocaleString()
                          .slice(0, 10)}
                      </p>
                    </div>
                    <div>
                      <h2
                        className="text-lg text-accentColor cursor-pointer xl:text-xl xl:font-bold mb-1.5 xl:mb-2"
                        onClick={() => {
                          onClickTitle(id);
                        }}
                      >
                        {title}
                      </h2>
                      <p className="text-mainGray mb-2">
                        Department name • {name}
                      </p>

                      <p className="text-mainGray flex items-center">
                        {' '}
                        <ImLocation
                        className="mr-2"
                        />
                        {address}
                      </p>
                    </div>
                  </div>
                </li>
              ),
            )}
          </>
        )}
      />
    </ul>
  </div>
)}
</>
);
};
