import React, {useCallback, useEffect, useState} from "react";
import type {EmblaCarouselType} from "embla-carousel";

interface ArrowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    next?: boolean,
}

type UseControlsType = {
    nextDisabled: boolean;
    prevDisabled: boolean;
    onPrevClick: () => void;
    onNextClick: () => void;
}

export const useArrowControls = (
    emblaApi: EmblaCarouselType | undefined
): UseControlsType => {
    const [nextDisabled, setNextDisabled] = useState(true);
    const [prevDisabled, setPrevDisabled] = useState(true);

    const onPrevClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();

    }, [emblaApi]);

    const onNextClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setNextDisabled(!emblaApi.canScrollNext());
        setPrevDisabled(!emblaApi.canScrollPrev());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);

        emblaApi
            .on("reInit", onSelect)
            .on("select", onSelect);
    }, [emblaApi, onSelect]);


    return {
        nextDisabled,
        prevDisabled,
        onPrevClick,
        onNextClick
    }
};


const CarouselArrowButton: React.FC<ArrowProps> = ({children, next, ...rest}) => {
    const className: string = next ? "right-0" : "left-0";

    const arrowStylingClass = `
    text-4xl md:text-2xl 
    hover:text-straw-700 
    disabled:opacity-50 
    disabled:hover:text-inherit     
    flex flex-col 
    justify-center 
    transition-colors 
    absolute 
    top-0 bottom-0
    ${className}`;

    return (
        <button
            className={arrowStylingClass}
            {...rest}>
            {children}
        </button>
    )
}
export default CarouselArrowButton;