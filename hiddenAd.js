var ad_list = ['#msg_winw', "#clickbgleft", "#clickbgright", ".ggw-l", ".r-gg", ".tgg", ".bfq-r"],
    dom_list,
    j,
    i;

for (i = 0; i < ad_list.length; i += 1) {
    dom_list = document.querySelectorAll(ad_list[i]);
    for (j = 0; j < dom_list.length; j += 1) {
        if (dom_list[j]) {
            dom_list[j].style.display = "none";
        }
    }
}

document.querySelector('.bfq-l').style.width='100%';
document.querySelector('embed').style.width="100%";