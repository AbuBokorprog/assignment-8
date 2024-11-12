# **Library Management System API**

## **Project Name & Description**

**Library Management System API**  
This is a backend API built to manage a library’s operations, allowing library staff and members to handle tasks such as managing books, authors, members, borrowing, and returning activities. It is designed to facilitate book management, member registration, borrowing and returning books, as well as tracking overdue items.

## **Live URL**

- [Live Deployment Link](https://library-management-roan-mu.vercel.app/)

## **Technology Stack & Packages**

This project utilizes the following technologies:

- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Web framework for creating RESTful API routes.
- **Prisma ORM**: Database ORM for managing the PostgreSQL database.
- **PostgreSQL**: Relational database to store library data.
- **TypeScript**: Ensures code quality through static typing.

### **Packages used in the project:**

Here’s the updated **Packages used** section with the versions you've provided. I've replaced the packages list in the README file accordingly:

### **Packages used in the project:**

- **`@prisma/client`**: "^5.22.0" — Database client for interacting with your PostgreSQL database using Prisma ORM.
- **`cookie-parser`**: "^1.4.7" — Middleware for parsing cookies in HTTP requests.
- **`cors`**: "^2.8.5" — Middleware to enable Cross-Origin Resource Sharing (CORS).
- **`dotenv`**: "^16.4.5" — Loads environment variables from a `.env` file into `process.env`.
- **`express`**: "^4.19.2" — Web framework for building RESTful API routes.
- **`http-status`**: "^1.7.4" — Utility to handle HTTP status codes.
- **`prisma`**: "^5.22.0" — Prisma ORM for database migrations and schema management.
- **`ts-node`**: "^10.9.2" — TypeScript execution engine for Node.js.
- **`tsx`**: "^4.19.2" — TypeScript and JSX runtime.
- **`typescript`**: "^5.6.3" — TypeScript compiler for static type checking.
- **`zod`**: "^3.23.8" — TypeScript-first schema validation with a focus on runtime validation.

## **Setup Instructions**

### **Step 1: Clone the Repository**

Run the following command to clone the repository:

```bash
git clone https://github.com/AbuBokorprog/assignment-8
```

### **Step 2: Navigate to the Project Directory**

Change into the project directory:

```bash
cd library-management-system-api
```

### **Step 3: Install Dependencies**

Install the necessary dependencies:

```bash
npm install

OR

yarn install
```

### **Step 4: Set up Environment Variables**

#### **Local PostgreSQL Database Setup**

Create a `.env` file in the root directory and add the following variables:

```env
DATABASE_URL=your_postgresql_database_url
PORT=5000
```

#### **Supabase Database Setup**

If you’re using Supabase, use the following variables in your `.env` file:

```env
# Connect to Supabase via connection pooling with Supavisor
DATABASE_URL="postgresql://your_supabase_connection_string"

# Direct connection to the database for migrations
DIRECT_URL="postgresql://your_direct_connection_string"
ENABLE_PRISMA_CACHING=false
PORT=5000
```

### **Step 5: Update the Prisma Schema**

Edit the `prisma/schema.prisma` file based on your database type:

**For local PostgreSQL database:**

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

**For Supabase setup:**

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

### **Step 6: Run Database Migrations**

Execute Prisma migrations to set up the database schema:

```bash
npx prisma migrate dev
```

### **Step 7: Start the Server**

Start the development server by running:

```bash
npm run dev
```

### **Step 8: Access the API**

The API will be running at `http://localhost:5000`. You can use tools like Postman or cURL to interact with the endpoints.

## **API Endpoints**

Below is a list of the main API endpoints available in the system:

### **Books**

- **Add a New Book**  
  `POST /api/books`  
  Request Body: `{ title, author, genre, publishedDate }`

- **Get All Books**  
  `GET /api/books`

- **Get Book by ID**  
  `GET /api/books/:bookId`

- **Update Book Details**  
  `PUT /api/books/:bookId`  
  Request Body: `{ title, author, genre, publishedDate }`

- **Delete a Book**  
  `DELETE /api/books/:bookId`  
  Note: This will also delete any related borrow records.

### **Members**

- **Register a New Member**  
  `POST /api/members`  
  Request Body: `{ name, email, phone, membershipDate }`

- **Get All Members**  
  `GET /api/members`

- **Get Member by ID**  
  `GET /api/members/:memberId`

- **Update Member Information**  
  `PUT /api/members/:memberId`  
  Request Body: `{ name, email, phone, membershipDate }`

- **Delete a Member**  
  `DELETE /api/members/:memberId`  
  Note: This will also delete any related borrow records.

### **Borrowing & Returning Books**

- **Borrow a Book**  
  `POST /api/borrow`  
  Request Body: `{ memberId, bookId }`

- **Return a Book**  
  `POST /api/return`  
  Request Body: `{ borrowId }`

- **Get Overdue Books**  
  `GET /api/borrow/overdue`  
  Returns a list of books that are overdue (borrowed for more than 14 days).

## **Key Features & Functionality**

- **Book Management**: Add, update, view, and delete books.
- **Member Management**: Register, update, view, and delete members.
- **Borrowing & Returning**: Borrow and return books, with automatic tracking of due dates.
- **Overdue Tracking**: View books that are overdue and calculate the number of days they are overdue.

## **Known Issues/Bugs**

- None currently known. Please report any issues via the GitHub repository.
