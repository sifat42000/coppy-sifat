import { IoLocation } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={job.logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job.job_title}</h2>
    <p className="card-title">{job.company_name}</p>
    <div className="card-title">
        <button className="px-5 py-2 font-bold border rounded mr-4">{job.remote_or_onsite}</button>
        <button className="px-5 py-2 font-bold border rounded mr-4">{job.job_type}</button>
       
    </div>
    <div className="card-title">
            <h2 className="flex"><IoLocation className="mt-1"></IoLocation> {job.location}</h2>
            <h2 className="flex"><FaDollarSign className="mt-1"></FaDollarSign> Salary :{job.salary}</h2>
        </div>
    <div className="card-actions flex">
      <Link to='/job/:id'><button className="btn btn-primary">View details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Job;