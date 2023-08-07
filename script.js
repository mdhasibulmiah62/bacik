const hourse=document.getElementById("hrs");
const mimuets=document.getElementById("min");
const second=document.getElementById("sec");


setInterval(() => {
    let date=new Date();
    hourse.innerHTML=date.getHours();

    let min=date.getMinutes();
    if(min<10){
mimuets.innerHTML="0"+date.getMinutes();
    }else{
        mimuets.innerHTML=date.getMinutes();
    }
  


    let sec=date.getSeconds();
    if(sec<10){
        second.innerHTML="0"+date.getSeconds();
    }else{
        second.innerHTML=date.getSeconds();
    }

     
}, 1000);
