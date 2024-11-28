import React from "react";
import HomeHero from "./HomeHero.tsx";
import CakeSection from "./CakeSection.tsx";
import MenuSection from "./MenuSection.tsx";

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

                <div className="h-dvh bg-red-400"></div>
                <div className="h-dvh bg-red-400"></div>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et molestie felis. Integer congue sed
                ipsum a facilisis. Ut dictum felis vitae dolor pulvinar vulputate. Curabitur in erat lectus. Aliquam
                maximus, elit non mollis maximus, diam nunc luctus neque, vel porta libero risus ut tellus. Mauris
                elementum scelerisque lacus dictum ultrices. Cras euismod tempus mauris at porttitor. Etiam libero urna,
                feugiat ut volutpat quis, commodo eu metus. Nunc maximus magna vitae enim commodo facilisis. In sed
                sagittis enim. Cras volutpat, sapien vitae aliquam dapibus, erat dui tempor nunc, non pretium lectus
                ante vitae diam. Pellentesque vestibulum tincidunt ex ut lobortis. In bibendum dapibus sodales.
                Curabitur et semper dui.

                Nunc at bibendum ex. Ut lacus metus, elementum quis libero bibendum, volutpat tincidunt dolor. Phasellus
                ac nunc ligula. Nullam euismod, erat vel congue rutrum, ex odio bibendum metus, nec sollicitudin ex nisl
                sit amet arcu. Aliquam molestie risus ut turpis laoreet imperdiet. Curabitur viverra et dolor eu
                rhoncus. Quisque rutrum ligula eget urna vehicula dictum. Nulla vitae tellus justo. Proin arcu dolor,
                semper id enim id, tempor gravida odio.

                Praesent fermentum nibh nibh, sit amet feugiat risus consectetur quis. In eu purus id nulla sodales
                dictum. Nam quis malesuada leo. Morbi aliquam dui a est sodales, ut tincidunt nunc cursus. Suspendisse
                cursus, ipsum et lobortis lacinia, sapien enim varius lectus, sed volutpat tellus sapien vitae sem.
                Integer vehicula ante sit amet sapien dictum vehicula. Donec consequat sem ut augue mollis, ut feugiat
                purus iaculis. In dictum ultrices dui ut bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed sit amet rhoncus eros. Duis posuere orci a dui facilisis, sed aliquet dui sagittis. Nullam nec
                justo ut felis volutpat laoreet. Mauris in lectus ante. Maecenas viverra quis tellus non aliquam. Sed
                vestibulum metus non dolor ornare interdum. Nulla mollis nibh in nibh aliquet, id tempus mauris rutrum.
            </div>
        </div>
    );
};

export default HomePage;
