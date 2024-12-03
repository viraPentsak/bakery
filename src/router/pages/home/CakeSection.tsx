import {Image, Card, Quote, Stamp} from "./../../../components";

const images: string[] = ["/images/cakes_1.jpg", "/images/cakes_2.jpg", "/images/cakes_3.jpg", "/images/cakes_4.jpg"];

const CakeSection = () => {
    return (
        <div className="container grid grid-cols-6">
            <div className="col-span-full xl:col-span-3 text-center py-4 lg:px-8 xl:px-12">
                <Card title={"Art of cakes"}
                      subtitle={"we create delicious memories"}
                      description={"Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed."}>
                    <div className="px-2 md:px-4 text-xl font-serif md:text-2xl ">
                        <div className="pt-6 md:pt-8 font-bold">
                            Chef Cook
                        </div>
                        <div
                            className="md:flex md:flex-row content-center gap-5 md:pt-11">
                            <div className="border-t border-b border-stone-300 my-4 p-2.5 basis-20 grow">Anita</div>
                            <Image className=" w-24 h-24 rounded-full overflow-hidden mx-auto grow-0"
                                   src={"images/chief_avatar.jpg"} alt={"Anita the chief avatar"}/>
                            <div className="border-t border-b border-stone-300 my-4 p-2.5 basis-20 grow">Black-Blake
                            </div>
                        </div>
                        <Quote className="text-gray-600/50 leading-1">
                            <div className="text-leather-400">Some quote about pies & cakes. Or maybe about vampires?
                            </div>
                        </Quote>
                    </div>
                </Card>
            </div>
            <div className="col-span-full xl:col-span-3">
                <div className="relative">
                    <div className="grid grid-cols-4 gap-4 py-4 relative">
                        {images.map(imageURL => (
                            <div key={imageURL}
                                 className="col-span-full sm:col-span-2 lg:col-span-1 xl:sm:col-span-2  relative after:absolute after:border-4 after:inset-2 after:border-white shadow shadow-slate-500">
                                <Image src={imageURL} className="block w-full" alt="image of a cake"/>
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-0 lg:hidden xl:block">
                        <Stamp>
                            <div className="text-laser-400 text-center text-3xl font-serif">
                                TASTES SO <br/> GOOD!
                            </div>
                        </Stamp>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CakeSection;