var category = 'happiness'
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    var button = document.getElementById('new-quote-button');

    // Add click event listener to the button
    button.addEventListener('click', function() {
        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Configure the request
        xhr.open('GET', 'https://api.api-ninjas.com/v1/quotes?category=' + category);
        xhr.setRequestHeader('X-Api-Key', 'F5VTSm+l5NKN860hZLL8ow==n9Gqpl4oPSlO0hhg');
        xhr.setRequestHeader('Content-Type', 'application/json');

        // Define the success callback function
        xhr.onload = function() {
            if (xhr.status === 200) {
                var result = JSON.parse(xhr.responseText);
                console.log(result[0]);
                var  quote = result[0].quote ;
                var  author = result[0].author ;
                var  category = result[0].category ;
                
                var quoteData = document.getElementById('quote');
                var authorData = document.getElementById('author');
                var categoryData = document.getElementById('category');
                quoteData.innerHTML =  'Quota :' + " " + quote; 
                authorData.innerHTML = "Author :" + " " + author;
                categoryData.innerHTML = 'Category :' + " " + category;
                console.error('Error: ' + xhr.status);
            }
        };

        // Define the error callback function
        xhr.onerror = function() {
            console.error('Request failed');
        };

        // Send the request
        xhr.send();
    });
});
