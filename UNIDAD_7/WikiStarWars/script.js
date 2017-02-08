var xhr;
var url;
var finSel1 = true;
var initSel1 = true;
var response;

onload = function ()
{
    formulario.sel1.onchange = valueSel1;
    formulario.sel2.onchange = valueSel2;
    valueSel0();
}

if (new XMLHttpRequest())
{
    xhr = new XMLHttpRequest();
}
else if (ActiveXObject("Microsoft.XMLHTTP"))
{
    xhr = ActiveXObject("Microsoft.XMLHTTP");
}

function valueSel0()
{
    url = "http://swapi.co/api/";
    xhr.onreadystatechange = data0;
    xhr.open("GET", url, false);
    xhr.send()
}
function data0()
{
    if (xhr.status == 200 && xhr.readyState == 4)
    {
        errores.innerHTML = "";
        var response = "";
        responseJSON = JSON.parse(xhr.responseText);
        formulario.sel1.innerHTML = "";
        response = "<option value=''>Elige una opcion</option>";
        for (var item in responseJSON)
        {
            response += "<option value='" + responseJSON[item] + "'>" + item + "</option>";
        }
        formulario.sel1.innerHTML += response;
    }
    else if (xhr.status != 200 && xhr.readyState != 4)
    {
        errores.innerHTML = "Error " + xhr.status;
        errores.innerHTML += ": " + xhr.statusText;
        errores.innerHTML += "<br>" + xhr.getAllResponseHeaders();
    }
}

function valueSel1()
{
    if (finSel1)
    {
        url = formulario.sel1.value;
    }
    xhr.onreadystatechange = data1;
    xhr.open("GET", url, false);
    xhr.send()
}
function data1()
{
    if (xhr.status == 200 && xhr.readyState == 4)
    {
        errores.innerHTML = "";
        var response = "";
        var responseJSON = JSON.parse(xhr.responseText);
        if (responseJSON.previous == null)
        {
            finSel1 = false;
            initSel1 = true;
        }
        if (initSel1)
        {
            formulario.sel2.innerHTML = "";
            response = "<option value=''>Elige una opcion</option>";
            initSel1 = false;
        }
        for (var item in responseJSON.results)
        {
            var val = responseJSON.results[item];
            if(val.name != null)
            {
                response += "<option value='" + val.url + "'>" + val.name + "</option>";
            }
            else
            {
                response += "<option value='" + val.url + "'>" + val.title + "</option>";
            }
        }
        formulario.sel2.innerHTML += response;
        if(responseJSON.next == null)
        {
            finSel1 = true;
        }
        else
        {
            url = responseJSON.next;
            valueSel1();
        }
    }
    else if (xhr.status != 200 && xhr.readyState != 4)
    {
        errores.innerHTML = "Error " + xhr.status;
        errores.innerHTML += ": " + xhr.statusText;
        errores.innerHTML += "<br>" + xhr.getAllResponseHeaders();
    }
}

function valueSel2()
{
    url = formulario.sel2.value;
    xhr.onreadystatechange = data2;
    xhr.open("GET", url, false);
    xhr.send()
}
function data2()
{
    if (xhr.status == 200 && xhr.readyState == 4)
    {
        errores.innerHTML = "";
        responseJSON = JSON.parse(xhr.responseText);
        for (var prop in responseJSON) {
            if(!(/^http\S*$/.test(responseJSON[prop])))
            {
                result.innerHTML += prop + ":" + responseJSON[prop] + "<br>";
            }
        }
    }
    else if (xhr.status != 200 && xhr.readyState != 4)
    {
        errores.innerHTML = "Error " + xhr.status;
        errores.innerHTML += ": " + xhr.statusText;
        errores.innerHTML += "<br>" + xhr.getAllResponseHeaders();
    }
}