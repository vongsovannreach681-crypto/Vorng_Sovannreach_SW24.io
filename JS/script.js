var intervalId=null;
var isRunnig=false;
function GenerateNumber(){
    if(!isRunnig){
        //start loop
        
        intervalId=setInterval(()=>{
            for (let i =1 ; i<=5;i++){           
            var random=Math.floor(Math.random()*100) ;
            document.getElementById("n"+i).innerHTML=random;
        }
        },80)
        document.getElementById("btn").innerHTML="Stop";
        isRunnig = true;
    }else{
        //stop loop
        clearInterval(intervalId);
        document.getElementById("btn").innerHTML="Start";
        isRunnig = false;
    } 
}
