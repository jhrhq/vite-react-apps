import React, { useEffect, useState } from 'react';
import TaskDetails from './TaskDetails';

const AllTask = () => {
    const [users, setUsers] = useState([]);
    const [tasks, setTasks] = useState([])
    const allUsers = users?.users;
    const allTasks = tasks.tasks;
    console.log(allTasks);

    useEffect(()=>{
        fetch('https://devza.com/tests/tasks/listusers',{
            headers:{
                authToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'
            }
            })
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    useEffect(()=>{
        fetch('https://devza.com/tests/tasks/list',{
            headers:{
                authToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'
            }
            })
        .then(res => res.json())
        .then(data => setTasks(data))
    },[])

    if(!users.users || !tasks.tasks){
        return <p>Loading</p>
    }

    return (
        <div className='mt-8'>
            <div className="overflow-x-auto w-full px-12">
             <table className="table w-full">
               {/* /* <!-- head -->  */}
               <thead>
                 <tr>
                   <th>Name</th>
                   <th>Message</th>
                   <th>priority</th>
                   <th>Created date</th>
                   <th>Action</th>
                 </tr>
               </thead>
               <tbody>
                    {
                        allUsers.map(user => <TaskDetails key={user.id} user={user}></TaskDetails>)
                    }
                    {
                        allTasks.map(task => <TaskDetails key={task.id} task={task}></TaskDetails>)
                    }
               </tbody>
             </table>
            </div>
        </div>
    );
};

export default AllTask;