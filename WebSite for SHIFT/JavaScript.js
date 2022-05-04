var lastResFind = "";
var copy_page = "";
function TrimStr(s) {
    s = s.replace(/^\s+/g, '');
    return s.replace(/\s+$/g, '');
}
function FindOnPage(inputId) {
    var obj = window.document.getElementById(inputId);
    var SearchText;

    if (obj) {
        SearchText = TrimStr(obj.value);
    } else {
        return;
    }
    if (SearchText == "") {
        idTimer = setTimeout(function () { document.getElementById('info').innerHTML = 'Вы ничего не ввели'; }, 50);
        return;
    }

    if (copy_page.length > 0)
        document.body.innerHTML = copy_page;
    else copy_page = document.body.innerHTML;


    document.body.innerHTML = document.body.innerHTML.replace(eval("/name=" + lastResFind + "/gi"), " ");
    document.body.innerHTML = document.body.innerHTML.replace(eval("/" + SearchText + "/gi"), "<a name=" + SearchText + " style='background:red'>" + SearchText + "</a>"); 
    lastResFind = SearchText; 
    window.location = '#' + SearchText;

    var str = copy_page;
    var words = str.split(eval("/" + SearchText + "/gi"));
    var collect = {};
    for (var i = 0; i < words.length; i++) {

        if (!collect[words[i]])
            collect[words[i]] = 0;
        
        collect[words[i]]++;
    }
    var i = i - 1;
    if (i < 1) {
        idTimer = setTimeout(function () { document.getElementById('info').innerHTML = 'Ничего не найдено'; }, 50);
    }
        else {
            idTimer = setTimeout(function () { document.getElementById('info').innerHTML = 'Количествово найденных слов: ' + i; }, 50);
        }
    
}