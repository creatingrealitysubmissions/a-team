import AFRAME from 'aframe'
import React from 'react'
//import all movingMethods

const move = (movingItem, property, secondaryProperty) => {
  // If changing position
  if (property === "position") {
    // Get item's position
    var currentPosition = movingItem.components.position.data
    console.log(currentPosition)
    // If changing x
    if (secondaryProperty == "x") {
      currentPosition.x += 0.01
      currentPosition.y = Math.sin(Date.now())
      // If changing y
    } else if (secondaryProperty == "y") {
      currentPosition.y += 0.01
      currentPosition.x += Math.sin(Date.now())
      // If changing z
    } else if (secondaryProperty == "z") {
      currentPosition.z += 0.01
      currentPosition.x = Math.sin(Date.now())
    }
    // Update item's position
    movingItem.setAttribute('position', currentPosition);
  }
}

AFRAME.registerComponent('step', {
  schema: {
  },
  init: function () {
  },
  tick: function (t, dt) {
    var movingItems = document.querySelector('#Box')
    if(movingItems){
        move(movingItems, "position", "y")
    }
  }
});