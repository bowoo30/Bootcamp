import SideBar from "../Elements/Sidebar/index"
import NavDash from "../Elements/Nav/index"
import SearchDash from "../Elements/Search"
import CardMain from "../Elements/CardMain"
import { useEffect } from "react"
import { getUsers } from "../../services/user.service"

// useEffect(()=>{
//     getUsers();
// },[])

const FormDashboard = ()=>{
    return (
        <div>
            {/* Navbar */}
            <NavDash/>

            {/* Sidebar */}
            <SideBar/>

            <div className='lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2'>
                <SearchDash/>
                <CardMain/>
                <div className='bg-white md:h-[381px] rounded-lg p-4 shadow-md my-4'>
                    <table className='table-fixed border-collapse border-spacing-x-5 w-full'>
                        <caption className="caption-top font-bold text-xl mb-2">Information</caption>
                        <thead>
                            <tr className='border-b-2 text-center '>
                               <th className='font-semibold w-[5px]'>No</th>
                               <th className='font-semibold'>Player Name</th>
                               <th className='font-semibold'>Room</th>
                               <th className='font-semibold'>Score</th>
                               <th className='font-semibold'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b text-center ">
                                <td>1</td>
                                <td>Syamsul Wibowo</td>
                                <td>War room</td>
                                <td>100</td>
                                <td>
                                    <div className="flex items-center justify-center space-x-3">
                                        <a href="#"><i className="fa-solid fa-circle-info"></i></a>
                                        <a href="#"><i className="fa-solid fa-pen-to-square"></i></a>
                                        <a href="#"><i className="fa-solid fa-eraser"></i></a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default FormDashboard