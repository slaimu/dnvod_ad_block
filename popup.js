chrome.webRequest.onBeforeRequest.addListener (

    function(details) {
        return {cancel: true};
    },

    {urls:[
        "http://www.dnvod.tv/upload/upload/*",
        "http://www.dnvod.tv/upload/gaming/*",
        "http://static.dnvod.tv/upload/gaming/*"]},
    ["blocking"]
);