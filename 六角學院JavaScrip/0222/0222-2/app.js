const tittle=document.querySelector('.tittle');
tittle.addEventListener('click',function(e){
    if (e.target.nodeName !== "INPUT") {
        return;
    }
    console.log(e.target);
    
})
