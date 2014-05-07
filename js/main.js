var navlinks = document.getElementsByClassName("navlink");

function navLink() {
    for (var i=0;i<navlinks.length;i++) {
        navlinks[i].addEventListener("click", navChange);
    }
}
function navChange() {
    var page = event.target.dataset.nav;
    document.querySelector(".menu li.active").classList.remove("active");
    event.target.parentElement.classList.add("active");
    document.querySelector("section.select").classList.remove("select");
    document.querySelector("section[data-nav="+page+"]").classList.add("select");
}
document.onreadystatechange = function() {
    if (document.readyState == "complete") {
        navLink();
    }
};