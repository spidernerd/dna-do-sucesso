
// Aonde tem "[URL]" é pra altera pelo link que deseja no backRedirect
// Coloque esse script acima do </head>. Entre <script> e </script>
// e acima desse script adicionar o jquery

// <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

var existsUrl_backredirect = document.location.href;
var existsquerystring_backredirect = existsUrl_backredirect.split("?", 2)[1];
console.log(existsUrl_backredirect);

for(
    var r = new Array,
        l, h = window.location.search.substring(1).split("&"),
        a = 0;
    a < h.length;
    a++) {
        var c = h[a].indexOf("=");
        if (0 < c) {
            var u = h[a].substring(0, c),
                d = h[a].substring(c + 1);
            r[u] = d
        }
    }

    var url = location.href;
    history.pushState({
        page: "2"
    }, "page 2", ""), history.pushState({
        page: "1"
    }, "page 1", url), window.onpopstate = function(t) {

        if(existsquerystring_backredirect !== undefined){
            null != t.state && (location.href = "[URL]?utm_content=backredirect");
            location.href = "[URL]?"+existsquerystring_backredirect+"&utm_content=backredirect" // link para redirecionar
        }else{
            null != t.state && (location.href = "[URL]?utm_content=backredirect");
            location.href = "[URL]?utm_content=backredirect" // link para redirecionar
        }
    };
