console.clear();

const box = document.querySelector('["data-js=box"]');
const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js:"input-radius"]');
const inputRotation = document.querySelector('[data-js:"input-rotation"]');

inputColor.addEventListener("input", () => {});


document.body.addEventListener("mousemove", (event) => {
    console.log("event", event);
    document.body.style.background = hsl(${event.clientX}, 50%, 50%);
})

function colorScreen(event) {
    console.log("event", event);
    if (event.clientX > 300) {
        document.body.style.background = hsl(${event.clientX}, 50%, 50%);
    }
}

document.body.addEventListener("mousemove", colorScreen);
document.body.addEventListener("keydown", (event) => {
    console.log("event");
});