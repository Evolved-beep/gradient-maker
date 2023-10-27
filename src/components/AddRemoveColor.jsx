import React from "react";
import { useDispatch } from "react-redux";
import { addColor, removeColor } from "../features/gradient"; 


const AddRemoveColor = ({action, text}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        if(action === 'add'){
            dispatch(addColor())
        } 
        else if(action === 'remove'){
            dispatch(removeColor())
        }
    }
    return(
        <button className="mr-1 border border-slate-400 rounded min-w-[40px]"
                onClick={handleClick}>
            {text}
        </button>
    )
}

export default AddRemoveColor