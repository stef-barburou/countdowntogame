
$( document ).ready(function() {
    //set original game date (june 1st)
    const origin = new Date("06/01/2023");
    const today = new Date();
    //results div
    const $result=$("#content_target");
    //get the difference in absolute time, then transfer to days.
    let diffTime = today.getTime() - origin.getTime();
    let diffDays = Math.round(diffTime / (1000 * 3600 * 24));
    let daysRemain=diffDays%14;
    
    if(daysRemain!==0){
        $result.html(daysRemain+" dodos avant la game");

    }else{
        let target=new Date(today.getFullYear(), today.getMonth(), today.getUTCDate (), 19,0,0)
        let hours = 19-today.getHours();
        
        
        let x = setInterval(function() {
            let now = new Date();
            diffTime = target.getTime() - now.getTime();
            
            let hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
            $("#content_target").html(hours+" heures "+minutes+" minutes et "+seconds+" secondes"); 

        }, 10);
    }
});

function displayTime(){

}