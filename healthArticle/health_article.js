// Instantiate XHR object
var xhr = new XMLHttpRequest();
// URL
var url = './health_article.json';

// 'GET': Specifies the HTTP method used for the request (in this case, a GET request).
// URL: Represents the URL from where you will fetch the data.
// True: Indicates if the request is asynchronous (true) or synchronous (false). In this case, 
//       it's set to true for asynchronous operation, allowing other scripts to run while the request is processed.
xhr.open('GET', url, true);

// Inform the object the expected response is JSON
xhr.responseType = 'json';

xhr.onload = function () {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(article => {
        // Article container(div) creation
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        // Article Title
        var title = document.createElement('h2');
        title.textContent = article.title;

        // Article Description
        var description = document.createElement('p');
        description.textContent = article.description;

        // Ways Header
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        // Ways Listing
        var waysList = document.createElement('ul');

        // Loop through the ways
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        // Benefits Listing
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        // Loop through benefits
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
        });
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });
}

xhr.send();