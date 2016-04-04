if (document.baseURI.indexOf("https://www.duolingo.com/skill") == 0 ||
    document.baseURI.indexOf("https://www.duolingo.com/practice") == 0) {
    var elems = document.getElementsByTagName('button');
    for (var i = 0; i < elems.length; i++) {
        var e = elems[i];
        var data_href = e.getAttribute("data-href");
        if (data_href  &&  data_href.endsWith("practice")) {
            var evObj = document.createEvent('Events');
            evObj.initEvent("click", true, false);
            e.dispatchEvent(evObj);
            break;
        }
    }
}
