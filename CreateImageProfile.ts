export default class CreateImagePerfil {
  public getImage(initial: string): string {
    //TODO: replace with initials extraction logic.
    let initials = initial;

    let colorCombination = [
      { background: "#000000FF", textColor: "#FFFFFFFF" },
      { background: "#00203FFF", textColor: "#ADEFD1FF" },
      { background: "#606060FF", textColor: "#D6ED17FF" },
      { background: "#D6ED17FF", textColor: "#606060FF" },
      { background: "#101820FF", textColor: "#FEE715FF" },
      { background: "#101820FF", textColor: "#F2AA4CFF" },
      { background: "#603F83FF", textColor: "#C7D3D4FF" },
    ];
    let randomIndex = Math.floor(Math.random() * (6 - 0)) + 0;
    let randomColor = colorCombination[randomIndex].background;

    // Create a rectangular canvas which will become th image.
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    canvas.width = canvas.height = 100;

    if (context != null) {
      // Draw the circle in the background using the randomColor.
      context.fillStyle = randomColor;
      context.beginPath();
      context.ellipse(
        canvas.width / 2,
        canvas.height / 2, // Center x and y.
        canvas.width / 2,
        canvas.height / 2, // Horizontal and vertical "radius".
        0, // Rotation, useless for perfect circle.
        0,
        Math.PI * 2 // from and to angle: Full circle in radians.
      );
      context.fill();

      context.font = "Bolder " + canvas.height / 2 + "px Arial";
      context.fillStyle = colorCombination[randomIndex].textColor;
      // Make the text's center overlap the image's center.
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(initials, canvas.width / 2, canvas.height / 2);
      return canvas.toDataURL();
      // Show the image to the world.
      /*let img = document.createElement("img");
    img.src =
    document.body.appendChild(img);*/
    }
    return "";
  }
}
