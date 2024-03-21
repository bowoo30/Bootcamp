const SearchDash = ()=>{
    return(
        <div className='bg-white rounded-full border-none p-3 mb-4 shadow-md'>
            <div className='flex items-center'>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search..." name="search" id="search" className='ml-3 focus:outline-none w-full' />
            </div>
        </div>
    )
}


export default SearchDash