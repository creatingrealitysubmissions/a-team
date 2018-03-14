import AFRAME from 'aframe'
import React from 'react'
//import all movingMethods

const move = (movingItem) => {
    //get item's position

    var currentPosition = movingItem.components.position.data
    console.log(currentPosition)

    currentPosition.x += 0.01
    currentPosition.y = Math.sin(Date.now())
    movingItem.setAttribute('position', currentPosition);

    //set item's position to new coordinates based off of method
}

AFRAME.registerComponent('step', {
  schema: {
  },

  init: function () {

  },

  tick: function (t, dt) {
    var movingItems = document.querySelector('#Box')
    if(movingItems){
        move(movingItems)
    }
  }
});
