import React from 'react';
import TaskDetails from './TaskDetails';

const AllTask = () => {
    
    return (
        <div className='mt-8'>
            <div className="overflow-x-auto w-full px-12">
             <table className="table w-full">
               {/* <!-- head --> */}
               <thead>
                 <tr>
                   <th>Name</th>
                   <th>Job</th>
                   <th>Favorite Color</th>
                 </tr>
               </thead>
               <tbody>
                 {/* <!-- row 1 --> */}
                    <TaskDetails></TaskDetails>
               </tbody>
             </table>
            </div>
        </div>
    );
};

export default AllTask;