const navlinks = document.querySelectorAll(".nav-link");

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Remove active from li
    navlinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    // Add active to li
    e.target.classList.add("active");
  });
});
