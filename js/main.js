const isResizing = {
    1: false,
    2: false, 
    3: false
};

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

const onCircleClick = id => {
    let domId = getDomId(id)
    if (isResizing[id]) {
        enableAnimation(domId)
    } else {
        disableAnimation(domId)
    }
    isResizing[id] = !isResizing[id];
}
    