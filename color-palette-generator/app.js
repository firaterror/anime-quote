let currentElem;



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
    setTimeout(() => div.classList.remove('active'), 1500)

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
        
        let input = document.createElement('input');
        input.value = color;
        input.name = 'color';
        a.appendChild(spanColor);
        a.appendChild(spanText);
        a.appendChild(input);
        li.appendChild(a);
        palette.appendChild(li);
        a.addEventListener('mouseover', (e) => {
            currentElem = e.target.parentNode;
        });

        li.addEventListener('click', (e) =>{
            e.target.parentNode.querySelector('input[name="color"]').select();
            document.execCommand('copy');
            notification('Color <b>' + input.value + '</b> copied to your clipboard');
        })

    }
}

window.addEventListener('keypress', (e) => {
    if(e.code === 'Space'){
        generateColorPalette();
    } else if (e.code === 'KeyC' && currentElem){
        let targetInput = currentElem.querySelector('input[name="color"]');
        targetInput.select();
        document.execCommand('copy');
        notification('Color <b>' + targetInput.value + '</b> copied to your clipboard');
    }
})


generateColorPalette();