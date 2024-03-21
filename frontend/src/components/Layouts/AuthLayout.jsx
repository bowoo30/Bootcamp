import { Link } from "react-router-dom";

const AuthLayout = (props)=>{
    const {children,title,type}= props;
    return(
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs border-2 py-4 px-4 bg-gray-100 rounded">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
            <p className="font-medium text-slate-500 mb-8">
                Welcome, Please enter your details
            </p>
            {children}
            <Navigation type={type}/>
            </div>
        </div>
    );
};

const Navigation = ({type})=>{
    if(type === "login"){
        return (
                <p className="text-sm mt-3 text-center">
                    Dont have an account? 
                    <Link to="/register" className="font-bold text-blue-600 hover:underline"> Sign up</Link>                
                </p>
        )
    } else {
        return (
            <p className="text-sm mt-3 text-center">
                    Have an account? 
                    <Link to="/login" className="font-bold text-blue-600 hover:underline"> Login</Link>                
                </p>
        )
    }
}

export default AuthLayout;