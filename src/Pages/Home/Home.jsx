import Achievement from "../../Components/HomeComponent/Achievement";
import Event from "../../Components/HomeComponent/Event";
import HomeSlider from "../../Components/HomeComponent/HomeSlider";
import Message from "../../Components/HomeComponent/Message";


const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <Message></Message>
            <Event></Event>
            <Achievement></Achievement>
        </div>
    );
};

export default Home;