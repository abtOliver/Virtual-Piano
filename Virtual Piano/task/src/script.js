document.addEventListener("keypress", function (e) {
    function play(key) {
        let aSound = new Audio("resources/" + key + ".mp3");
        aSound.play();
    }

    switch (e.code) {
        case "KeyA":
        case "KeyS":
        case "KeyD":
        case "KeyF":
        case "KeyG":
        case "KeyH":
        case "KeyJ":
            play(e.key.toUpperCase());
            console.log("The '" + e.key.toUpperCase() + "' key is pressed.");
            break
        default:
            console.log("Unbound key '" + e.key.toUpperCase() + "' is pressed.");
    }
});