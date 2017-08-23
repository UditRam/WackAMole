var score;
var playing = false;
var timeremaining;
var popuptime;
var totaltime;
var action;
$(document).ready(function(){
    $("#start").click(function(){
        if(playing == true){
            location.reload();
        }
        else{
            score = 0;
            counter = 0;
            popuptime = 3000; //time interval for number refresh
            totaltime = 60; //total play time
            timeremaining = totaltime;
            $("#start").hide();
            $("#reset").show();
             startcountdown();
            setNumbers();
            var interval = setInterval(function(){
                if(counter< ((totaltime*1000)/popuptime)-1){
                    $("#scorevalue").html(score);
                    setNumbers();   
                    counter++;
                }
                else{
                    clearInterval(interval);
                    clearBoxes();
                    $("#gameover").show().html("<h2>Game Over</h2><br><h4>Your score is "+score+"</h4>");
                }
            },popuptime);
        }
    }) ;

    $("#reset").click(function(){
        location.reload();
    });
    
    $("#container div").click(function(){        
        var index = $("#container div").index(this);
        if(index>=0 && index<=7)
        {
            addingScore(index+1);
        }
        else if(index>=9 && index<=16 )
        {
            addingScore(index);
        }
    });    
});

function addingScore(indx){
            console.log(indx);
            var ns = $("#box"+(indx)).html();
            if(ns != ""){
                score = score + parseInt(ns,10);
            }            
            $("#scorevalue").html(score);
            $("#box"+indx).html("");
            console.log(score);
}

function startcountdown(){  //start countdown and show game over
    action = setInterval(function(){
        timeremaining -= 1;
        $("#timeremaining").html(timeremaining);
        if(timeremaining==0){
            stopcountdown();
        }
    },1000)
}
//stop counter
function stopcountdown(){
    clearInterval(action);
}

function setNumbers(){
    clearBoxes();
    var randbox = Math.round(12*Math.random()) + 4;
    var arr=[];
    for(var i=0; i<randbox; i++){
        var f = false;
        while(f==false)
        {
            var pos = Math.round(15*Math.random())+1;
            if(arr.indexOf(pos) == -1){
                arr.push(pos);
                var randnum = Math.round(18*Math.random()) - 9;
                $("#box"+pos).html(randnum);
                f=true;
            }
            else{
                f=false;
            }
        }
    }
}

function clearBoxes(){
    for(var i=1; i<=16 ; i++){
        $("#box"+i).html("");
    }
}



