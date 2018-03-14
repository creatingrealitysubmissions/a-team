import React from "react"
import "aframe"
import'./Step'

const MovingBox = (props) =>{
    return(
        <a-box id="Box" step position="0 3 -5" color="red"></a-box>
    )
}

export default MovingBox