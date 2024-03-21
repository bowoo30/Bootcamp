import LOGO from "/images/logo_th.png"

const NavDash = (props)=>{
    return(
        <nav className='bg-white border-b border-gray-300'>
                <div className='flex justify-between items-center px-9 py-4'>
                    <div className='font-semibold text-xl flex justify-between items-center space-x-10 w-[200px]'>
                        <a href=""><img src={LOGO} alt="" className='w-30 h-8'/></a>
                        <button id='menuBtn'><i className='fas fa-bars text-cyan-500 text-lg'></i></button>
                    </div>
                <div className='space-x-8'>
                    <button><i className='fas fa-bell text-cyan-500 text-lg'></i></button>
                    <button><i className='fas fa-user text-cyan-500 text-lg'></i></button>
                </div>
            </div>
        </nav>
    )
}

export default NavDash