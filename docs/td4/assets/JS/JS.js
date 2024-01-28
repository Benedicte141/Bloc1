const $=(selector)=>document.querySelector(selector);

const addEvt=(selector,eventName,callback){
    $(selector).addEventListener(type,callback);
};

const keyPressFunction=function(event) {
    $('#saisie).innerHTML=event.target.value;
};

document.addEventListener('DOMContentLoaded' , function()}
    addEvt('#nom', 'keyup', keyPressFunction);
    addEvt('#bt-creer','click'()=>{
        console elm=$('#elm');
        const color=$('#color');
        constli=document.createElement('li');
        li.innerText=elm.value;
        li.style.coolor=color.value;
        })
});