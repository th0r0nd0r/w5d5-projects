const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Game {
  constructor() {
    this.stacks = [[1,2,3],[],[]];
  }

  run() {

  }

  validMove(from, to) {
    if (from.length > 0) {


    if (to.length === 0) {
      return true;
    }
  }
  }

  promptMove() {
    console.log(this.stacks);
    let from = null;
    let to = null;
    let game = this;
    reader.question('Pick a stack to move from:\n', function(res){
      from = parseInt(res);

      reader.question('Pick a stack to move to:\n', function(res2){
        to = parseInt(res2);
        reader.close();
        game.stacks[to - 1].push(game.stacks[from - 1].shift());
        console.log(game.stacks);
      });
    });
  }

}

let game = new Game;
game.promptMove();
