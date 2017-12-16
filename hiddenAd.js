var ad_list = ['#msg_winw', "#clickbgleft", "#clickbgright", ".ggw-l", ".r-gg", ".tgg", ".bfq-r", ".dnpub", ".box", ".bfq-l-2", ".i-cp3", "#msg_content", ".i-cp sc"],
    dom_list,
    j,
    i;



for (i = 0; i < ad_list.length; i += 1) {
    dom_list = document.querySelectorAll(ad_list[i]);
    for (j = 0; j < dom_list.length; j += 1) {
        if (dom_list[j]) {
	    dom_list[j].style.width = "0px";
	    dom_list[j].style.display = "none";
        }
    }
}

(function removeAd(count) {
    if (count >3) {
	return;
    }
    var flash = document.querySelector('embed');
    if (flash) {
	var flashvars = flash.getAttribute('flashvars');
	var src = flash.getAttribute('src');
	flashvars = flashvars.split("&")[0];
	flash.setAttribute('src', '');
	flash.setAttribute('flashvars', flashvars);
	flash.setAttribute('src', src);
    } else {
	console.log('try again:' +  count);
	setTimeout( ()=> {removeAd(++count)}, 1000)}
})(0);


