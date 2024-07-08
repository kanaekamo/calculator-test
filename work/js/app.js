document.addEventListener('DOMContentLoaded', ()=>{
  const display = document.getElementById('display');
  const number = document.getElementsByClassName('number');
  const operator = document.getElementsByClassName('operator');
  const equals = document.getElementsByClassName('equals');
  const clear = document.getElementsByClassName('clear')
  
  for(let i=0;i<number.length;i++){
    number[i].addEventListener('click',()=>{
      display.value = display.value + number[i].innerHTML
    });
  }for(let i=0;i<operator.length;i++){
    operator[i].addEventListener('click',()=>{
      display.value = display.value + ' ' + operator[i].innerHTML + ' '
    });
  }
  equals[0].addEventListener('click',()=>{
    display.value = eval(display.value);
  });
  clear[0].addEventListener('click',()=>{
    display.value = ''
  });
});
