const keyboard = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 127, 20, 97, 115, 100, 102,103 ,104 ,106 ,107 ,108 ,59 ,39 ,13 ,16 ,47 ,122 ,120 ,99 ,118 ,98 ,110 ,109 ,44 ,46 ,47 ,38 ,16 ,17 ,91 ,18 ,32 ,18 ,17 ,37 ,40 ,39];

function init(){
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        out +='<div class="key" data = "'+ keyboard[i] +'">'+String.fromCharCode(keyboard[i])+'</div>';
    }
    // document.querySelector('#keyboard').innerHTML = out;
    document.querySelector('body').innerHTML = '<div id="keyboard">'+out+'</div>';
}

init();
document.onkeypress = function (event) {
    document.querySelectorAll('#keyboard .key').forEach(function (element){
        element.classList.remove('active');
    });
    document.querySelector('#keyboard .key[data = "'+event.keyCode+'"]').classList.add('active');
}
document.querySelectorAll('#keyboard .key').forEach(function (element){
    element.onclick = function(event){
        document.querySelectorAll('#keyboard .key').forEach(function (element){
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
    }
});