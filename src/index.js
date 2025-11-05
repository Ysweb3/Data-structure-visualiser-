import "./styles.css";

const canvas = document.getElementById("viz");

const ctx = canvas.getContext("2d");

if (!ctx){
    console.log("NULL")
}
else{
    console.log(ctx);
}
ctx.fillStyle = "black";
let x=20,y=30,h=60,w=100;
let gap = 120;
for(let i = 0;i<4;i++){
    ctx.fillRect(x,y,w,h); 
    x=x+gap;
    console.log(x,y)
}
