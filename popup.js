
chrome.webRequest.onBeforeRequest.addListener (

    function(details) {
        return {cancel: true};
    },

    {urls:[
        "http://public.dnvod.tv/upload/public/*",
        "http://public.dnvod.tv/upload/user/*",
        "http://static.dnvod.tv/upload/2016/*", 
        "http://www.dnvod.tv/upload/mycontent/*",
        "http://www.dnvod.tv/upload/gaming/*",
        "http://static.dnvod.tv/upload/gaming/*",


        "http://s1-a1.dnvod.tv/*",
        "http://s1-a2.dnvod.tv/*",
        "http://s1-a3.dnvod.tv/*",
        "http://s1-a4.dnvod.tv/*",
        "http://s1-a5.dnvod.tv/*",
        "http://s1-a6.dnvod.tv/*",
        "http://s1-a7.dnvod.tv/*",
        "http://s1-a8.dnvod.tv/*",
        "http://s1-a9.dnvod.tv/*",]},
    ["blocking"]
);

