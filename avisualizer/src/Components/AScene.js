import React from "react"
import 'aframe'
import ASphere from "./ASphere.js"
import AText from "./AText.js"
import MovingBox from './MovingBox.js'

class AScene extends React.Component{
    render(){
        return(
            <a-scene embedded>
                <MovingBox/>
                <a-circle src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Long_Shadows_on_the_Lunar_Surface_-_GPN-2000-001485.jpg" position="0 -3 0" rotation="-90 0 0" radius="20"></a-circle>
                <a-sky src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Earth_lights_vs_population_density.png">
                    <a-animation
                    attribute="rotation"
                    dur="100000"
                    fill="forwards"
                    easing="linear"
                    to="0 360 0"
                    repeat="indefinite">
                    </a-animation>
                </a-sky>
            </a-scene>
        )
    }
}

export default AScene