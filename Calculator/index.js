const screen = document.querySelector('.screen');
const btn = document.querySelectorAll('.btn');


    btn.forEach (button =>{
        button.addEventListener ('click', () =>{
            const pressButton = button.textContent;
            if (button.id === 'c') {
                screen.textContent = '0'
                return;
            }

            if (button.id === 'delete') {
                if (screen.textContent.length === 1){
                    screen.textContent = '0'
                }else {screen.textContent = screen.textContent.slice(0,-1)}
                return
            }

            if(button.id === 'equal'){
                try {
                    screen.textContent = eval(screen.textContent);
                } catch (error) {
                    screen.textContent = 'Error'
                    setTimeout (()=>{
                        if(screen.textContent = 'Error'){
                            screen.textContent = '0'
                    }
                    }, 1000)
                }
                return
            }

            if (screen.textContent === '0'){
                screen.textContent = pressButton
            } else {screen.textContent += pressButton}
    })
})

