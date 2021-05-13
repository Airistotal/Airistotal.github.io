var radius = 250;

$(document).ready(function() {
  createPath(radius, 0, "origin");
  createCircle();
  createDataInputs();

  $("#target-geometry").on("change", function() {
    createDataInputs();
  });

  $("#target-angle").on("change", function() {
    let target_angle = $("#target-angle").val();

    if (isNaN(target_angle)) {
      console.log(`${target_angle} is not a number.`);
    } else {
      console.log(`${target_angle} is a number.`);
      createAngle(target_angle, "angle-line");
    }
  });
});

function createAngle(angle, id) {
  let dx = Math.cos(degToRad(angle));
  let dy = Math.sin(degToRad(angle));

  createPath(radius * dx, radius * -dy, id);
}

function createCircle() {
  var center = radius;

  var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
  $(circle).attr("cx", radius);
  $(circle).attr("cy", radius);
  $(circle).attr("r", "2");

  $("#geometry-display").append(circle);
}

function createPath(lx, ly, id, width="3px") {
  var center = radius;

  $(`#${id}`).remove();

  var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
  $(newElement).attr("id", id);
  newElement.setAttribute("d",`M ${center} ${center} L ${center + lx} ${center + ly}`); //Set path's data
  newElement.style.stroke = "#000"; //Set stroke colour
  newElement.style.strokeWidth = width; //Set stroke width
  $("#geometry-display").append(newElement);
}

function degToRad(deg) {
  return deg * Math.PI / 180;
}

function createDataInputs() {
  var num_sides = getNumSidesForGeometry();

  $("#data-inputs").html("");

  /*<div>Side 1</div>
  <label>Angle</label>
  <input id="target-angle"  type="text" name="target angle" />
  <label>Length</label>
  <input id="target-angle"  type="text" name="target angle" />*/

  console.log(selected);
}

function getNumSidesForGeometry() {
  var selected = $('#target-geometry').find(":selected").text();
  var num_sides = 1;

  switch(selected.toLowerCase()) {
    case "angle":
      num_sides = 1;
      break;
    case "triangle":
      num_sides = 3;
      break;
    default:
      num_sides = 1;
      break;
  }

  return num_sides;
}