let Page = document.getElementById("Page")
/* Load */
if (!localStorage.getItem("LastPage")) {
	LastPage = localStorage.setItem("LastPage", 1)
}
var LastPage = localStorage.LastPage
function SetLastPage() {
	if (localStorage.LastPage == 1) {
		Page.src = "images/p1.png";
	}
	if (localStorage.LastPage == 2) {
		Page.src = "images/p2.png";
	}
	if (localStorage.LastPage == 3) {
		Page.src = "images/p3.png";
	}
}
SetLastPage()


function NextPage() {
	if (localStorage.LastPage == 1) {
		Page.src = "images/p2.png";
		localStorage.LastPage = 2
	} else if (localStorage.LastPage == 2) {
		Page.src = "images/p3.png";
		localStorage.LastPage = 3
	}
}
function PrevPage() {
	if (localStorage.LastPage == 2) {
		Page.src = "images/p1.png";
		localStorage.LastPage	 = 1
	}
	if (localStorage.LastPage == 3) {
		Page.src = "images/p2.png";
		localStorage.LastPage = 2
	}
}