import { Typography } from "@mui/material";
import Header from '../../components/Header';
import ExploreSection from './componets/ExploreSection';
import Footer from "../../components/Footer";

const Landing = () => {

    return (
        <>
             <Header />
             <ExploreSection />
            <Typography variant='h3' color='primary'>Flock</Typography>
            <p>Twitter with a twist</p>

            <Footer/>
        </>
    )
}

export default Landing; 