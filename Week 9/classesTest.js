class Game {
  /**
   * Sets up the game
   * @param {string} player1Name The name of player 1
   * @param {string} player2Name The name of player 2
   */
  constructor(player1Name = "pl1", player2Name = "pl2") {
    this.theEnd = false;

    this.player1 = {
      name: player1Name,
      health: 100,
    };

    this.player2 = {
      name: player2Name,
      health: 100,
    };
  }

  /**
   * Starts the game and logs out the status of players
   */
  start() {
    this.reset();
    while (!this.theEnd) {
      this.pl1AttackPl2();
      this.pl2Heal();
      this.pl2AttackPl1();
      this.pl1Heal();
      this.playerStatus();
      this.checkTheEnd();
    }
    this.declareWinner();
  }

  /**
   * Console log the winner of the battle
   */
  declareWinner() {
    if (this.player1.health <= 0) {
      console.log("player two wins");
    } else if (this.player2.health <= 0) {
      console.log("player one wins");
    }
  }

  /**
   * If player 1 or player 2 health is below 0
   * Mark theEnd true, to stop the game
   */
  checkTheEnd() {
    if (this.player1.health <= 0 || this.player2.health <= 0) {
      this.theEnd = true;
    } else {
      this.theEnd = false;
    }
  }

  /**
   * Console log the name and health of both players
   * Ex: Player 1: 100 | Player 2: 50
   */
  playerStatus() {
    console.log(`Player One has ${this.player1.health} remaining`);
    console.log(`Player two has ${this.player2.health} remaining`);
  }

  /**
   * Reset health of player 1 and player 2 to 100
   * Reset theEnd to false
   */
  reset() {
    this.player1.health = 100;
    this.player2.health = 100;
    this.theEnd = false;
  }

  /**
   * Generate a random number between 1 and 10 using Math.random()
   * Use that number to decrease health from player 2
   */
  pl1AttackPl2() {
    const attack = Math.floor(Math.random() * 10);
    this.player2.health -= attack;
    console.log(`player one attacked for ${attack}`);
    return this.player2.health;
  }

  /**
   * Generate a random number between 1 and 10 using Math.random()
   * Use that number to decrease health from player 1
   */
  pl2AttackPl1() {
    const attack = Math.floor(Math.random() * 10);
    this.player1.health -= attack;
    console.log(`player two attacked for ${attack}`);
    return this.player1.health;
  }

  /**
   * Generate a random number between 1 and 5 using Math.random()
   * Use that number to increase health of player 1
   */
  pl1Heal() {
    const heal = Math.floor(Math.random() * 5);
    this.player1.health += heal;
    console.log(`player one healed for ${heal}`);
    return this.player1.health;
  }

  /**
   * Generate a random number between 1 and 5 using Math.random()
   * Use that number to increase health of player 2
   */
  pl2Heal() {
    const heal = Math.floor(Math.random() * 5);
    this.player2.health += heal;
    console.log(`player two healed for ${heal}`);
    return this.player2.health;
  }
}

// Initialize the class here
// Call the start function of the game

let game = new Game();
game.start();
