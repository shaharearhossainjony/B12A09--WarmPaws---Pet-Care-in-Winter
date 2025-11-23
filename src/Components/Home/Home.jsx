import React from 'react';
import HeroSlider from "../HeroSlider/HeroSlider";
import WinterCareSection from '../WinterCareSection/WinterCareSection.JSX';
import ExpertsVets from '../ExpertsVets/ExpertsVets';
import PopularWinterCareServices from '../PopularWinterCareServices/PopularWinterCareServices';
import HeroWelcome from '../HeroWelcome/HeroWelcome';

const Home = () => {
    return (
        <div className=''>
            <HeroWelcome></HeroWelcome>
            <HeroSlider></HeroSlider>
            <PopularWinterCareServices></PopularWinterCareServices>
            <ExpertsVets></ExpertsVets>
            <WinterCareSection></WinterCareSection>
        </div>
    );
};

export default Home;