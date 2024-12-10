import {getTimedMenu} from "./../../../actions";
import {ButtonLink, Pricing, DescriptionCard} from "./../../../components";
import WheatSVG from "@/assets/svg/wheat.svg?react";

const CurrentDishSection = () => {
    const menu = getTimedMenu();

    return (
        <div className="bg-straw-950/20 py-8 md:py-14 xl:py-18 2xl:py-20 px-5">
            <div className="container max-w-screen-xl">
                <div className=" pb-2 md:pb-0 md:grid md:grid-cols-6">
                    <div className="md:col-span-3 xl:col-span-4 text-center">
                        <div className="pb-10 xl:pb-14 pt-1">
                            <div className="text-3xl md:text-6xl text-white text-shadow font-serif font-bold">
                                Breakfast
                            </div>
                            <div className="text-lg uppercase text-leather-300 text-shadow font-serif font-bold">
                                7am Breakfast? we’re open!
                            </div>
                        </div>
                        <div className="text-white text-shadow">
                            {menu.map((menuItem, index) => {
                                return <div key={menuItem.title} >
                                    {index !== 0 && <WheatSVG className="w-20 h-auto mx-auto text-white/30 mt-3 mb-2"/>}
                                    <Pricing {...menuItem}/>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="md:col-span-3 xl:col-span-2 md:pr-8 xl:pr-0">
                        <DescriptionCard title="Your morning Escape with Flair">
                            <div className="pb-14">
                                Donec vitae sapien ut libero venenatis faucibus.
                                Nullam quis ante. Etiam sit amet orci eget eros
                                faucibus tincidunt. Duis leo.
                            </div>
                            <ButtonLink to="/menu" className="d-block w-full max-w-48 my-auto mb-3">
                                Read
                            </ButtonLink>
                        </DescriptionCard>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CurrentDishSection;