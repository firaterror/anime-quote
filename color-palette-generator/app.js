
function notification(msg){

    let old_div = document.querySelector('.alert');
    
    if (old_div){
        old_div.parentNode.removeChild(old_div);
    }
    let div = document.createElement('div');
    div.className = 'alert';
    div.innerHTML = msg;
    document.body.appendChild(div);

    setTimeout(() => div.classList.add('active'), 1);
    setTimeout(() => div.classList.remove('active'), 1000)

}


function randomColor(){
    let str = 'abcdef0123456789';
    let color = '#';
    for (let i = 0; i <= 5; i++){
        color += str[Math.floor(Math.random() * str.length)];
    }
    return color;
}


let palette = document.getElementById('palette');

function generateColorPalette(){
    palette.innerHTML = '';

    for (let i = 1; i <= 5; i++){
        let color = randomColor();

        let li = document.createElement('li');
        let a = document.createElement('a');

        let spanColor = document.createElement('span');
            spanColor.className = 'color';
            spanColor.style.setProperty('--color', color)
        
        let spanText = document.createElement('span');
            spanText.className = 'color-code';
            spanText.innerHTML = color;
        a.appendChild(spanColor);
        a.appendChild(spanText);
        li.appendChild(a);
        palette.appendChild(li);
    }
}

window.addEventListener('keypress', (e) => {
    if(e.code === 'Space'){
        generateColorPalette();
    }
})


generateColorPalette();