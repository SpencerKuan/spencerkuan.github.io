



function initTyping (selector, phrases, start = "", end = "") {
    const delay = 10;
    const elem = document.querySelector(selector);

    var textIndex = 0, charIndex = 0, dir = 1;

    window.setInterval((t) => {
        let text = phrases[textIndex];
        let len = text.length;

        charIndex += dir;

        dir = charIndex <= 0 ? ((textIndex = (textIndex + 1) % phrases.length), -dir) : dir;
        dir = charIndex >= len + delay ? -dir : dir;

        var newText = start + text.slice(0, charIndex) + "|" + end;
        elem.innerText !== newText && (elem.innerText = newText);
    }, 100);
}

window.addEventListener("load", () => {
    initTyping(
        ".type",
        [
            "World",
            "Andrew",
            "Roberto",
            "Elizabeth",
            "Ronaldo",
            "Smragadina",
            "Sabastian",
            "Guinevere",
            "Bug",
            "Annalucia",
            "Bartholomew",
            "Emmanuel",
            "Guillermo",
            "Archibald",
            

        ].map(a => ` ${a}.`),
        "Hello,",
    );

    initTyping("#I_cant",
        [
            "JavaScript",
            "GLSL",
            "HTML",
            "CSS",
            "Python",
            "API",
            "AI",
            "ray-march",
            "maths",
            "simulation",
            "rasterize",
            "website",
            "game design",
            "3D",
            "write any more of these"
        ].map(a => ` ${a}.`),
        "I can't"
    );
});