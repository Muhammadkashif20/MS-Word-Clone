var ffamily = document.getElementById("Font-Select");
var fsize = document.getElementById("FontSize");
var fincrement = document.getElementById("F-increment");
var fdecrement = document.getElementById("F-Decrement");
var clearAll=document.getElementById('C-All')
var ChangingCase = document.getElementById("C-Case");
var Leftbtn = document.getElementById("L-btn");
var Centerbtn = document.getElementById("Center-btn");
var Rigthbtn = document.getElementById("R-btn");
var bold = document.getElementById("b-Text");
var italic = document.getElementById("i-Text");
var underline = document.getElementById("u-Text");
var strike = document.getElementById("st-Text");
var color = document.getElementById("c-Text");
var bgColor = document.getElementById("bg-Text");
var textarea = document.getElementById("Text");

ffamily.addEventListener("click", function () {
    if(ffamily.value=='Time New Roman'){
       textarea.style.fontFamily = 'Times New Roman';}
       else if(ffamily.value=='Arial'){
        textarea.style.fontFamily = 'Arial, Helvetica, sans-serif';}
        else if(ffamily.value=='Trebuchet Ms'){
            textarea.style.fontFamily = 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans';}
}
)
fsize.addEventListener('click',function(){
    if(fsize.value=='8'){
        textarea.style.fontSize='8px';
    }
    else if(fsize.value=='10'){
        textarea.style.fontSize='10px';
    }
    else if(fsize.value=='12'){
        textarea.style.fontSize='12px';
    }
    else if(fsize.value=='14'){
        textarea.style.fontSize='14px';
    }
    else if(fsize.value=='20'){
        textarea.style.fontSize='20px';
    }
    else if(fsize.value=='24'){
        textarea.style.fontSize='24px';
    }
    else if(fsize.value=='30'){
        textarea.style.fontSize='30px';
    }
    else if(fsize.value=='32'){
        textarea.style.fontSize='32px';
    }
    else if(fsize.value=='36'){
        textarea.style.fontSize='36px';
    }
    else if(fsize.value=='42'){
        textarea.style.fontSize='42px';
    }
    else if(fsize.value=='44'){
        textarea.style.fontSize='44px';
    }
    else if(fsize.value=='46'){
        textarea.style.fontSize='46px';
    }
    else if(fsize.value=='52'){
        textarea.style.fontSize='52px';
    }
    else if(fsize.value=='72'){
        textarea.style.fontSize='72px';
    }
}
)

fincrement.addEventListener('click',function () {
var count=prompt('Enter your Font Size Increment')
if(count=='8'){
    textarea.style.fontSize='8px';
}
else if(count=='10'){
    textarea.style.fontSize='10px';
}
else if(count=='12'){
    textarea.style.fontSize='12px';
}
else if(count=='14'){
    textarea.style.fontSize='14px';
}
else if(count=='20'){
    textarea.style.fontSize='20px';
}
else if(count=='24'){
    textarea.style.fontSize='24px';
}
else if(count=='30'){
    textarea.style.fontSize='30px';
}
else if(count=='32'){
    textarea.style.fontSize='32px';
}
else if(count=='36'){
    textarea.style.fontSize='36px';
}
else if(count=='42'){
    textarea.style.fontSize='42px';
}
else if(count=='44'){
    textarea.style.fontSize='44px';
}
else if(count=='46'){
    textarea.style.fontSize='46px';
}
else if(count=='52'){
    textarea.style.fontSize='52px';
}
else if(count=='72'){
    textarea.style.fontSize='72px';
}
}
)

fdecrement.addEventListener('click',function () {
    var count=prompt('Enter your Font Size Decrement 2')
if(count=='8'){
    textarea.style.fontSize='6px';
}
else if(count=='10'){
    textarea.style.fontSize='8px';
}
else if(count=='12'){
    textarea.style.fontSize='10px';
}
else if(count=='14'){
    textarea.style.fontSize='12px';
}
else if(count=='20'){
    textarea.style.fontSize='18px';
}
else if(count=='24'){
    textarea.style.fontSize='22px';
}
else if(count=='30'){
    textarea.style.fontSize='28px';
}
else if(count=='32'){
    textarea.style.fontSize='30px';
}
else if(count=='36'){
    textarea.style.fontSize='34px';
}
else if(count=='42'){
    textarea.style.fontSize='40px';
}
else if(count=='44'){
    textarea.style.fontSize='42px';
}
else if(count=='46'){
    textarea.style.fontSize='44px';
}
else if(count=='52'){
    textarea.style.fontSize='50px';
}
else if(count=='72'){
    textarea.style.fontSize='70px';
}
}
 )
 ChangingCase.addEventListener('click',function() {
if(ChangingCase.value=='upperCase'){
    textarea.style.textTransform='upperCase'
}
else if(
 ChangingCase.value=='lowerCase'){
    textarea.style.textTransform='lowerCase'
}
else if(ChangingCase.value=='capitalize'){
    textarea.style.textTransform='capitalize'
}
 })


 clearAll.addEventListener('click',function () {
   location.reload()
 })

 Leftbtn.addEventListener('click',function () {
    
        textarea.style.textAlign='left'
    
 })
 Centerbtn.addEventListener('click',function () {
        textarea.style.textAlign='center'
    
 })
 Rigthbtn.addEventListener('click',function () {
    textarea.style.textAlign='right'

})

bold.addEventListener('click',function () {
 textarea.style.fontWeight='bold'
})
italic.addEventListener('click',function () {
    textarea.style.fontStyle='italic'
   })
   underline.addEventListener('click',function () {
    textarea.style.textDecoration='underline'
   })

   strike.addEventListener('click',function () {
    textarea.style.textDecoration=' line-through'
   })

   color.addEventListener('click',function () {
    if(color.value=='yellow'){
        textarea.style.color='yellow'
    }
    else if(color.value=='blue'){
        textarea.style.color='blue'
    }
    else if(color.value=='orange'){
        textarea.style.color='orange'
    }
    else if(color.value=='red'){
        textarea.style.color='red'
    }
    else if(color.value=='green'){
        textarea.style.color='green'
    }
    else if(color.value=='white'){
        textarea.style.color='white'
    }

    
   })
   bgColor.addEventListener('click',function () {
    if(bgColor.value=='yellow'){
        textarea.style.backgroundColor='yellow'
    }
    else if(bgColor.value=='blue'){
        textarea.style.backgroundColor='blue'
    }
    else if(bgColor.value=='orange'){
        textarea.style.backgroundColor='orange'
    }
    else if(bgColor.value=='red'){
        textarea.style.backgroundColor='red'
    }
    else if(bgColor.value=='green'){
        textarea.style.backgroundColor='green'
    }
    else if(bgColor.value=='black'){
        textarea.style.backgroundColor='black'
    }

    
   })
 
 
