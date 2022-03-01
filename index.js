const answer = 'abcde';

document.querySelector('button').addEventListener('click',
function(){
    const input = document.querySelectorAll('.input');
    for(let i = 0; i < input.length; i++){
        if (input[i].value == answer[i]){                //글자와 위치 정답 - 초록
            input[i].style.background = 'green';
        } else if(answer.includes(input[i].value)){       //위치만 틀림 - 노랑
            input[i].style.background = 'yellow';
        } else {                                        //둘 다 틀림 - 회색
            input[i].style.background = 'gray';
        }                
        
        input[i].classList.remove('input');
    }

    const template = `
    <br>
    <div>
        <input class="input">
        <input class="input">
        <input class="input">
        <input class="input">
        <input class="input">
    </div>`;
    document.querySelector('body').insertAdjacentHTML('beforeend', template);   

})
