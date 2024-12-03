import {useOutletContext} from "react-router-dom";

import {OutletProps} from "../../../components/page/Layout";
import {Hero} from "../../../components/page";
import {ButtonLink} from "../../../components/";

import DashedLineSvg from "@/assets/svg/dashed_line.svg?react";
import VignetteOuterSVG from "@/assets/svg/vignette_outer.svg?react";
import BreadSVG from "@/assets/svg/bread_logo.svg?react";

const HomeHero = () => {
    const {inViewRef}: OutletProps = useOutletContext();

    return (<div ref={inViewRef} className="relative">
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
                        <ButtonLink to="/menu" type="secondary" className="text-sm	">
                            Our Menu
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </Hero>
        <div className="text-laser-400">
            <VignetteOuterSVG className="absolute left-2/4 bottom-0 w-28 h-28 -ml-14 -mb-14 drop-shadow-sm"/>
            <div className="absolute  left-2/4 bottom-0 rounded-full bg-white w-20 h-20 -ml-10 -mb-10 shadow-sm"></div>
            <BreadSVG className="absolute left-2/4 bottom-0 w-14 h-14 m-auto -ml-7 -mb-7"/>
        </div>
    </div>);
};

export default HomeHero;