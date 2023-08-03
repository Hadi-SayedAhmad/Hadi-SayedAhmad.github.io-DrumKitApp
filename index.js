var myBtn = document.querySelectorAll(".drum");
for (let index = 0; index < myBtn.length; index++) {
    myBtn[index].addEventListener("click", getHTML);
}

function getHTML()
{
    var letter = this.innerHTML;
    makeSound(letter);
    buttonAnimation(letter);
}


document.addEventListener("keydown", function(event){
    makeSound(event.key); // getting value of key pressed and sending it to the makeSound function
    buttonAnimation(event.key);
})

function makeSound(letter) {
    switch (letter) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'j':
            var snareSound = new Audio('sounds/snare.mp3');
            snareSound.play();
            break;

        case 'k':
            var crashSound = new Audio('sounds/crash.mp3');
            crashSound.play();
            break;

        case 'l':
            var kickSound = new Audio('sounds/kick-bass.mp3');
            kickSound.play();
            break;
         
        default: 
            console.log(letter);   
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    /* after some delay we need to remove the class we just added */
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}