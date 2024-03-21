const SubCard = (props)=>{
    const {value,title} = props
    return(
        <div className='flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg text-center p-4 space-y-2 border border-gray-200 m-2'>
            <i className='fa-regular fa-user text-white'><span className='text-2xl ml-3'>{value}</span></i>
            <p className='text-white font-bold'>{title}</p>
        </div>
    )
}

export default SubCard