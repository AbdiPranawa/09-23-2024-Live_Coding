// document.querySelector("button").addEventListener("click", () => handleClick("hai"));

// function handleClick(greet) {
//   alert("hello " + greet);
// }

// handleClick();

let totalButton = document.querySelectorAll("button").length;
for (let i = 0; i < totalButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    // alert("hallo fsw 2 dari index ke " + i);

    // let audio = new Audio("sounds/tom-1.mp3");
    // audio.play();

    switch (i) {
      case 0:
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case 1:
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case 2:
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case 3:
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case 4:
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case 5:
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case 6:
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      default:
    }
  });
}
