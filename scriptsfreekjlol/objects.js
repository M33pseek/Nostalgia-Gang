class Objects {
  constructor() {
  }
  spaceship(x, y, play) {
    this.x = x;
    this.y = y;
    this.play = play; // Store the play object
    this.width = 34;
    this.height = 28;
    this.spaceship_image = [new Image(), new Image(), new Image()];
    this.spaceship_image[0].src = "game/ship.png";
    this.spaceship_image[1].src = "game/Milestone2Noob.png";
    this.spaceship_image[2].src = "game/Milestone3Noob.png";
    return this;
  }
  
  getCurrentCostume() {
    if (this.play.level >= 3) {
      return this.spaceship_image[2];
    } else if (this.play.level === 2) {
      return this.spaceship_image[1];
    } else {
      return this.spaceship_image[0];
    }
  }

  bullet(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  ufo(x, y, row, column, ufo_image) {
    this.x = x;
    this.y = y;
    this.row = row;
    this.column = column;
    this.width = 32;
    this.height = 24;
    this.ufo_image = ufo_image; // Image object
    this.ufo_image.src = "game/ufo.png";
    return this;
  }

  bomb(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  laser(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
}