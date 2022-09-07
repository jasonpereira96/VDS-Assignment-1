const isResizing = {
    1: false,
    2: false, 
    3: false
};

const isAnimating = {
    triangle: false,
    square: false,
    circle: false
}

function getDomId(id) {
    switch(id) {
        case 1: return "orange-circle";
        case 2: return "red-circle";
        case 3: return "pink-circle";
    }
}

function enableAnimation(domId) {
    const animationId = `${domId}-animation-2`;
    let animationEl = document.getElementById(animationId);
    animationEl.setAttribute("attributeName", "r");
}

function disableAnimation(domId) {
    const animationId = `${domId}-animation-2`;
    let animationEl = document.getElementById(animationId);
    animationEl.setAttribute("attributeName", "x");
}

const onCircleClick = () => {
    const circleAnimation = document.getElementById("pink-circle-animation-2");
    if (isAnimating.circle) {
        circleAnimation.setAttribute("dur", "0s");
    } else {
        circleAnimation.setAttribute("dur", "0.7s");
    }
    isAnimating.circle = !isAnimating.circle;
}

const onTriangleClick = () => {
    const triangleAnimation = document.getElementById("triangle-animation");
    if (isAnimating.triangle) {
        triangleAnimation.setAttribute("dur", "0s");
    } else {
        triangleAnimation.setAttribute("dur", "4s");
    }
    isAnimating.triangle = !isAnimating.triangle;
}

const onSquareClick = () => {
    const squareAnimation2 = document.getElementById("square-animation-2");
    const squareAnimation3 = document.getElementById("square-animation-3");

    if (isAnimating.square) {
        squareAnimation2.setAttribute("dur", "0.7s");
        squareAnimation3.setAttribute("dur", "0.7s");
    } else {
        squareAnimation2.setAttribute("dur", "0s");
        squareAnimation3.setAttribute("dur", "0s");
    }
    isAnimating.square = !isAnimating.square;
}