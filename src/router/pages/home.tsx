import React from "react";
import {Hero} from "@/components/page";
import Link from "@/components/Link.tsx";
import {useOutletContext} from "react-router-dom";
import {OutletProps} from "@/components/page/Layout.tsx";
import DashedLineSvg from "@/assets/svg/dashed_line.svg?react";
import VignetteOuterSVG from "@/assets/svg/vignette_outer.svg?react";
import BreadSVG from "@/assets/svg/bread_logo.svg?react";

// import DashedLine from "*.svg";

const menuButton = (
    <Link to="/menu"
             className="uppercase
             font-serif font-bold
             border border-dashed border-white/50
             py-4 px-6 md:px-10 xl:px-14
             bg-gray-600/50
             transition-colors
             hover:bg-gray-600/80
             hover:border-solid">
        Our Menu
    </Link>);

const HomePage: React.FC = () => {
    const {inViewRef}: OutletProps = useOutletContext();

    const heroSection = <div ref={inViewRef} className="relative">
        <Hero className="hero bg-slate-700"
              imgClassName="bg-hero-home"
              contentClassName="bg-slate-700/30 h-dvh max-h-full">
            <div className="container max-w-screen-xl pt-[--header-height] md:pt-[--header-height-lg]">
                <div className="text-white text-center py-10 px-5">
                    <div className="text-6xl xl:text-8xl md:text-7xl pb-5 md:pb-10 xl:pb-14 font-serif font-bold">
                        Pastry with love
                    </div>
                    <div className="pb-5 md:pb-10 xl:pb-14">
                        <DashedLineSvg className="m-auto w-[193px] h-[15px]"/>
                    </div>
                    <div className="md:w-3/4 xl:w-2/4 mx-auto">
                        <p className="text-2xl pb-5 md:pb-10 xl:pb-16">
                            We’re bringing you fresh ingredients
                            every day in ways you can’t resist.</p>
                        {menuButton}
                    </div>
                </div>
            </div>
        </Hero>
        <div className="text-laser-400">
            <VignetteOuterSVG className="absolute left-2/4 bottom-0 w-28 h-28 -ml-14 -mb-14 drop-shadow-sm"/>
            <div className="absolute  left-2/4 bottom-0 rounded-full bg-white w-20 h-20 -ml-10 -mb-10 shadow-sm"></div>
            <BreadSVG className="absolute left-2/4 bottom-0 w-14 h-14 m-auto -ml-7 -mb-7"/>
        </div>
    </div>;


    return (
        <div>
            {heroSection}
            <div className="main">

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