import React from "react";
import HomeHero from "./HomeHero.tsx";
import CakeSection from "./CakeSection.tsx";
import MenuSection from "./MenuSection.tsx";
import CurrentDishSection from "./CurrentDishSection.tsx";
import FeaturedSection from "./FeaturedSection.tsx";

const HomePage: React.FC = () => {
    return (
        <div>
            <HomeHero/>
            <div className="main">
                <div className="py-8 md:py-14 xl:py-18 px-5">
                    <CakeSection/>
                </div>
                <div className="py-8 md:py-14 xl:py-18 2xl:py-24 px-5 bg-banner-menu">
                    <MenuSection/>
                </div>

                <div className="bg-gray-900 bg-banner-featured bg-no-repeat bg-cover">
                    <CurrentDishSection/>
                </div>
                <div className="bg-straw-100">
                    <FeaturedSection/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;