import { Outlet } from "react-router-dom";
import Fotter from "../Footer/Fotter";
import Navbar from "../Nav/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Root;