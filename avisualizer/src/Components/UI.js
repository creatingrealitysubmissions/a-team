import React from "react"

const uiStyle ={
    backgroundColor: "blue",
    minHeight: (window.innerHeight * 0.25) + "px",
    color: "white"
}

const columnStyle ={
    float: "left",
    width: "33%"
}
const columnHalf = {
    float: "left",
    width: "50%"
}

class UI extends React.Component{
    state={
        numObjects: 1,
        objectType: "cube",
        property: "position",
        secondaryProperty: "x"
    }
    changeNumObjects(evt){
        // console.log(evt.target.value)
        this.setState({
            numObjects: evt.target.value
        })
    }
    changeProperty(evt){
        console.log(evt.target.value)
        this.setState({
            property: evt.target.value
        })
    }
    changeSecondaryProperty(evt){
        this.setState({
            secondaryProperty: evt.target.value
        })
    }
    render(){
        let secondaryPropDiv = null
        if(this.state.property === "position" || this.state.property === "rotation"){
            secondaryPropDiv =  <div style={columnHalf}>
                                    <select onChange={this.changeSecondaryProperty.bind(this)}>
                                        <option value="x">x</option>
                                        <option value="y">y</option>
                                        <option value="z">z</option>
                                    </select>
                                </div>
        }
        return(
            <div style={uiStyle}>
                <h1>Controls</h1>
                <div>
                    <div style={columnStyle}>
                        <h3>Number of Objects</h3>
                        <input onChange={this.changeNumObjects.bind(this)} id="num-objects" type="number" step="1" value={this.state.numObjects}/>
                    </div>
                    <div style={columnStyle}>
                        <h3>Object Type</h3>
                        <select>
                            <option value="cube" >Cube</option>
                        </select>
                    </div>
                    <div style={columnStyle}>
                        <h3>Reactive Property</h3>
                        <div style={columnHalf}>
                            <select onChange={this.changeProperty.bind(this)}>
                                <option value="position">Position</option>
                                <option value="rotation">Rotation</option>
                                <option value="scale">Scale</option>
                            </select>
                        </div>
                       {secondaryPropDiv}
                    </div>
                </div>
            </div>
        )
    }
}

export default UI