var dadosArquivados = JSON.parse(localStorage.getItem('dados'));
    function getUrlVars(url) {
        var hash;
        var myJson = {};
        var hashes = url.slice(url.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            myJson[hash[0]] = hash[1];
            // If you want to get in native datatypes
            // myJson[hash[0]] = JSON.parse(hash[1]);
        }
        return myJson;
    }
    console.log(getUrlVars(dadosArquivados));

    function setUrlParams2(el) {
        var term = "";
           if (el.href.indexOf('#') == -1) {
                var querystring = location.search
                var querystring_without_int_mark = querystring.split("?", 2)[1]

                var existsUrl = el.href;
                var existsquerystring = existsUrl.split("?", 2)[1]

                // console.log(querystring_without_int_mark, existsquerystring)

                if (existsquerystring === undefined && querystring_without_int_mark !== undefined) {
                    el.href = existsUrl.split("?", 2)[0] + '?' + querystring_without_int_mark + term;
                    return;
                }
                if (existsquerystring !== undefined && querystring_without_int_mark !== undefined) {
                    el.href = existsUrl.split("?", 2)[0] + '?' + existsquerystring + '&' + querystring_without_int_mark + term;
                    return;
                }

                if (querystring_without_int_mark !== undefined) {
                    el.href = existsUrl.split("?", 2)[0] + '?' + existsquerystring + '&' + querystring_without_int_mark + term;
                }
                if (querystring_without_int_mark == undefined && existsquerystring == undefined) {
                    el.href = existsUrl + '?utm_term='+term;
                }
                if (existsquerystring !== undefined) {
                    el.href = existsUrl + term;
                }

                console.log('url: '+existsUrl + term)
            }
        }
        var links = document.querySelectorAll('a');

        links.forEach(setUrlParams2);
