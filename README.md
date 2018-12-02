# news-scraper
An app where a user can retrieve and comment on news articles.

## Goals
This app attempts to achieve the following goals:
* Scrape a news web page for articles using [Cheerio](https://www.npmjs.com/package/cheerio)
* Display the news articles dynamically using [Handlebars](https://www.npmjs.com/package/express-handlebars)
* Allow a user to comment on an article, and store said comments on a MongoDB database using [Mongoose](https://www.npmjs.com/package/mongoose)

## Other technologies used
* For our server code, we will be using [Express](https://www.npmjs.com/package/express)
* For making HTTP requests, we will be using [Axios](https://www.npmjs.com/package/axios)

## Stretch Features
- [ ] User can create an account and comment non-anonymously
- [ ] Other users can comment on comments
- [ ] Users can collect favorite articles for later viewing

