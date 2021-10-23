let display = document.querySelector('.display')

function insert(num){
    display.innerHTML += num
}

function clean(){
    display.innerHTML = ''
}

function remove(){
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1)
}

function result(){
    display.innerHTML = eval(display.innerHTML)
}

