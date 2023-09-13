var code = document.getElementById('compiler');
function htmlCompiler(text) {
    var displayCanvas = document.getElementById('iframe').contentDocument.body;
    displayCanvas.innerHTML = code.value;
}

var promptInput = prompt;
var widthPrompt = prompt;
var heightPrompt = prompt;
function quickAdd(tagName) {
    var quickTag = tagName.classList;
    if (quickTag.contains('h1')) {
        promptInput = prompt("Insert Heading Text");
        code.value += `\n<h1>${promptInput}</h1>`;
    }
    else if (quickTag.contains('p')) {
        promptInput = prompt("Insert Paragraph Text");
        code.value += `\n<p>${promptInput}</p>`;
    }
    else if (quickTag.contains('img')) {
        promptInput = prompt("Insert Image Source");
        widthPrompt = prompt("Enter Width");
        heightPrompt = prompt("Enter Height");
        code.value += `\n<img src="${promptInput}"${widthPrompt ? ` width="${widthPrompt}"` : ''}${heightPrompt ? ` height="${heightPrompt}"` : ''}>`


    }
    else if (quickTag.contains('video')) {
        promptInput = prompt("Insert Video Source");
        widthPrompt = prompt("Enter Width");
        heightPrompt = prompt("Enter Height");
        code.value += `\n<video src="${promptInput}" ${widthPrompt ? `width="${widthPrompt}"` : ``} ${heightPrompt ? `height="${heightPrompt}"` : ``}></video>`
    }

}

function runCode() {
    htmlCompiler();
}