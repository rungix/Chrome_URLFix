console.log("Load fix.js");

for (var i = 0; i < document.images.length; i++) {
    document.images[i].src = "https://www.scrapesentry.com/wp-content/uploads/2014/01/stop_hacker_web_bots.jpg";
};


var firstHref = $("a[href^='http']").eq(0).attr("href");
console.log(firstHref);


$('a[href*="google.com"]').attr('href', function(i,href) {
        return href.replace(/^http(s*):\/\/(www\.)*google.com/, 'http$1://google.wall.org');
});

$('a[href*="google.com"]').attr('href', function(i,href) {
        return href.replace(/^http(s*):\/\/(mail\.)*google.com/, 'http$1://mail.google.wall.org');
});


var firstHref = $("a[href^='http']").eq(0).attr("href");
console.log(firstHref);
