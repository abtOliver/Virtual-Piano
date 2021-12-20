document.addEventListener("keypress", function (e) {
    function play(key) {
        let aSound = new Audio("resources/" + key + ".mp3");
        aSound.play();
    }

    /* workaround for German keyboard layout */
    let key = e.code === "KeyY"
        ? "y"
        : e.key;

    switch (e.code) {
        case "KeyA":
        case "KeyS":
        case "KeyD":
        case "KeyF":
        case "KeyG":
        case "KeyH":
        case "KeyJ":
        case "KeyW":
        case "KeyE":
        case "KeyT":
        case "KeyY":
        case "KeyU":
            play(key.toUpperCase());
            console.log("The '" + key.toUpperCase() + "' key is pressed.");
            break
        default:
            console.log("Unbound key '" + key.toUpperCase() + "' is pressed.");
    }
});