// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  one()
  two()
  three()
  four()
}

function one () {
  var one = document.getElementById('one')
  one.addEventListener('mouseenter', makeBlue)
  one.addEventListener('mouseleave', makeWhite)
  one.addEventListener('click', makeYellow)
}

// CREATE FUNCTION two HERE
function two () {
  var two = document.getElementById('two')
  two.addEventListener('mouseenter', makeGreen)
  two.addEventListener('mouseleave', makeWhite)
  two.addEventListener('click', makeYellow)
}
// CREATE FUNCTION three HERE
function three () {
  var three = document.getElementById('three')
  three.addEventListener('mouseenter', makeOrange)
  three.addEventListener('mouseleave', makeWhite)
  three.addEventListener('click', makeYellow)
}

function four () {
  var four = document.getElementById('four')
  four.addEventListener('mouseenter', makeBlue)
  four.addEventListener('mouseleave', makeWhite)
  four.addEventListener('click', makeYellow)
}
// Changes the background color of event's target
// CREATE FUNCTION four HERE
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}

function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green'
}

function makeOrange (evt) {
  evt.target.style.backgroundColor = 'orange'
}
function makeYellow (evt) {
  evt.target.style.backgroundColor = 'yellow'
}
