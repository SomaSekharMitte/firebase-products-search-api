# products-search-api

Products Search REST API Using Node JS and MongoDB

URL: https://mobile-tha-server.firebaseapp.com/{pageNumber}/{pageSize}

Product Search API endpoint returns a list of products information and is also capable of providing different search and filter conditions applied to filter down the search restuls. These filter conditions are passed as query parameters.

Examples: 

-  https://mobile-tha-server.firebaseapp.com/1/3?search=mount&inStock=true
-  https://mobile-tha-server.firebaseapp.com/2/5?inStock=true&reviewRating=4
-  https://mobile-tha-server.firebaseapp.com/1/10?minPrice=500&maxPrice=2000&inStock=true&minReviewCount=2
