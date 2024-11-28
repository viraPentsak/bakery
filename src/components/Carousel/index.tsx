import React from "react";
import {EmblaOptionsType} from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react";
import {CgChevronLeftO, CgChevronRightO} from "react-icons/cg";
import {twMerge} from "tw-merge";
import clsx from "clsx";
import CarouselArrowButton, {useArrowControls} from "./CarouselArrowButton";

interface CarouselProps {
    options?: EmblaOptionsType,
    slides: React.ReactNode[],
    slideClassName?: string
    // containerClassName?: string
}

const Carousel: React.FC<CarouselProps> = (props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(props.options);

    const slideCN = twMerge(clsx("flex-grow-0 flex-shrink-0 basis-full max-w-full px-3.5", props.slideClassName));

    const {nextDisabled, prevDisabled, onNextClick, onPrevClick} = useArrowControls(emblaApi);

    return (
        <div className="px-6 relative">
            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                    {props.slides.map((slide, index) => {
                        return <div className={slideCN}
                                    key={`slide-${index}`}>
                            {slide}
                        </div>
                    })}
                </div>
            </div>

            <CarouselArrowButton aria-description="previous slide" onClick={onPrevClick} disabled={prevDisabled}>
                <CgChevronLeftO/>
            </CarouselArrowButton>
            <CarouselArrowButton aria-description="next slide" onClick={onNextClick} next disabled={nextDisabled}>
                <CgChevronRightO/>
            </CarouselArrowButton>
        </div>
    );
};

export default Carousel;