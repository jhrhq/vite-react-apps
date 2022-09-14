import React from 'react';
import img from '../Asset/images.jpeg'

const TaskDetails = ({ user, task}) => {
  console.log(task);
    return (
        <>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={img || user?.picture} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user?.name}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
               <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>{task?.priority}</td>  
              <td>f</td> 
              <td>
              <button className="btn btn-xs btn-warning">Edit</button>
              <button className="btn btn-xs btn-error ml-2">Delete</button>
              </td>         
            </tr>
        </>
    );
};

export default TaskDetails;