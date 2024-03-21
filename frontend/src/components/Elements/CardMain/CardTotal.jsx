const CartTotalPlayer = ()=>{
    return(
        <div className='bg-white md:p-2 p-6 rounded-lg rounded-lg border border-gray-200 mb-4 lg:mb-0 shabow-md lg:w-[35%]'>
            <div className='flex justify-center items-center space-x-5 h-full'>
                <div>
                    <p>Total Player</p>
                    <h2 className='text-4xl font-bold text-black'>20</h2>
                    <p className='text-normal'>Players</p>
                </div>
                <i className='fa-solid fa-user-group flex text-5xl'></i>
            </div>
        </div>
    )
}

export default CartTotalPlayer