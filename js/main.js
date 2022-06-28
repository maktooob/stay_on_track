const startBtnEl = document.getElementById("start-btn")
// create Board
const gridBoard = document.createElement("div")
const gameEl = document.getElementById("game")
        gridBoard.id = "board"
        console.log(gameEl)
        document.body.appendChild(gridBoard)
const counterEL = document.getElementById("counter")
const gameOverEl = document.getElementById("game-over")
const winnerEl = document.getElementById("winner")
const gameOverBtn = document.getElementById("game-over-btn")
const winnerBtn = document.getElementById("winner-btn")



class Game {
    constructor (){
        console.log("constructor active")
        this.tiles = []
        this.player = null  
    }
    onLoad(){
        this.player = new Player()
        
        this.player.createPlayer()
        this.createBoard()
    }
    onReload(){
       
        this.player = new Player()
        this.player.createPlayer()
    }
    movePlayer(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft") {
                this.player.moveLeft()
                if( !this.tiles[this.player.playerPos[0]][this.player.playerPos[1]].className.includes("tomato") ) 
                
                gameOverEl.style.display = "flex"
                
                else if (this.player.playerPos[0] === 6 && this.player.playerPos[1] === 9) 
                winnerEl.style.display = "flex"
            }
            else if (event.key === "ArrowRight") {
                this.player.moveRight()
                if( !this.tiles[this.player.playerPos[0]][this.player.playerPos[1]].className.includes("tomato") ) 
                
                gameOverEl.style.display = "flex"
                
                else if (this.player.playerPos[0] === 6 && this.player.playerPos[1] === 9) 
                winnerEl.style.display = "flex"
                }
            else if (event.key === "ArrowDown") {
                this.player.moveDown()
                if( !this.tiles[this.player.playerPos[0]][this.player.playerPos[1]].className.includes("tomato") ) 
                gameOverEl.style.display = "flex"
                
                else if (this.player.playerPos[0] === 6 && this.player.playerPos[1] === 9) 
                winnerEl.style.display = "flex"
            }
            else if ( event.key === "ArrowUp") {
                this.player.moveUp()
                if( !this.tiles[this.player.playerPos[0]][this.player.playerPos[1]].className.includes("tomato") ) 
                gameOverEl.style.display = "flex"
                
                else if (this.player.playerPos[0] === 6 && this.player.playerPos[1] === 9) 
                winnerEl.style.display = "flex"
            } 
        })
    }

    createBoard(){
        for (let i = 0; i < 8; i++){
            this.tiles[i]=[] 
            for (let j = 0; j < 10; j++)
                {
                    const newTile = document.createElement("div")
                    newTile.className = "newTiles" 
                    gridBoard.appendChild(newTile)
                    this.tiles[i].push(newTile)
            }
        }console.log(this.tiles)
    }
    start(){
        
    startBtnEl.addEventListener("click", ()=>{
        game.onReload()
        counterEL.innerHTML="6";
        const intId= setInterval(callback, 1000)
        function callback(){
            if (counterEL.innerHTML > 0){
                counterEL.innerHTML--
            }
            else {
                clearInterval(intId)
                game.movePlayer()
                counterEL.innerHTML = "Good Luck!"
                const pathTiles= document.getElementsByClassName("tomato")
                for (let i = 0; i < pathTiles.length; i++){
                    pathTiles[i].style.backgroundColor ="white"
                }
            }
            console.log(counter) // show counter
            
        }

        this.tiles[0][0].classList.add("tomato")
        this.tiles[0][1].classList.add("tomato")
        this.tiles[1][1].classList.add("tomato")
        this.tiles[1][2].classList.add("tomato")
        this.tiles[2][2].classList.add("tomato")
        this.tiles[3][2].classList.add("tomato")
        this.tiles[3][3].classList.add("tomato")
        this.tiles[3][4].classList.add("tomato")
        this.tiles[3][5].classList.add("tomato")
        this.tiles[4][5].classList.add("tomato")
        this.tiles[4][6].classList.add("tomato")
        this.tiles[5][6].classList.add("tomato")
        this.tiles[5][7].classList.add("tomato")
        this.tiles[5][8].classList.add("tomato")
        this.tiles[6][8].classList.add("tomato")
        this.tiles[6][9].classList.add("tomato")
       })
    }
}



class Player {
    constructor (){
        this.playerPos = [0,0]
        this.positionX = 16;
        this.positionY = 16;
        this.player = this.createPlayer()
         
       
    }
    moveUp(){
        if (this.positionY > 16){
        this.positionY -= 29
        this.player.style.top = this.positionY +"px"
        this.playerPos[0] -= 1
        console.log(this.playerPos)
        }
    }
    moveDown(){
        if (this.positionY < 218) {
        this.positionY += 29
        this.player.style.top = this.positionY + "px"
        this.playerPos[0]+=1
        console.log(this.positionY)
        console.log(this.playerPos)
        }
    }
    moveRight(){
        
        if (this.positionX < 412){
        this.positionX += 44
        this.player.style.left = this.positionX + "px"
        this.playerPos[1]+=1
        console.log(this.playerPos)
        }
    } 
    moveLeft(){
        if (this.positionX > 16) {
        this.positionX -= 44
        this.player.style.left = this.positionX + "px"
        this.playerPos[1]-=1
        console.log(this.playerPos)
        }
    }
    createPlayer(){
        const playerTile = document.createElement("div")
        playerTile.id = "player"
        gridBoard.appendChild(playerTile)
        console.log("wuff") 
        return playerTile
    }
}

const game = new Game()

game.onLoad()
game.start()


