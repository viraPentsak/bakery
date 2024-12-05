import React from "react";
import {GoStar, GoStarFill} from "react-icons/go";
import {Image, Card, Carousel} from "./../../../components";
import {getFirstReceipt} from "../../../actions/getReceipt.ts";

const MenuTimeCard = () => (
    <div
        className="
        sm:absolute right-0 top-0
        bg-white
        w-full
        p-8 font-serif font-bold text-leather-400 text-center
        flex flex-col gap-0.5 bg-mountains bg-center	bg-no-repeat
        sm:max-w-[200px]
        shadow-2xl
        ">
        <span className="text-lg/none uppercase">Ready in </span>
        <span className="text-8xl/none text-straw-300">40</span>
        <span className="text-lg/none">min</span>
    </div>
);

interface MenuCarouselProps {
    images: string[];
}

const MenuCarousel: React.FC<MenuCarouselProps> = ({images}) => {

    if (!images) return null;

    return (
        <Carousel options={{align: "start", loop: false}}
                  slideClassName="rounded-full overflow-hidden pb-[100%] sm:pb-[50%] md:pb-[33%] relative sm:basis-1/2 md:basis-1/3"
                  slides={images.map((imageSrc) => {
                      return <div key={imageSrc}
                                  className="absolute inset-3.5 rounded-full bg-cover"
                                  style={{backgroundImage: `url(${imageSrc})`}}>
                      </div>
                  })}/>
    )
}
const MenuSection = () => {
    const receipt = getFirstReceipt();

    if (!receipt) return null;

    const {photoMain, photo} = receipt;

    return (
        <div className="max-w-screen-xl mx-auto md:flex flex-row justify-center">
            <div
                className="lg:basis-5/6 relative sm:pt-9 sm:pr-28 xl:flex flex-row mask-b-l-corner b-l-corner-flip after:bg-white after:shadow">
                <div className="grow bg-straw-950 overflow-hidden relative min-h-72">
                    <div className="xl:absolute inset-0">
                        <Image alt={"Current menu item"}
                               className="xl:h-full w-full xl:object-cover"
                               src={photoMain}/>
                    </div>
                    <div
                        className="absolute top-0 bottom-0 left-7 pl-0.5 flex flex-col gap-2 text-white justify-center text-xl"
                        aria-hidden title="Rating: 4 out of 5">
                        <GoStarFill className="drop-shadow-2xl"/>
                        <GoStarFill className="drop-shadow-2xl"/>
                        <GoStarFill className="drop-shadow-2xl"/>
                        <GoStarFill className="drop-shadow-2xl"/>
                        <GoStar className="drop-shadow-2xl"/>
                    </div>
                </div>

                <MenuTimeCard/>
                <div className="bg-white bg-windmill bg-no-repeat bg-right-bottom p-6 lg:p-10 2xl:px-12 basis-3/5">
                    <div className="sr-only">Rating: 4 out of 5</div>
                    <Card title="Tasty pancakes"
                          subtitle="season favourite"
                          description="Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus.">
                        <div className="pt-20 -mb-4">
                            <MenuCarousel images={photo}/>
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default MenuSection;