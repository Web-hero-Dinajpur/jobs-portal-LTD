import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HoteJobs = () => {

    const [jobs, setjobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => {
                setjobs(data)
            })
    }
        , [])

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 max-w-7xl mx-auto'>
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HoteJobs;
