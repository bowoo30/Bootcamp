import CartTotalPlayer from "./CardTotal"
import SubCard from "./SubCard"

const CardMain = ()=>{
    return(
        <div className='lg:flex gap-4 items-stretch'>
            <CartTotalPlayer/>
            <div className='bg-white p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]'>
                <div className='flex flex-wrap justify-between h-full'>
                    <SubCard title="Player Online" value="20"/>
                    <SubCard title="Room" value="10"/>
                    <SubCard title="Highest Score" value="100"/>
                </div>
            </div>
        </div>
    )
}

export default CardMain