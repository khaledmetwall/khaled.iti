let star=document.getElementById('star');
let moon=document.getElementById('moon');
let mountains3 =document.getElementById('mountains3');
let mountains4 =document.getElementById('mountains4');
let river =document.getElementById('river');
let boat =document.getElementById('boat');
let khaled=document.querySelector('.khaled');
 window.onscroll=function(){
    let value=scrollY;
    star.style.left=value+'px';
    moon.style.top=value*3+'px';
    mountains3.style.top=value*2+'px';
    mountains4.style.top=value*1.5+'px';
    river.style.top=value +'px';
    boat.style.top=value*1.5 +'px';
    boat.style.left=value*3 +'px';
    novel.style.fontsize =value +'px';
    if(scroll>=67){
        novel.style.fontsize=67+'px';
        novel.style.position='fixed';
    }
}