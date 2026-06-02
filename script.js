// HOBBIES
let hobbies = [
    "Playing Cricket",
    "Listening to Music",
    "Watching Movies and Series",
    "Photography",
    "Learning Web Development"
];

// IMAGES
let images = [
    "imgs/I.jpg",
    "imgs/II.jpg",
    "imgs/III.jpg",
    "imgs/IV.jpg",
    "imgs/V.jpg",
    "imgs/VI.jpg",
    "imgs/VII.jpg",
    "imgs/VIII.jpg",
    "imgs/IX.jpg"
];

let currentIndex = 0;

// ELEMENTS
const hobbyList = document.querySelector("#hobby-list");
const hobbyText = document.querySelector("#hobby-text");
const galleryImg = document.querySelector("#gallery-img");
const nextBtn = document.querySelector("#next-btn");

// LOOP HOBBIES
for (let i = 0; i < hobbies.length; i++) {
    let li = document.createElement("li");
    li.textContent = hobbies[i];
    hobbyList.appendChild(li);
}

// INITIAL DISPLAY
hobbyText.textContent = hobbies[currentIndex];
galleryImg.src = images[currentIndex];

// NEXT BUTTON
nextBtn.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex === images.length) {
        currentIndex = 0;
    }

    hobbyText.textContent = hobbies[currentIndex];
    galleryImg.src = images[currentIndex];
});

// DARK / LIGHT MODE
const toggleBtn = document.querySelector("#mode-toggle");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        toggleBtn.textContent = "Switch to Dark Mode 🌙";
    } else {
        toggleBtn.textContent = "Switch to Light Mode ☀️";
    }
});