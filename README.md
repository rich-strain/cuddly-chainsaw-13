# e-Commerce Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A working example of an Express.js API e-commerce back end that utilizes Sequalize to interact with the PosgresSQL database.

## Table Of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. Install by running `npm i` in the terminal.

2. Access the PostgreSQL terminal-based front-end by running `psql -U postgres`.

3. Enter your PostgreSQL password.

4. Create your database by running `\i db/schema.sql` in the terminal.

5. After the database has been created, run `\q` in the terminal.

6. Seed the database from the terminal by running `npm run seed`

## Usage

### Initialize App From Terminal

```sh
npm start
```

### Product Requests

- `http://localhost:3001/api/products/` GET to View All Products
- `http://localhost:3001/api/products/` POST to Create a New Product
- `http://localhost:3001/api/products/:id` PUT to Update a Product By Id
- `http://localhost:3001/api/products/:id` DELETE to Delete a Product By Id

### Category Requests

- `http://localhost:3001/api/categories/` GET to View All Categories
- `http://localhost:3001/api/categories/` POST to Create a New Category
- `http://localhost:3001/api/categories/:id` PUT to Update a Category By Id
- `http://localhost:3001/api/categories/:id` DELETE to Delete a Category By Id

### Tag Requests

- `http://localhost:3001/api/tags/` GET to View All Tags
- `http://localhost:3001/api/tags/` POST to Create a New Tags
- `http://localhost:3001/api/tags/:id` PUT to Update a Tag By Id
- `http://localhost:3001/api/tags/:id` DELETE to Delete a Tag By Id

### Video Walkthrough

To see the application working from Insomnia please refer to the link below.

[ScreenCast.com](https://www.screencast.com/t/vuMCkTuNSo)

### Screenshot

![Application Screenshot](assets/images/screenshot.png)

## License

This project is licensed under the MIT license.

## Contributing

We welcome contributions from the community to help improve this project. Please refer to the contribution guidelines here.

## Tests

Please run "npm test" if test scripts are defined in the package.json file.

## Questions

- Feel free to contact me on Github [rich-strain](https://github.com/rich-strain) or [richardstrain@gmail.com](mailto:richardstrain@gmail.com)
