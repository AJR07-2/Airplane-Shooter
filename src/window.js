window.addEventListener('keydown', (event) => {
    if (event.key == "w") {
        currentPlayer.move(true);
    } else if (event.key == "s") {
        currentPlayer.move(false);
    }
})