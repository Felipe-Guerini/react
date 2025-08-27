function Button(props){
    return <button  {...props} className="bg-slate-400 text-white rounded-md w-9 h-9 grid place-items-center shrink-0" >
        {props.children}
    </button>
    

    
}
export default Button;