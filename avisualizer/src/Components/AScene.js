import React from "react"
import 'aframe'
import ASphere from "./ASphere.js"
import AText from "./AText.js"
import MovingBox from './MovingBox.js'

class AScene extends React.Component{
    render(){
        return(
            <a-scene>
                <a-box color="#FF0000" position="0 0 -5"></a-box>
                <MovingBox/>
                <AText title="Nathan"/>
            </a-scene>
        )
    }
}

export default AScene