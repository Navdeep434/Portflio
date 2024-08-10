document.addEventListener('DOMContentLoaded', function() {
    const text = "Explore my journey in\nSoftware engineering...";
    const typedTextSpan = document.querySelector("#typed-text");
    const cursorSpan = document.querySelector(".cursor");

    let textIndex = 0;
    function type() {
        if (textIndex < text.length) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.innerHTML = text.substring(0, textIndex + 1).replace('\n', '<br>');
            textIndex++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            cursorSpan.classList.remove("typing");
        }
    }

    // Start the typing effect
    setTimeout(type, 1000); // Delay before typing starts
});
