b=document.getElementById("AddBall");
var browser = document.getElementById("browserWindow");
var ballCount=0;
var flagVertical=new Array();
var flagHorizontal=new Array();


window.onload=function()
{
    setInterval(bounceBall,40);
}


b.onclick = function()
{
        var ball=new ballObject();
}


var ballObject = function()
{
        this.x=Math.floor((Math.random()*100)+1);
        this.y=Math.floor((Math.random()*100)+1);

        flagVertical[ballCount]=0;
        flagHorizontal[ballCount]=0        
        
        this.createBall= createBall.call(this);
}

function createBall()
{
        var ballDiv = document.createElement("div")

        ballDiv.id = "ball"+ballCount;
        ballCount++;
        
        ballDiv.style.backgroundImage = 'url(ball.png)';               
        ballDiv.style.width="47px";
        ballDiv.style.height="50px";
        ballDiv.style.borderRadius="50%";
        ballDiv.style.position = "absolute";
        

        ballDiv.style.left = this.x+"px";
        ballDiv.style.top = this.y+"px";

        browser.appendChild(ballDiv);

}

function bounceBall()
{
        for(var i =0; i < ballCount;i++)
        {
            var ballId = "ball"+i;

            var currentBall = document.getElementById(ballId);
            for(var j=0;j<=ballCount;j++)
            var e = currentBall.style;
            e.position = "absolute";

            var x = parseInt(currentBall.style.left,10);
            var y = parseInt(currentBall.style.top,10);

            if (flagVertical[i]==0)
                x=x+5;
            else
                x=x-5;   


            if(flagHorizontal[i]==0)
                y=y+4;
            else
                y=y-4;
            
            if(x>(window.innerWidth-55))
                flagVertical[i]=1;
            if(x<0)
                flagVertical[i]=0;

            if(y>(window.innerHeight-55))
                flagHorizontal[i]=1;
            if(y<0)
                flagHorizontal[i]=0;


            currentBall.style.left = (x)+"px";
            currentBall.style.top = (y)+"px";
        }
}


