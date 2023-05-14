const btn = document.getElementById('btn');
const btnPlus = document.querySelector('.btn-plus');
const btnMinus = document.querySelector('.btn-minus');
const btnMultiply = document.querySelector('.btn-multiply');
const btnDiv = document.querySelector('.btn-div');
const counterNumber = document.querySelector ('.number')


btnPlus.addEventListener('click', ()=>{
    if (btnPlus.classList.contains('btn-plus')){
        console.log('suma');
        plus();
    }
    // if (btnMinus.classList.contains('btn-minus')){
    //     console.log('resta')
    //     minus()
    // }
    // if (btnMultiply.classList.contains('btn-multiply')){
    //     multiply()
    // }
    // if (btnDiv.classList.contains('btn-div')){
    //     div()
    // }
})


const number = 5

const plus = (number, plus) =>{
    const result = number + plus
    console.log(result);
}


const minus = (minus) =>{
    const result = number - minus
    console.log(result);
}


const multiply = (multiply) =>{
    const result = number * multiply
    console.log(result);
}


const div = (div) =>{
    const result = number / div
    console.log(result);
}



// plus(5, 10);
// minus(5);
// multiply(6);
// div(5);