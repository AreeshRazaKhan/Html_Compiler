var code = document.getElementById('compiler');
// function htmlCompiler(text) {
//     var displayCanvas = document.getElementById('iframe').contentDocument.body;
//     displayCanvas.innerHTML = code.value;
// }

function quickAdd(tagName) {
    var inputText = document.getElementById(tagName + '-text'); //h1-text or p-text
    var src = document.getElementById(tagName + '-src');
    var width = document.getElementById(tagName + '-width');
    var height = document.getElementById(tagName + '-height');

    if (tagName === 'img' || tagName === 'video') {
        code.value += `\n<${tagName} src="${src.value}"${width.value ? ` width="${width.value}"` : ''}${height.value ? ` height="${height.value}"` : ''}> ${tagName === 'video' ? '</video>' : ''}`
    } else {
        code.value += `\n<${tagName}>${inputText.value}</${tagName}>`;
    }
    runCode()
    inputText.value = src.value = width.value = height.value = "";
}

function runCode() {
    var displayCanvas = document.getElementById('iframe').contentDocument.body;
    displayCanvas.innerHTML = code.value;
}

// const droppable = new Draggable.Draggable(
//     document.querySelectorAll("button"), {
//     draggable: "button",
//     droppable: "iframe"
// });

// var containers = document.querySelectorAll('.quickadd');
const sortable = new Draggable.Sortable(document.querySelectorAll('.quickadd'), {
    draggable: '.drag-item',
    classes: {
        'draggable:over': ['draggable--over', 'opacity-25'],
        'source:dragging': ['draggable-source--is-dragging', 'opacity-0'],
    },
    mirror: {
        constrainDimensions: true,
        xAxis: false,
    },
    swapAnimation: {
        duration: 200,
        easingFunction: 'ease-in-out',
        horizontal: false,
    },
    plugins: [Draggable.Plugins.ResizeMirror, Draggable.Plugins.SwapAnimation],
});
