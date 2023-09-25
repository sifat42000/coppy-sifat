import { useLoaderData, useParams } from "react-router-dom";


const Jobdetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idint = parseInt(id)
    console.log(id,jobs)
    const job = jobs.find(job => job.id === idint)
    console.log(jobs, id)
    return (
        <div>
            <h2>job</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
            
            <h2 className="text-4xl">Details coming here</h2>
            {/* <p>{job.company}</p> */}
                </div>
                <div className="border">
                       <h2 className="text-2xl">SIde Things</h2>
                       <button className="btn btn-primary">Apply now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Jobdetails;