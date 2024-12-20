import React from 'react';
import * as motion from "motion/react-client"
import team1 from '../assets/team/happyTeam(1).jpg'
import team2 from '../assets/team/happyTeam(2).jpg'

const Bannar = () => {
    return (
        <div className="bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto">
                <div className='flex-1 md:pb-36 ml-10'>
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, delay: 5, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600  shadow-2xl" />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100], y: [20, 50, 20] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm -mt-4 w-64 rounded-t-[40px] rounded-br-[40px] border-blue-600 border-b-4 border-l-4" />
                </div>

                <div className='w-[60%]'>
                    <motion.h1
                        animate={{ x:[0, 50, 0]}}
                        transition={{ duration: 5, delay: 1, repeat: Infinity }}
                        className="text-5xl font-bold">Latest <motion.span
                            animate={{ color: ['#9538e2', '#0e7a81', '#0e1682', '#e8cc39'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >jobs</motion.span> for you!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in.  Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi.  In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary font-bold">Get Job Portal</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;