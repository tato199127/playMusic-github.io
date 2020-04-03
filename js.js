window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#d564dd",
        "#dd2233",
        "#ccaa33",
        "#ff3322",
        "red",
        "green",
    ];

    //აქ ჩავწეროთ კოდი
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            sounds[index].curentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });

        //შევქმნათ ფუნქცია ბუშტებისთვის
        const createBubbles = (index) => {
            const bubble = document.createElement("div");
            visual.appendChild(bubble);
            bubble.style.backgroundColor = colors[index];
            bubble.style.animation = 'jump is easy';
            bubble.addEventListener('animatinend', function(){
                visual.removeChild(this);
            });
        };
    });
});