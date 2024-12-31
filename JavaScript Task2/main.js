let btn= document.getElementById('btn');
btn.onmouseout = function(){
    btn.innerHTML='Can i help you?';
}

btn.onmouseover = function(){
    btn.innerHTML='Hello world!';
}

let selectElement = document.getElementById('font-family');
let textElement =document.getElementById('text');

selectElement.onclick=function(){
    let selectedFont = selectElement.value;
    textElement.style.fontFamily = selectedFont;
}

let selectElement2 = document.getElementById('font-size');

selectElement2.onclick=function(){
    let selectedFont = selectElement2.value;
    textElement.style.fontSize = selectedFont;
}

let selectItalic=document.getElementById('Italic');
selectItalic.onclick=function(){
    if (selectItalic.checked) {
        textElement.style.fontStyle = 'italic'; 
    } else {
        textElement.style.fontStyle = 'normal'; 
    }
}

let selectBold=document.getElementById('Bold');
selectBold.onclick=function(){
    if (selectBold.checked) {
        textElement.style.fontWeight = 'Bold'; 
    } else {
        textElement.style.fontWeight = 'normal'; 
    }
}

let selectUnderline=document.getElementById('Underline');
selectUnderline.onclick=function(){
    if (selectUnderline.checked) {
        textElement.style.textDecorationLine = 'Underline'; 
    } else {
        textElement.style.textDecorationLine = 'none'; 
    }
}