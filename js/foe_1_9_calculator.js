$(document).ready( function() {
  $("#calucate_output").on("click", function() {
    let first_place_fps = getAndProcessFps("first");
    let second_place_fps = getAndProcessFps("second");
    let third_place_fps = getAndProcessFps("third");
    let fourth_place_fps = getAndProcessFps("fourth");
    let fifth_place_fps = getAndProcessFps("fifth");

    let leftover_fps = $("#total_fps").val() - (first_place_fps + second_place_fps + third_place_fps + fourth_place_fps + fifth_place_fps);

    $("#output").html(leftover_fps.toString());
  });
});

function getAndProcessFps(place) {
    let place_fps = Math.ceil($(`#${place}_place_fps`).val() * 1.9);

    if (place_fps === 0) {
      place_fps = 1;
    }

    $(`#${place}_place_fps_result`).html(`= ${place_fps}`);

    return place_fps;
}