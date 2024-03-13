// Line Analyzer

// Add Event Listener
document.getElementById("analyze").addEventListener("click", analyzeLine);

// Event Function
function analyzeLine() {
  // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
  let pt1x = Number(document.getElementById("pt1x").value);
  let pt1y = Number(document.getElementById("pt1y").value);
  let pt2x = Number(document.getElementById("pt2x").value);
  let pt2y = Number(document.getElementById("pt2y").value);

  // Call Analyze Functions and Display results

  document.getElementById("length").innerHTML = getLength(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("slope").innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
  document.getElementById("description").innerHTML = getDescription(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("location-1").innerHTML = getPointLocation(
    pt1x,
    pt1y
  );
  document.getElementById("location-2").innerHTML = getPointLocation(
    pt2x,
    pt2y
  );
  document.getElementById("slope-point").innerHTML = getPointSlope(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );

  document.getElementById("equation").innerHTML = getEquation(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
}

// Line Analyzer Functions (Write your solutions here. Uncomment above code when ready to test)

function getLength(x1, y1, x2, y2) {
  length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toFixed(2);
  return length;
}

function getSlope(x1, y1, x2, y2) {
  // Anti-Break Code
  if (x1 == x2 || y1 == y2) {
    slope = " The slope does not exist.";
  } else {
    slope = ((y2 - y1) / (x2 - x1)).toFixed(2);
  }
  return slope;
}

function getDescription(x1, y1, x2, y2) {
  // X Description
  if (x1 > x2) {
    changeHor = "decreases";
  } else if (x1 < x2) {
    changeHor = "increases";
  } else {
    changeHor = "No Change";
  }
  // Y Description
  if (y1 > y2) {
    changeVert = "decreases";
  } else if (y1 < y2) {
    changeVert = "increases";
  } else {
    changeVert = "No Change";
  }
  describe = `This line ${changeHor} horizontally and   ${changeVert} vertically from (${x1},${y1}) to (${x2},${y2}).`;

  // Anti-Break Code (hopefully)
  if (changeVert == "No Change" && changeHor == "No Change") {
    describe = `There is no change in this line.`;
  } else if (changeHor == "No Change") {
    describe = `This line ${changeVert} along the y-axis from ${y1} to ${y2}.`;
  } else if (changeVert == "No Change") {
    describe = `This line ${changeHor} along the x-axis from ${x1} to ${x2}.`;
  }
  return describe;
}

function getPointLocation(x1, y1) {
  if (x1 > 0 && y1 > 0) {
    Quad = "Quadrant 1";
  } else if (x1 < 0 && y1 > 0) {
    Quad = "Quadrant 2";
  } else if (x1 < 0 && y1 < 0) {
    Quad = "Quadrant 3";
  } else if (x1 > 0 && y1 < 0) {
    Quad = "Quadrant 4";
  }
  // return
  return `The point (${x1},${y1}) is in ${Quad}.`;
}

function getPointSlope(x1, y1, x2, y2) {
  if (x1 == x2 || y1 == y2) {
    slope = "";
  } else {
    slope = ((y2 - y1) / (x2 - x1)).toFixed(2);
  }
  let pSloEq = `${y2} - ${y1} = ${slope}(${x2} - ${x1})`;
  // Anti-Break
  if (x1 < 0 && y1 < 0) {
    pSloEq = `${y2} - (${y1}) = ${slope}(${x2} - (${x1}))`;
  } else if (x1 < 0 && y1 > 0) {
    pSloEq = `${y2} - ${y1} = ${slope}(${x2} - (${x1}))`;
  } else if (x1 > 0 && y1 < 0) {
    pSloEq = `${y2} - (${y1}) = ${slope}(${x2} - ${x1})`;
  }
  return pSloEq;
}

function getEquation(x1, y1, x2, y2) {
  if (x1 == x2 || y1 == y2) {
    slope = "";
  } else {
    slope = ((y2 - y1) / (x2 - x1)).toFixed(2);
  }
  let yInt = (y1 - slope * x1).toFixed(2);
  let sign = "";
  if (yInt < 0) {
    yInt = -yInt;
    sign = "-";
  } else {
    sign = "+";
  }
  let equation = `y = ${slope}x ${sign} ${yInt}`;
  return equation;
}
