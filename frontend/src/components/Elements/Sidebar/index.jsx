const SideBar = ()=>{
    return (
        <div id="sideNav" className="lg:block hidden bg-white w-64 h-screen fixed rounded-none border-none">
                <div className="p-4 space-y-2">
                    <div className="flex flex-col py-3">
                        <a href="#" aria-label="dashboard"className="relative px-4 py-2 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                            <i className="fa-solid w-6 fa-house text-white"></i>
                            <span className="flex justify-start w-20 font-medium">Home</span>
                        </a>
                        <a href="#" aria-label="dashboard"className="relative px-4 py-2 mt-2 flex items-center space-x-4 rounded-lg text-gray hover:bg-gray-200 ease-in-out duration-500">
                            <i className="fa-solid w-6 fa-gamepad text-gray-500"></i>
                            <span className="flex justify-start w-20 font-medium">Players</span>
                        </a>
                        <a href="#" aria-label="dashboard"className="relative px-4 py-2 mt-2 flex items-center space-x-4 rounded-lg text-gray hover:bg-gray-200 ease-in-out duration-500">
                            <i className="fa-solid w-6 fa-building text-gray-500"></i>
                            <span className="flex justify-start w-20 font-medium">Room</span>
                        </a>
                        <a href="#" aria-label="dashboard"className="relative px-4 py-2 mt-2 flex items-center space-x-4 rounded-lg text-gray hover:bg-gray-200 ease-in-out duration-500">
                            <i className="fa-solid w-6 fa-book text-gray-500"></i>
                            <span className="flex justify-start w-20 font-medium">History</span>
                        </a>
                    </div>
                    <div className="relative top-[350px]">
                        <a href="#" aria-label="dashboard"className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-gray hover:bg-gray-200 ease-in-out duration-500">
                            <i className="fa-solid fa-right-from-bracket text-gray-500"></i>
                            <span className="mr-1 font-medium">Logout</span>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default SideBar