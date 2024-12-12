import React, {useState} from "react";
import {I_Receipt} from "../interfaces";
import Image from "./Image.tsx";
import Card from "./Card.tsx";
import {classNames, formatTime, getAssetPath} from "../helpers";

interface ReceiptProps {
    data: I_Receipt;
}

const cardStyle = `
        w-full
        p-3
        font-serif font-bold text-leather-400 text-center
        gap-2.5 md:gap-0        
        bg-center bg-no-repeat
        w-full        
        place-items-center                  
        shadow-2xl        
        grid
        grid-cols-3 md:grid-rows-3
        *:md:col-span-3 *:row-span-1        
        md:w-[200px]        
        lg:max-h-[200px]        
        text-lg/none   
`

const Receipt: React.FC<ReceiptProps> = ({data}) => {
    const {photoMain, description} = data;
    const prepTime = formatTime(data.time.prep);
    const cookTime = formatTime(data.time.cook);

    const ingredients = data.ingredients.slice(0, 3);

    const [showReceipt, setShowReceipt] = useState<boolean>(false);

    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        setShowReceipt(mode => !mode);
    };

    const buttonStyling = classNames(
        `block py-3 px-6 
        uppercase font-serif font-bold text-lg leading-6
        transition-colors 
        border-dashed border-straw-300 bg-white text-straw-300 
        hover:bg-straw-300 hover:text-white`, {"bg-straw-300 text-white": showReceipt});


    const cards = [
        <div className={cardStyle + " bg-white/85 justify-center mb-0.5"} key="Prep time">
            <p className="uppercase">Prep</p>
            <p className="text-4xl xl:text-6xl/none text-gray-600">{prepTime}</p>
            <p>min</p>
        </div>,
        <div className={cardStyle + " bg-white/85 justify-center  mb-0.5"} key="Cook time">
            <p className="uppercase">Cook</p>
            <p className="text-4xl xl:text-6xl/none text-gray-600">{cookTime}</p>
            <p>min</p>
        </div>,
        <div className={cardStyle + " bg-white bg-mountains"} key="Total time">
            <p className="uppercase">Ready in </p>
            <p className="text-4xl xl:text-8xl/none text-straw-300">{prepTime + cookTime}</p>
            <p>min</p>
        </div>
    ]


    return (
        <div className="md:grid md:grid-cols-12 md:gap-10">
            <div className="md:col-span-full xl:col-span-9 xl:col-start-4 xl:row-start-1 row-span-3 pt-10 xl:pt-20">
                <Card className="bg-white relative max-w-[840px] mx-auto xl:mr-0 mb-6 p-2.5">
                    <div className="relative aspect-[820/536] w-full">
                        <Image src={ getAssetPath(photoMain)} alt="image of a cake"/>
                        {showReceipt && (<div className="absolute inset-0 md:right-[212px] bg-white/80 p-4">
                            {/*TODO: Display sanitized content*/}
                            {description}
                        </div>)}
                        <div className="absolute left-5 bottom-5  xl:-left-4 xl:-bottom-4">
                            <button
                                className={buttonStyling}
                                onClick={clickHandler}> Full Receipt
                            </button>
                        </div>
                    </div>

                    <div className="md:absolute md:right-2.5 md:-top-5 md:-bottom-5  md:max-w-[200px]">
                        {cards}
                    </div>
                </Card>
            </div>
            {ingredients.map((item, index) => {
                return <div key={item.name}
                            className={`pt-4 text-center row-span-1 md:col-span-4 xl:col-span-3 xl:col-start-1 xl:row-start-${index + 1}`}>
                    <div
                        className="block mx-auto mb-6 overflow-hidden rounded-full w-36 h-36 md:w-24 md:h-24 bg-no-repeat bg-center bg-cover shadow "
                        style={{backgroundImage: `url(${getAssetPath(item.photo)})`}}></div>
                    <div className="text-3xl/none font-serif text-leather-400 font-bold pb-6">
                        {item.name}
                    </div>
                    <div className="text-sm 2xl:text-lg leading-none pb-6">
                        {item.description}
                    </div>
                </div>
            })}
        </div>
    );
};

export default Receipt;