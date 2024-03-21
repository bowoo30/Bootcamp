import imageCover from '/images/cover.jpg';
import googleIcon from '/images/google.svg';

const colors = {
    primary: "#060606",
    background: "#f5f5f5",
    disbaled: "#D9D9D9"
}

const LoginPage = ()=>{
    return(
        <div className="w-full h-screen flex items-start">
            <div className="relative w-1/2 h-full flex flex-col">
                <div className='absolute top-[20%] left-[8%] flex flex-col'>
                    <h1 className='text-4xl text-white font-bold my-4'>Turn Your into reality</h1>
                    <p className='text-xl text-white font-normal'>Start for free and get attractive offers from the community</p>
                </div>
                <img src={imageCover} alt="" className='w-full h-full object-cover'/>
            </div>
            <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
                <h1 className='w-full max-w-[500px] text-xl text-[#060606] font-semibold'>B&B. Corp</h1>

                <div className='w-full flex flex-col max-w-[500px]'>
                    <div className='w-full flex flex-col mb-2'>
                        <div className='text-3xl font-semibold mb-2'>Login</div>
                        <p className='text-base mb-2'>Welcome Back! Please Enter your details.</p>
                    </div>

                    <div className='w-full flex flex-col'>
                        <input type="email" className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' placeholder='Email' />
                        <input type="password" className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' placeholder='Password' />
                    </div>

                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex items-center'>
                            <input type="checkbox" className='w-4 h-4 mr-2'/>
                            <p className='text-sm'>Remmeber me</p>
                        </div>
                        <div>
                            <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password ?</p>
                        </div>
                    </div>

                    <div className='w-full flex flex-col my-4'>
                        <button className='w-full bg-[#060606] my-2 font-semibold p-4 text-sm text-white rounded-md text-center flex items-center justify-center cursor-pointer'>Log in</button>
                        <button className='w-full bg-white border font-semibold border-black my-2 p-4 text-sm text-black rounded-md text-center flex items-center justify-center cursor-pointer'>Register</button>
                    </div>

                    <div className='w-full flex items-center justify-center relative py-2'>
                        <div className='w-full h-[1px] bg-black/40'></div>
                        <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>
                    </div>
                    <div className='w-full bg-white border font-semibold border-black/40 my-2 p-4 text-sm text-black rounded-md text-center flex items-center justify-center cursor-pointer'>
                        <img src={googleIcon} alt="" className='h-6 mr-2'/>
                        Sign In With Google
                    </div>

                </div>

                <div className='w-full flex items-center justify-center'>
                    <p className='text-sm font-normal text-black'>Dont have a account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free</span></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage