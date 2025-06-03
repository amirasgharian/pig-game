let diceButton = document.querySelector("#roll-dice-button") ;
let holdButton = document.querySelector("#hold-button");
let startButton = document.querySelector("#start-button");
let resetButton = document.querySelector("#reset-button") ;
let diceContainer = document.querySelector(".dice-container") ;
let diceImg = document.querySelector(".dice-img") ;
let player1Cscore = document.querySelector("#player1-cscore");
let player2Cscore = document.querySelector("#player2-cscore");
let player1Tscore = document.querySelector("#player1-tscore");
let player2Tscore = document.querySelector("#player2-tscore");
let turn ;
let startGame = false ;
startButton.addEventListener('click',()=>
{
    startGame = true ;
    turn = 1 ;
    changeTurnFunction(turn,startGame);
    startButton.classList.add("hidden");
    resetButton.classList.remove("hidden") ;
}
)
diceButton.addEventListener('click',()=>
{
    if(startGame==true)
    {
        generateDice();
        currentscore();
    }
});
holdButton.addEventListener('click',()=>
{
    if(turn==1)
    {
        player1Tscore.textContent = Number(player1Tscore.textContent) + Number(player1Cscore.textContent) ;
        player1Cscore.textContent = 0 ;
        if(Number(player1Tscore.textContent) >= 20)
        {
            startGame = false ;
            document.querySelectorAll(".msg")[0].classList.remove("hidden") ;      
        }
        turn = 2 ;
        changeTurnFunction(turn,startGame);
    }
    else if(turn ==2)
    {
        player2Tscore.textContent = Number(player2Tscore.textContent) + Number(player2Cscore.textContent) ;
        player2Cscore.textContent = 0 ;
        if(Number(player2Tscore.textContent) >= 20)
        {
            startGame = false ;
            document.querySelectorAll(".msg")[1].classList.remove("hidden") ;      
        }
        turn = 1 ;
        changeTurnFunction(turn ,startGame);
    }
                setTimeout(()=>
            {
                diceImg.classList.add("hidden");
                diceContainer.classList.add("hidden");
            } 
            ,100)
});
resetButton.addEventListener('click',()=>
{
    startGame = false ;
    player1Tscore.textContent = 0 ;
    player1Cscore.textContent = 0 ;
    player2Tscore.textContent = 0 ;
    player2Cscore.textContent = 0 ;
    resetButton.classList.add("hidden") ;  
    startButton.classList.remove("hidden") ;
    document.querySelector(".player2").classList.remove("change-turn");
    document.querySelector(".player1").classList.remove("change-turn");  
    document.querySelectorAll(".msg")[0].classList.add("hidden") ;  
    document.querySelectorAll(".msg")[1].classList.add("hidden") ;  

})
function generateDice()
{
    dice = Math.floor(Math.random() * (6 - 1 + 1)) + 1 ;
    diceImg.classList.remove("hidden");
    diceContainer.classList.remove("hidden");
    diceImg.src = `./pics/dice-${dice}.png`;
    if(dice == 1)
        {
            setTimeout(()=>
            {
                diceImg.classList.add("hidden");
                diceContainer.classList.add("hidden");
            }
            ,1000)
        }   
}

function currentscore()
{
    if(dice != 1)
    {
        if(turn == 1)
        {
            player1Cscore.textContent = dice + Number(player1Cscore.textContent) ;
        }
        else if(turn == 2)
        {
            player2Cscore.textContent = dice + Number(player2Cscore.textContent) ;
        }
    }
    else if(dice == 1)
    {
        if(turn ==1)
        {
            player1Cscore.textContent = 0;
            turn = 2;
        }   
        else if(turn ==2)
        {
            player2Cscore.textContent = 0;
            turn = 1 ;
        }
        changeTurnFunction(turn,startGame);
    }
}

function changeTurnFunction(turn,startGame)
{
    
   if(turn==1 && startGame)
    {
       document.querySelector(".player1").classList.add("change-turn") ;    
       document.querySelector(".player2").classList.remove("change-turn");
    }
    else if(turn ==2 && startGame)
    {
        document.querySelector(".player2").classList.add("change-turn") ;  
        document.querySelector(".player1").classList.remove("change-turn");  
    } 
}
