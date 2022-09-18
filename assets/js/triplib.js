function writeAddressLink(subject) {
    let elem = document.getElementById("addressLink");
    var name = "triplogs";
    var domain = "tr" + "oy" + "f" + "arr" + "e" + "ll." + "c" + "om";
  
    if(elem){
        elem.innerHTML = '<a href=\"ma' + 'il' + 'to:' + name + '@' + domain + '\?subject=Algonquin Trip Log">email<' + '/a>';
    }
}

//populate link on triplog
$(document).ready(writeAddressLink);

// add helper for triplogs
$(document).ready(function () {
    $(".fancybox").fancybox({
        helpers: {
            title: { type: 'inside' }
        }
    });
});

//setup onlick events for inline links that open gallery images on 2008 triplog
$('a[data-id]').click(function () {
    $('#pic' + $(this).attr('data-id')).click(); return false;
});
