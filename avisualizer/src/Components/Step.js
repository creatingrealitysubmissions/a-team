import AFRAME from 'aframe'
import React from 'react'
//import all movingMethods

const move = (movingItem, property, secondaryProperty) => {
  // If changing position
  if (property === "position") {
    // Get item's position
    var currentPosition = movingItem.components.position.data
    // console.log(currentPosition)
    // If changing x
    if (secondaryProperty === "x") {
      currentPosition.x += 0.01
    //   currentPosition.y = Math.sin(Date.now())
      // If changing y
    } else if (secondaryProperty === "y") {
      currentPosition.y += 0.01
    //   currentPosition.x += Math.sin(Date.now())
      // If changing z
    } else if (secondaryProperty === "z") {
      currentPosition.z += 0.01
    //   currentPosition.x = Math.sin(Date.now())
    }
    // Update item's position
    movingItem.setAttribute('position', currentPosition);
  }
  if(property === "rotation"){
      var currentRotation = movingItem.components.rotation.data
      if (secondaryProperty === "x") {
        currentRotation.x += 1
      } else if (secondaryProperty === "y") {
        currentRotation.y += 1
      } else if (secondaryProperty === "z") {
        currentRotation.z += 1
      }
      movingItem.setAttribute('rotation', currentRotation)
  }
}

AFRAME.registerComponent('step', {
  init: function () {
  },
  tick: function (t, dt) {
    var movingItems = document.querySelectorAll('.Reactive')
    if(movingItems){
        for(let i = 0; i < movingItems.length; i++){
            move(movingItems[i], movingItems[i].components.reactiveinfo.data.primaryProperty, movingItems[i].components.reactiveinfo.data.secondaryProperty)
        }
    }
  }
});

AFRAME.registerComponent('reactiveinfo', {
    schema: {
        primaryProperty:  {type: 'string', default: 'position'},
        secondaryProperty: {type: 'string', default: 'x'}
    },
    init: function () {
        var movingItems = document.querySelectorAll('.Reactive')
        console.log("component primary prop:", movingItems[0].components.reactiveinfo.data.primaryProperty)
        console.log("component secondary prop:", movingItems[0].components.reactiveinfo.data.secondaryProperty)
    }
  })