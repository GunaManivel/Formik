# Book Management System

This project is a simple Book Management System built using React.js for the front end and a mock API for data storage and Formik for form management and validation. It allows users to view, add, edit, and delete books and authors.

## Features

- View a list of books with their details such as title, author, publication date, and ISBN.
- View a list of authors with their details such as name, birthdate, and biography.
- Add new books and authors to the system.
- Edit existing books and authors.
- Delete books and authors from the system.

## Components

- ### Navbar

**File**: `Navbar.jsx`

**Description**: Component for the navigation bar. It contains links to navigate between different pages in the application.

**Styling**: Styled using CSS in Navbar.css.

- ### Footer
  
**File**: `Footer.jsx`

**Description**: Component for the footer section. It provides information about the application or website.

**Styling**: Styling can be customized as needed.

- ### Home
  
**File**: `Home.jsx`

**Description**: Component for the home page displaying books and authors. It fetches and displays data from the mock API.

**Functionality**: Allows users to view a list of books and authors and navigate to detailed views or editing pages.

**Dependencies**: Depends on Products and Authors components for displaying book and author data.

- ### Products
  
**File**: `Products.jsx`

**Description**: Component for displaying and managing books. It fetches book data from the mock API and allows users to add, edit, and delete books.

**Functionality**: Allows users to view a list of books, add new books, edit existing books, and delete books.

**Dependencies**: Uses Edit and Create components for editing and creating book data.

- ### Authors
  
**File**: `Authors.jsx`

**Description**: Component for displaying and managing authors. It fetches author data from the mock API and allows users to add, edit, and delete authors.

**Functionality**: Allows users to view a list of authors, add new authors, edit existing authors, and delete authors.

**Dependencie**s: Uses EditAuthor and CreateAuthor components for editing and creating author data.

- ### Create
  
**File******: `Create.jsx`

**Description**: Component for creating a new book. It provides a form for users to input book details and submits the data to the mock API.

**Functionality**: Validates user input using Formik and Yup, then sends a POST request to the API to create a new book.

- ### Edit
  
**File**: `Edit.jsx`

**Description**: Component for editing an existing book. It retrieves the existing book data from the mock API, allows users to modify the data, and sends a PUT request to update the book details.

**Functionality**: Validates user input using Formik and Yup, then sends a PUT request to the API to update the book details.

- ### CreateAuthor
  
**File**: `CreateAuthor.jsx`

**Description**: Component for creating a new author. It provides a form for users to input author details and submits the data to the mock API.

**Functionality**: Validates user input using Formik and Yup, then sends a POST request to the API to create a new author.

- ### EditAuthor
  
**File**: `EditAuthor.jsx`

**Description**: Component for editing an existing author. It retrieves the existing author data from the mock API, allows users to modify the data, and sends a PUT request to update the author details.

**Functionality**: Validates user input using Formik and Yup, then sends a PUT request to the API to update the author details.
  
## Technologies Used

`React.js`: Used for building the front end user interface and handling user interactions.

`React Router`: Used for client-side routing to navigate between different pages in the application.

`Axios`: Used for making HTTP requests to the mock API to fetch and update data.

`Formik`: Used for form management and validation in creating and editing book/author details.

`Yup`: Used for schema-based form validation.

`Bootstrap`: Used for styling and layout of the components.

`Mock API`: Used for simulating a backend server to store and retrieve data.

## Folder Structure


```yaml
book-management-system/
│
├── src/
│   ├── Components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Home.js
│   │   ├── Products.js
│   │   ├── Authors.js
│   │   ├── Create.js
│   │   ├── Edit.js
│   │   ├── CreateAuthor.js
│   │   └── EditAuthor.js
│   │
│   ├── Styles/
│   │   ├── Navbar.css
│   │   ├── Books.css
│   │   └── ...
│   │
│   ├── App.js
│   └── index.js
│
└── README.md
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/GunaManivel/Formik
```

2. Navigate to the project directory:
   
```bash
cd book-management-system
```

3. Install dependencies:
   
```bash
npm install
```

4. Start the development server:
   
```bash
npm start
```

5. Open your browser and go to http://localhost:3000 to view the application.
   
## License

This project is licensed under the MIT License - see the LICENSE file for details.