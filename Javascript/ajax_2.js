function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            json = this.responseText;
            data = JSON.parse(json);
            matches = data.data;
            var ul = document.querySelector("#data");
            matches.forEach(function(obj) {
                var li = document.createElement("li");
                var h3 = document.createElement("h3");
                var span = document.createElement("span");
                h3.innerHTML = obj.name;
                span.innerHTML = obj.date;
                li.appendChild(h3);
                li.appendChild(span);
                ul.appendChild(li);
            })
        }
    }
    xhttp.open('get', 'data.json');
    xhttp.send();
}