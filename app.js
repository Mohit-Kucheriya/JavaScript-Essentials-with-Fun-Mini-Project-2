window.addEventListener("mousemove", function (details) {
    let rectangle = document.querySelector("#rect");
    // console.log(details.clientX) //To get the exact mouse location on x-axis.
    var xval = gsap.utils.mapRange(
        0,
        window.innerWidth,
        150 + rectangle.getBoundingClientRect().width / 2, //here our half rectangle is going outside screen to get it in we have to firdt make sure that rect is inside the screen and then add +100.
        window.innerWidth - (150 + rectangle.getBoundingClientRect().width / 2),
        details.clientX //here to map our mouse on x-axis
    );
    gsap.to("#rect", {
        left: xval,
        ease: Power3,
    });
});
