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
}
SetLastPage()


function NextPage() {
	if (localStorage.LastPage == 1) {
		Page.src = "images/p2.png";
		localStorage.LastPage = 2
	}
}
function PrevPage() {
	if (localStorage.LastPage == 2) {
		Page.src = "images/p1.png";
		localStorage.LastPage	 = 1
	}
}