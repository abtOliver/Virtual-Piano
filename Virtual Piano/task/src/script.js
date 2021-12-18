document.addEventListener("keypress", function (e) {
    switch (e.code) {
        case "KeyA":
        case "KeyS":
        case "KeyD":
        case "KeyF":
        case "KeyG":
        case "KeyH":
        case "KeyJ":
            console.log("The '" + e.key.toUpperCase() + "' key is pressed.");
            break
        default:
            console.log("Unbound key '" + e.key.toUpperCase() + "' is pressed.");
    }
});