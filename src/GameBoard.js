class GameBoard {
    constructor(x, y) {
        // create board with x rows and y columns
        this.gameBoard = Array.from({length : x}, () => new Array(y).fill(0));
    }

    placeShip(x, y) {
        if(!this.isValidateCoordinates(x, y))
            throw Error("A Ship already exist here");

    }

    receiveAttack(x, y) {
        
    }

    isValidateCoordinates(x, y) {
        //if empty cell return true else false
        return this.gameBoard[x][y] == 0
    }
}
