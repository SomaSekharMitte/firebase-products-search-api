# products-search-api

Products Search REST API Using Node JS and MongoDB

URL: https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/{pageNumber}/{pageSize}

Product Search API endpoint returns a list of products information and is also capable of providing different search and filter conditions applied to filter down the search restuls. These filter conditions are passed as query parameters. Below are allowed query parameters to the endpoint.

- search
- minPrice
- maxPrice
- minReviewRating
- maxReviewRating
- minReviewCount
- maxReviewCount
- inStock

Examples: 

-  https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/1/3?search=mount&inStock=true
-  https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/2/5?inStock=true&minReviewRating=4
-  https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/1/10?minPrice=500&maxPrice=2000&inStock=true&minReviewCount=2

Tech Stack

- Node JS and Express
- MongoDB Atlas Cloud
- Firebase Cloud - Hosting & Storage
