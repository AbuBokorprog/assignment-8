# **Library Management System API**

## **Project Name & Description**

**Library Management System API**  
This is a backend API built for managing a library’s operations. The system allows library staff and members to perform operations such as managing books, authors, members, and borrowing activities. The API is designed to handle book management, member registration, borrowing and returning books, and viewing overdue items.

## **Live URL**

- [Live Deployment Link](#) _([Library management system](https://library-management-roan-mu.vercel.app/))_

## **Technology Stack & Packages**

This project utilizes the following technologies:

- **Node.js**: JavaScript runtime used for building the backend server.
- **Express.js**: Web framework used to build RESTful API routes.
- **Prisma ORM**: Database ORM for interacting with the PostgreSQL database.
- **PostgreSQL**: Relational database used to store library data.
- **TypeScript**: For enhanced code quality through static typing.

### **Packages used in the project:**

- `express`: Web framework to define API routes.
- `prisma`: ORM for database schema management and queries.
- `uuid`: Used for generating unique identifiers for books and members.
- `typescript`: For type checking and static typing.
- `dotenv`: For loading environment variables.
- `cors`: To enable Cross-Origin Resource Sharing (CORS) for the API.

## **Setup Instructions**

Follow these steps to set up and run the project locally:

1. **Clone the Repository**  
   Run the following command to clone the repository:

   ```bash
   git clone <repository-link>
   ```

2. **Navigate to the Project Directory**  
   Change into the project directory:

   ```bash
   cd library-management-system-api
   ```

3. **Install Dependencies**  
   Install the necessary dependencies:

   ```bash
   npm install

   OR

   yarn install
   ```

4. **Set up Environment Variables**  
   Create a `.env` file in the root directory and add the following variables:

   ```env
   DATABASE_URL=your_postgresql_database_url
   PORT=3000
   ```

5. **Run Database Migrations**  
   Run Prisma migrations to set up the database schema:

   ```bash
   npx prisma migrate deploy
   ```

6. **Start the Server**  
   Start the development server by running:

   ```bash
   npm run dev
   ```

7. **Access the API**  
   The API will be running at `http://localhost:3000`. You can use tools like Postman or cURL to interact with the API.

## **Key Features & Functionality**

- **Book Management:**

  - Add new books to the library.
  - View all books or search for specific books by ID.
  - Update book details (title, author, genre, etc.).
  - Delete books from the library.

- **Member Management:**

  - Register new members for the library.
  - View member details or search for members by ID.
  - Update member information.
  - Delete members from the system.

- **Book Borrowing & Returning:**

  - Members can borrow books, which updates their status and the book’s availability.
  - Books can be returned, updating the borrow record with the return date.

- **Overdue Books:**
  - Admins can view a list of overdue books and borrower details.
