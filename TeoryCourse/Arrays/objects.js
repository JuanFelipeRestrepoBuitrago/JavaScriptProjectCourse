var articles = [
    {
        name: 'Bici',
        price: 3000
    },
    {
        name: 'TV',
        price: 2500
    },
    {
        name: 'Book',
        price: 320
    },
    {
        name: 'Phone',
        price: 10000
    },
    {
        name: 'Laptop',
        price: 20000
    },
    {
        name: 'Keyboard',
        price: 500
    },
    {
        name: 'Headphones',
        price: 1700
    }
]; 

// Filter
var filterArticles = articles.filter(function(article){
    return article.price <= 500;
});

console.log(filterArticles);

// Map
var mapArticles = articles.map(function(article){
    return article.name;
});

console.log(mapArticles);

// Find
var findArticle = articles.find(function(article){
    return article.name === 'Laptop';
});

console.log(findArticle);

// ForEach
articles.forEach(function(article){
    console.log(article.name);
});

// Some
var cheapArticles = articles.some(function(article){
    return article.price <= 700;
});

console.log(cheapArticles);