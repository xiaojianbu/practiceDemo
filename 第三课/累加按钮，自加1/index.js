window.onload = function () {
	 var btn = document.getElementsByTagName("button")[0];
	 var temp = 0;
	 btn.addEventListener("click", function () {
	 	  btn.innerHTML = ++temp;
	 	  window.alert(btn.innerHTML);
	 })
}