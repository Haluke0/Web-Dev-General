let sections = document.getElementsByClassName("section");


function changeSection(index) {
    for (i = 0;i < sections.length; i++) {
        sections[i].classList.remove("selected-section");
    }
    sections[index-1].classList.add("selected-section");
}