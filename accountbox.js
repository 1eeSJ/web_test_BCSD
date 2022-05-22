function onAccountBtn(){
    
   const element = document.querySelector('#accountBox');
   if (element.classList.contains('expose')) {
       element.classList.remove('expose');
       element.classList.add('hide');
       setTimeout(() => {
           element.classList.remove('hide');
       }, 1000);
    } 
    else {
       element.classList.add('expose');
    }
}