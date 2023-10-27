import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateColorPosition } from "../../features/gradient";

const RangeColorPosition = () => {
    const dispatch = useDispatch()
    const gradientValues = useSelector(state => state.Gradient)
    const selectedColorPosition = gradientValues.colors.find(obj => obj.id === gradientValues.pickedColorId)

    return(
        <input type="range" 
               value={selectedColorPosition.position}
               onChange={e => dispatch(updateColorPosition(e.target.value))}
               className="w-full h-1 mb-10 bg-gray-200 rounded-lg cursor-pointer"
        />
    )


}

export default RangeColorPosition