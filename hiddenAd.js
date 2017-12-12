var ad_list = ['#msg_winw', "#clickbgleft", "#clickbgright", ".ggw-l", ".r-gg", ".tgg", ".bfq-r", ".dnpub", ".i-cp", ".box", ".bfq-l-2"],
    dom_list,
    j,
    i;

for (i = 0; i < ad_list.length; i += 1) {
    dom_list = document.querySelectorAll(ad_list[i]);
    for (j = 0; j < dom_list.length; j += 1) {
        if (dom_list[j]) {
            dom_list[j].style.display = "none";
            dom_list[j].style.visibility = "hidden";
        }
    }
}


(function removeAd() {
    setTimeout(function () {
        var flash = document.querySelector('embed');
        if (flash) {
           var flashvars = flash.getAttribute('flashvars');
           var src = flash.getAttribute('src');
           flashvars = flashvars.split("&")[0];
           flash.setAttribute('src', '');
           flash.setAttribute('flashvars', flashvars);
           flash.setAttribute('src', src);
           
        } else {
          remodeAd();
        }
    }, 1000);
})()

//removeAd();


