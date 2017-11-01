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
        "http://s1-a1.dnvod.tv/*"]},
    ["blocking"]
);
