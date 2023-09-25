import { useEffect, useState } from "react";
import Job from "../job/job";


const Featurejobs = () => {
    const [jobs,setJobs] = useState([])
    const [datalength,setDatalemgth] = useState(4)
          
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))

    },[])
    
    return (
        <div>
            <h2 className="text-5xl">Featured Jobs :{jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, datalength).map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
            <div className={datalength === jobs.length && 'hidden'}>
                <button onClick={() => setDatalemgth(jobs.length)}
                 className="btn btn-primary">View All</button>
            </div>
        </div>
    );
};

export default Featurejobs;