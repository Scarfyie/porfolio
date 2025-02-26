// document.addEventListener("DOMContentLoaded", function () {
//     let nav = document.getElementById("nav-main");
//     let about = document.getElementById("about");
//     let experience = document.getElementById("experience");

//     window.addEventListener("scroll", function () {
//         if (window.scrollY >= about.offsetHeight) {
//             nav.classList.add("sticky");
//             nav.style.bottom = "unset";
//         } else {
//             nav.classList.remove("sticky");
//             nav.style.bottom = "0";
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    let nav = document.getElementById("nav-main");
    let about = document.getElementById("about");
    let sections = document.querySelectorAll("section");

    // Smooth scrolling when clicking nav links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Change navbar position based on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY >= about.offsetHeight) {
            nav.classList.add("sticky");
            nav.style.bottom = "unset";
        } else {
            nav.classList.remove("sticky");
            nav.style.bottom = "0";
        }
    });
});
