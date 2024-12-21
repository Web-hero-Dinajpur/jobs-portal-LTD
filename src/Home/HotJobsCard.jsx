import React from 'react';
import { GrUserWorker } from 'react-icons/gr';
import { IoLocationOutline } from 'react-icons/io5';

const HotJobsCard = ({ job }) => {

    const { title, jobType, company, company_logo, requirements, description, location, salaryRange } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl p-2">
            <div className='flex gap-2 items-center'>
                <img
                    className='w-16'
                    src={company_logo}
                    alt="" />
                <div className='flex gap-1 items-center'>
                    <IoLocationOutline></IoLocationOutline>
                    <p>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex gap-2 items-center'>
                    <GrUserWorker />
                    <button className=''>{jobType}</button>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;