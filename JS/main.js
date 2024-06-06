// creating heading
let img=document.createElement("img");
img.src="Images/logo.png";

let logo=document.querySelector(".logo");
logo.appendChild(img);

//content


for(let i =0;i<=8;i++){
  let box=document.createElement("div");
  let container=document.querySelector(".xo-container");
  container.appendChild(box);
  box.className=`box-${i+1} box`;
}
//xo styling
let container=document.querySelector(".xo-container");



//x o game 
let box=document.querySelectorAll(".box");

box.forEach((e)=>{
  e.addEventListener("mouseover",()=>{
    e.classList.add("hover");
  })
  e.addEventListener("mouseout",()=>{
    e.classList.remove("hover");
  })
})

for(let i=0;i<1;i++){
  document.body.addEventListener("click",(element)=>{
    if(element.target.classList.contains("box")){
      i++;
      if(((i%2)==0&&element.target.innerHTML==="")){
        element.target.innerHTML="X";
      }else if((i%2)==1&&element.target.innerHTML===""){
        element.target.innerHTML="O";
      }else if(element.target.innerHTML!==""){
        i--;
      }
    }
  })
}
function stop(){
let time= setTimeout(()=>{
  box.forEach((e)=>{
    e.innerHTML="";
    e.classList.remove("win");
    e.classList.remove("lose");
  });
},0);
setTimeout(()=>{
    if(container.classList.contains("wrap_WIN")===true){
      container.classList.remove("wrap_WIN");
      container.classList.remove("stop");
    }else if(container.classList.contains("wrap_DRAW")===true){
      container.classList.remove("wrap_DRAW");
      container.classList.remove("stop");
    }
},2000);
}

    let winCheck = setInterval(()=>{
      
      if(box[0].innerHTML=="X"&&box[1].innerHTML=="X"&&box[2].innerHTML=="X"||box[0].innerHTML=="O"&&box[1].innerHTML=="O"&&box[2].innerHTML=="O"){
        box[0].classList.add("win");
        box[1].classList.add("win");
        box[2].classList.add("win");
        container.classList.add("stop");
        setTimeout(()=>{
          container.classList.add("wrap_WIN");
          stop();
        },1500);
      }
      else if(box[3].innerHTML=="X"&&box[4].innerHTML=="X"&&box[5].innerHTML=="X"||box[3].innerHTML=="O"&&box[4].innerHTML=="O"&&box[5].innerHTML=="O"){
        box[3].classList.add("win");
        box[4].classList.add("win");
        box[5].classList.add("win");
        container.classList.add("stop");
        setTimeout(()=>{
          container.classList.add("wrap_WIN");
          stop();
        },1500);
      }
    else if(box[6].innerHTML=="X"&&box[7].innerHTML=="X"&&box[8].innerHTML=="X"||box[6].innerHTML=="O"&&box[7].innerHTML=="O"&&box[8].innerHTML=="O"){
      box[6].classList.add("win");
      box[7].classList.add("win");
      box[8].classList.add("win");
      container.classList.add("stop");
        setTimeout(()=>{
          container.classList.add("wrap_WIN");
          stop();
        },1500);
    }
    else if(box[0].innerHTML=="X"&&box[3].innerHTML=="X"&&box[6].innerHTML=="X"||box[0].innerHTML=="O"&&box[3].innerHTML=="O"&&box[6].innerHTML=="O"){
      box[0].classList.add("win");
      box[3].classList.add("win");
      box[6].classList.add("win");
      container.classList.add("stop");
        setTimeout(()=>{
          container.classList.add("wrap_WIN");
          stop();
        },1500);
    }
    else if(box[1].innerHTML=="X"&&box[4].innerHTML=="X"&&box[7].innerHTML=="X"||box[1].innerHTML=="O"&&box[4].innerHTML=="O"&&box[7].innerHTML=="O"){
      box[1].classList.add("win");
      box[4].classList.add("win");
      box[7].classList.add("win");
      container.classList.add("stop");
        setTimeout(()=>{
          container.classList.add("wrap_WIN");
          stop();
        },1500);
    }
    else  if(box[2].innerHTML=="X"&&box[5].innerHTML=="X"&&box[8].innerHTML=="X"||box[2].innerHTML=="O"&&box[5].innerHTML=="O"&&box[8].innerHTML=="O"){
      box[2].classList.add("win");
      box[5].classList.add("win");
      box[8].classList.add("win");
      container.classList.add("stop");
        setTimeout(()=>{
          container.classList.add("wrap_WIN");
          stop();
        },1500);
    }
    else if(box[2].innerHTML=="X"&&box[4].innerHTML=="X"&&box[6].innerHTML=="X"||box[2].innerHTML=="O"&&box[4].innerHTML=="O"&&box[6].innerHTML=="O"){
      box[2].classList.add("win");
      box[4].classList.add("win");
      box[6].classList.add("win");
      container.classList.add("stop");
        setTimeout(()=>{
          container.classList.add("wrap_WIN");
          stop();
        },1500);
      }
      else if(box[0].innerHTML=="X"&&box[4].innerHTML=="X"&&box[8].innerHTML=="X"||box[0].innerHTML=="O"&&box[4].innerHTML=="O"&&box[8].innerHTML=="O"){
        box[0].classList.add("win");
        box[4].classList.add("win");
        box[8].classList.add("win");
        container.classList.add("stop");
        setTimeout(()=>{
          container.classList.add("wrap_WIN");
          stop();
        },1500);
      }else{
        if(box[0].innerHTML!==""&&box[1].innerHTML!==""&&box[2].innerHTML!==""&&box[3].innerHTML!==""&&box[4].innerHTML!==""&&box[5].innerHTML!==""&&box[6].innerHTML!==""&&box[7].innerHTML!==""&&box[8].innerHTML!==""){
          box.forEach((e)=>{
            e.classList.add("lose");
          })
          container.classList.add("stop");
        setTimeout(()=>{
          container.classList.add("wrap_DRAW");
          stop();
        },1500);
        }
      }
},0)




