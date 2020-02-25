// JavaScript Document

let text1 = document.querySelector('.sec-info-one');
let text2 = document.querySelector('.sec-info-two');
let chooseStyle = document.querySelector('.sec-info-three');
let editButton = document.querySelector('.edit');
let area = document.querySelector('.area');
let save = document.querySelector('.save');
let style = document.querySelector('.style');
let form1 = document.forms['form1'];
let form2 = document.forms['form2'];
let form3 = document.forms['form3'];
let colorText = document.querySelector('.sec-colors-text');
let colorTextButton = document.getElementById('text-color');
let colorBackgroundButton = document.getElementById('background-color');
let getSel = x => document.querySelector(x);





editButton.addEventListener('click',function(){
area.value = text1.innerHTML;
text2.style.display = 'block';
chooseStyle.style.display = 'none'
})


save.addEventListener('click',function(){
text1.innerHTML = area.value;    
})



style.addEventListener('click',function(){
 chooseStyle.style.display = 'block'   
 text2.style.display = 'none';    
})


for(let i = 0; i < form1.length; i++){
    form1.elements[i].addEventListener('click',function(){
     text1.style.fontSize = form1.elements[i].value;
        //text.style.display = 'block';
})
}



form2.font.addEventListener('click', function(){
for(let i = 0; i < form2.font.options.length; i++){
    if(form2.font.options[i].selected){
        text1.style.fontFamily = this.value;
    }
  }
})


form3.checkbox1.addEventListener('click', function(){
if(form3.checkbox1.checked){
    text1.style.fontWeight = this.value;
  }
    else{
    text1.style.fontWeight = 'normal';
  }
})

form3.checkbox2.addEventListener('click', function(){
if(form3.checkbox2.checked){
    text1.style.fontStyle = 'italic';
  }
    else{
    text1.style.fontStyle = 'normal';
  }
})



colorTextButton.addEventListener('click', function(){
colorText.style.display = 'block';    
})


getSel('.red').onclick = function(){
    text1.style.color = '#e84745';
}

getSel('.blue').onclick = function(){
    text1.style.color = '#0078fe';
}

getSel('.green').onclick = function(){
    text1.style.color = ' #1f9645';
}

getSel('.black').onclick = function(){
    text1.style.color = '#323b3f';
}

getSel('.yellow').onclick = function(){
    text1.style.color = '#ffbd0b';
}

getSel('.pink').onclick = function(){
    text1.style.color = '#f4548a';
}

getSel('.white').onclick = function(){
    text1.style.color = '#ffffff';
}

getSel('.violet').onclick = function(){
    text1.style.color = '#704ebe';
}

getSel('.aqua').onclick = function(){
    text1.style.color = '#0a96b7';
}


colorBackgroundButton.addEventListener('click',function(){
colorText.style.display = 'block';     
})

getSel('.red').onclick = function(){
    text1.style.backgroundColor = '#e84745';
}

getSel('.blue').onclick = function(){
    text1.style.backgroundColor = '#0078fe';
}

getSel('.green').onclick = function(){
    text1.style.backgroundColor = ' #1f9645';
}

getSel('.black').onclick = function(){
    text1.style.backgroundColor = '#323b3f';
}

getSel('.yellow').onclick = function(){
    text1.style.backgroundColor = '#ffbd0b';
}

getSel('.pink').onclick = function(){
    text1.style.backgroundColor = '#f4548a';
}

getSel('.white').onclick = function(){
    text1.style.backgroundColor = '#ffffff';
}

getSel('.violet').onclick = function(){
    text1.style.backgroundColor = '#704ebe';
}

getSel('.aqua').onclick = function(){
    text1.style.backgroundColor = '#0a96b7';
}