/*jshint browser: true, devel: true */

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

function formFeedback(elem, message) {
	if (message) {
		elem.previousElementSibling.style.color = "#ff6760";
		elem.previousElementSibling.title = message;
	} else {
		elem.previousElementSibling.style.color = "#616161";
		elem.previousElementSibling.title = "";
	}
}

function formHandler(form, field) {
	var x = form[field].value,
		atpos, dotpos;
	switch (field) {
		case "name":
			if (x === null || x === "") {
				return "Name must be filled out";
			} break;
		case "email":
			atpos = x.indexOf("@");
			dotpos = x.lastIndexOf(".");
			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
				return "Not a valid e-mail address";
			} break;
		case "message":
			if (x===null || x==="" || x.length<=40) {
				return "Message must be at least 40 characters";
			} break;
		default: return true;
	}
}

function validateForm() {
	var x = document.forms["contact"],
		a = [], msg;
	for (var i=0;i<x.length;i++) {
		if (x[i].type !== "submit") {
			msg = formHandler(x, x[i].name);
			formFeedback(x[i], msg);
		}
		if (msg !== undefined) {
			a.push(msg);
			x.lastElementChild.value = a[0];
		} else {
			x.lastElementChild.value = "";
		}
	}
	if (x.lastElementChild.value) {
		x["submit"].setAttribute("disabled", "disabled");
	} else {
		x["submit"].removeAttribute("disabled");
	}
}