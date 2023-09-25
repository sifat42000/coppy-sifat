import Banner from "../Banner/Banner";
import Featurejobs from "../Feature/Featurejobs";
import Catagorylist from "../catagory/Catagory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagorylist></Catagorylist>
            <Featurejobs></Featurejobs>
            
        </div>
    );
};

export default Home;