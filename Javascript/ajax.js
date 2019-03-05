key = '695e07af402f4b119f0703e9b19f4683'
url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-05&sortBy=publishedAt&apiKey=' + key

function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        // console.log(this.readyState, this.status);
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.statusText);
            // console.log(this.responseText);
            json = this.responseText;
            data = JSON.parse(json);
            news = data.articles;
            var ul = document.querySelector("#data");
            news.forEach(function(obj) {
                var li = document.createElement("li");
                var h3 = document.createElement("h3");
                var img = document.createElement("img");
                h3.innerHTML = obj.title;
                img.setAttribute('src', obj.urlToImage);
                li.appendChild(img);
                li.appendChild(h3);
                ul.appendChild(li);
            })
        }
    }
    xhttp.open('get', url);
    xhttp.send();
}