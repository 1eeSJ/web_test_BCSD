function onSearchBtn(){
    /*
    if(document.querySelector('.sidebars').style.display === 'none'){  
        document.querySelector('.sidebars').style.display ='block';
        document.querySelector('#searchBox').style.display = 'none';
    }
    else{                                                               
        document.querySelector('.sidebars').style.display ='none';
        document.querySelector('#searchBox').style.display = 'block';
    }
    */
   const element = document.querySelector('#searchBox');
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