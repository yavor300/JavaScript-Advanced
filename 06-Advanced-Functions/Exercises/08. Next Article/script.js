function getArticleGenerator(articles) {
    
    return showNext;

    function showNext() {
        if (articles.length !== 0) {
            const articleToShow = articles.shift();
            const articleElement = document.createElement('article');
            articleElement.textContent = articleToShow;
            document.querySelector('#content').appendChild(articleElement);
        }
    }
}