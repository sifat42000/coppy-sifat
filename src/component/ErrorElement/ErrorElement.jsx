import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div>
            <h2>Opps This contain is not availeable</h2>
            <Link to='/'>Go to home page</Link>

            
        </div>
    );
};

export default ErrorElement;