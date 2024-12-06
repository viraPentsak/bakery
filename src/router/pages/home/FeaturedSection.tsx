import {Receipt} from "../../../components";
import {getReceipt} from "../../../actions";

const titleStyleClass = `    
    pt-8 md:pt-14 xl:pt-18 
    relative
    text-center
    before:absolute 
    before:bg-village 
    before:bg-center 
    before:bg-contain 
    before:bg-no-repeat 
    before:opacity-20
    before:inset-0  
`;

const FeaturedSection = () => {
    const receipt = getReceipt("rcp_2")

    if (!receipt) return null;


    return (
        <div className="container">
            <div className="pb-8 md:pb-14 xl:pb-18 px-5">
                <div className={titleStyleClass}>
                    <div className="2xl:pt-10 text-3xl md:text-5xl font-serif font-bold relative">
                        {receipt.title}
                    </div>
                </div>
                <div className="uppercase text-leather-300 font-serif font-bold text-center mb-4">
                    {receipt.subtitle}
                </div>
                <Receipt data={receipt}/>
            </div>
        </div>
    );
};

export default FeaturedSection;