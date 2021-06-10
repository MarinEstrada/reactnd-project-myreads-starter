This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Built by forking Udacity's pre-existing css files and API(https://github.com/udacity/reactnd-project-myreads-starter)

## How to run this My Reads project locally

This project can be locally on "localhost:3000/" using
* npm (Node Package Manager)
* Docker

### Using npm
* install all project dependencies with:
`npm install`
* start the development server with:
`npm start`

### Using Docker
To start the app locally run:
`docker-compose up -d`

To download extra needed dependencies run:
`bash add_dependencies.sh {dependency_name}`

To take a look at the logs:
`docker-compose logs -f`

To tear the containers down
`docker-compose down`


# MyReads Project
This web app is designed to act as your own personal book case! Search for books, and add them to your list of "Read", "Want to Read", and "Currently Reading" books!

## What You're Getting
```bash
├── add_dependancies.sh # Bash file to be able to install new dependancies if you decide to run MyReads using Docker
├── README.md # This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms that can be used in the app.
├── package-lock.json
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
│── src
│   ├── App.js # This is the root of the app. Stores books currently on MyReads and contains logic to change/remove books from shelves. Provides routing to "./" & "./search"
│   ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
│   ├── Books.js # Renders individual books
│   ├── BookCase.js # Renders main page "./"
│   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
│   ├── css
│   │   ├── App.css # Styles for your app. Edit to change appearance of webpage
│   │   └── index.css # Global styles.
│   ├── icons # Helpful images for your app. Use at your discretion.
│   │   ├── add.svg
│   │   ├── arrow-back.svg
│   │   └── arrow-drop-down.svg
│   ├── index.js # Used for DOM rendering only.
│   ├── Search.js # Renders search page "./search". Contains search logic and prepares search results for presentation in shelves
│   └── Shelf.js # Renders individual shelves
└── yarn.lock
```


## Backend Server provided by Udacity

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

