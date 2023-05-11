const body = document.body;

function turnRed() {
  body.style.backgroundColor = "red";
  body.style.color = "black";
}

function light(onOff) {
  if (onOff) {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
}
