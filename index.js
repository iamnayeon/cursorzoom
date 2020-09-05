const elBeforeZoom = document.getElementById("before-zoom");
const elAfterZoom = document.getElementById("after-zoom");

elBeforeZoom.addEventListener("mousemove", (e) => {
  const { offsetX: x, offsetY: y } = e;

  const setPosition = (num) => {
    return -0.01 * Math.pow(num, 2) + 25;
  };
  console.log("===================================================");
  console.log("x position :", x, "convertTo :", setPosition(x));
  console.log("y position :", y, "converTo :", setPosition(y));

  elAfterZoom.style.transform = "translate(" + setPosition(x) + "px, " + setPosition(y) + "px)";
});
