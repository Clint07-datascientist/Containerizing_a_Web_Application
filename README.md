# Containerizing_a_Web_Application

# Project Management Application

An app created using HTML, CSS, and JavaScript. This application allows users to manage their tasks by adding, editing, deleting, and marking them as completed.

## Table of Contents

- [Todo List Application](#todo-list-application)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [With no Containerization](#with-no-containerization)
    - [With Containerization](#with-containerization)
  - [Usage](#usage)
  - [Assumptions](#assumptions)
  - [Issues](#issues)

## Features

- Add a todo item
- Edit a todo item text inline
- Delete a todo item
- Mark a todo item complete by checking its checkbox
- Clear all todos
- Clear completed todos

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Web browser

## Getting Started
### With no Containerization

To get started with the todo list application, follow these steps:

1. Clone the repository to your local machine:

  ```
  git clone https://github.com/Clint07-datascientist/Containerizing_a_Web_Application.git
  ```
2. Navigate into the folder you've cloned
  ```
    cd Containerizing_a_Web_Application
  ```

3. Open the `index.html` file in your preferred web browser.

### With Containerization
**Prerequisites**
- Docker

To run the todo list application Docker image on your local machine, you can follow these steps:

1. **Pull the Docker Image**: Open a terminal or command prompt and run the following command to pull the Docker image from Docker Hub:

   ```bash
   docker pull Clint07-datascientist/Containerizing_a_Web_Application:latest
   ```
2. **Run the Docker Container**

   ```bash
   docker run -d -p 8080:80 --Project Management Clint07-datascientist/Containerizing_a_Web_Application:latest
   ```
3. **Access the Todo List Application**: Open a web browser and navigate to `http://localhost:8080` to access the todo list application running inside the Docker container.

## Usage

- To `add a new todo`, type the task in the input field and press the "Add" button or press Enter.
- To `mark a todo as complete`, click on the checkbox on the left of the corresponding todo.
- To `edit a todo`, click on the todo text or the edit icon, modify the todo in the alert and Press Enter to save changes.
- To `delete a todo`, click on the trash icon of the corresponding todo.
- To `clear all todos`, click the "Clear All" button.
- To `clear completed todos`, click the "Clear Completed" button.

## Assumptions
- A docker image should function the same way regardless of the environment, therefore the image hosted on DockerHub should function the same way regardless of the host.

## Issues

If you encounter any issues with the todo list application, please feel free to [submit an issue](https://github.com/Clint07-datascientist/Containerizing_a_Web_Application/issues). Please provide detailed information about the problem, including steps to reproduce it.

