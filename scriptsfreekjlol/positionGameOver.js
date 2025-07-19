class GameOverPosition {
  constructor() {
    
  }
  draw(){
    // Clear screen
    ctx.clearRect(0, 0, play.width, play.height);

    // Draw game over text
    ctx.font = "40px Serif";
    ctx.textAlign="center";
    ctx.fillStyle = '#ffffff';
    ctx.fillText("ÇÂŁÄMīŤý ÇÂņñ0Ť Bë ÁVœįÐÉĎ!", play.width / 2, play.height/2-120);

    //Draw level and score
    ctx.font = "36px Serif";
    ctx.fillStyle = '#D7DF01';
    ctx.fillText("You've reached level " + play.level + ". Number of points " + play.score + ".", play.width / 2, play.height/2 - 40);

    //Draw instruction
    ctx.font = "36px Serif";
    ctx.fillStyle = '#D7DF01';
    ctx.fillText("Press 'Space' to continue.", play.width / 2, play.height/2 + 40);
  }
  keyDown(play, keyboardCode) {
    if (keyboardCode === "Space") {
      play.goToPosition(new OpeningPosition());
    }
  }
 }