# Todo List Application

A simple Todo List application built with Next JS, Redux Toolkit, and Tailwind CSS. This app allows users to add, edit, delete, and clear todo tasks, with pagination to navigate through tasks when there are more than three.

## Features

- Add new todo items with a title and description.
- Edit existing todo items.
- Delete individual todo items.
- Clear all todo items.
- Paginate through todo items (3 items per page).

## Technologies Used

- Next JS
- Redux Toolkit
- Tailwind CSS
- React Icons
- React Hot Toast

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js
- npm (or yarn)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/todo-app.git
    ```

2. Navigate to the project directory:

    ```sh
    cd ToDo_App
    ```

3. Install the dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

### Running the Application

To start the development server, run:

```sh
npm run dev
# or
yarn dev

```

### Usage

1. Add a Task:  Enter a task title and description, then click the "Add Task" button.

2. Edit a Task: Click the edit icon next to a task, modify the title and/or description, and save the changes.

3. Delete a Task: Click the delete icon to delete a task.

4. Clear All Tasks: Click the "Clear All Items" button to remove all tasks.

5. Pagination: Use the "Previous" and "Next" buttons to navigate through the pages if there are more than 3 tasks.

### Deployment on Vercel
 
1. Go to Vercel and register (if you do not have an account).

2. After logging into Vercel, create a new project.

3. Import your Git repository into Vercel. Vercel will automatically detect the project settings and deploy your application.

4. Follow the prompts to complete the deployment process. 

5. Once the deployment is complete, Vercel will provide you with a live URL for your application.
