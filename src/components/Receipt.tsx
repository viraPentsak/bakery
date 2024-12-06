import React from "react";
import {I_Receipt} from "../interfaces";
import Image from "./Image.tsx";
import Card from "./Card.tsx";


interface ReceiptProps {
    data: I_Receipt;
}

const Receipt: React.FC<ReceiptProps> = ({data}) => {
    const {photoMain} = data;
    const ingredients = data.ingredients.slice(0, 3);
    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        console.log("Show full receupt")
    }

    return (
        <div className="md:grid md:grid-cols-12">
            <div className="md:col-span-full xl:col-span-9 xl:col-start-4 xl:row-start-1 row-span-3">
                <Card className="bg-white relative">
                    <Image src={photoMain} className="aspect-video	w-full" alt="image of a cake"/>
                    <div className="absolute">
                        <button
                            className=" block uppercase font-serif font-bold text-lg leading-6 border-dashed border-straw-300 bg-white text-straw-300 hover:bg-straw-300 hover:text-white py-3 px-6 transition-colors"
                            onClick={clickHandler}> Full Receipt
                        </button>
                    </div>
                </Card>
            </div>
            {ingredients.map((item, index) => {
                return <div key={item.name}
                            className={`pt-4 text-center row-span-1 md:col-span-4 xl:col-span-3 xl:col-start-1 xl:row-start-${index + 1}`}>
                    <div
                        className="block mx-auto mb-6 overflow-hidden rounded-full w-36 h-36 md:w-24 md:h-24 bg-no-repeat bg-center bg-cover shadow "
                        style={{backgroundImage: `url(${item.photo})`}}></div>
                    <div className="text-3xl leading-none font-serif text-leather-400 font-bold  pb-6">
                        {item.name}
                    </div>
                    <div className="text-sm leading-none pb-6">
                        {item.description}
                    </div>

                </div>
            })}
        </div>
    );
};

export default Receipt;