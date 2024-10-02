# E-commerce Backend

## Description

This is a backend application for an E-commerce platform built with Node.js, Express, and PostgreSQL. It allows for the management of products, categories, and tags, providing a RESTful API for interaction with the front end.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Seeding the Database](#seeding-the-database)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update, and delete (CRUD) operations for categories, products, and tags.
- Sequelize ORM for database interactions.
- Environment variable management using dotenv.
- API endpoints for seamless integration with a front-end application.

## Technologies

- Node.js
- Express.js
- PostgreSQL
- Sequelize
- dotenv
- Postman/Insomnia for API testing

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/e-commerce-backend.git
   cd e-commerce-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up your environment variables**:
   - Create a `.env` file in the root directory and add the following:
     ```plaintext
     DB_NAME=ecommerce_db
     DB_USER=your_username
     DB_PASSWORD=your_password
     ```

4. **Create the PostgreSQL database**:
   ```bash
   createdb ecommerce_db
   ```

## Usage

1. **Start the server**:
   ```bash
   node server.js
   ```
   The server will run on `http://localhost:3001`.

2. **Use Postman/Insomnia to test the API endpoints.**

## API Endpoints

### Categories
- **GET /api/categories**: Retrieve all categories.
- **GET /api/categories/:id**: Retrieve a single category by ID.
- **POST /api/categories**: Create a new category.
- **PUT /api/categories/:id**: Update a category by ID.
- **DELETE /api/categories/:id**: Delete a category by ID.

### Products
- **GET /api/products**: Retrieve all products.
- **GET /api/products/:id**: Retrieve a single product by ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update a product by ID.
- **DELETE /api/products/:id**: Delete a product by ID.

### Tags
- **GET /api/tags**: Retrieve all tags.
- **GET /api/tags/:id**: Retrieve a single tag by ID.
- **POST /api/tags**: Create a new tag.
- **PUT /api/tags/:id**: Update a tag by ID.
- **DELETE /api/tags/:id**: Delete a tag by ID.

## Database Schema

The database consists of the following tables:

- **Categories**: Stores product categories.
- **Products**: Stores product information.
- **Tags**: Stores tags for products.
- **ProductTags**: A junction table that associates products with tags.

Refer to the `schema.sql` file for the full schema details.

## Seeding the Database

To populate the database with initial data, run the following commands:
```bash
node seeds/category-seeds.js
node seeds/product-seeds.js
node seeds/tag-seeds.js
node seeds/product-tag-seeds.js
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

 ## video link
 
