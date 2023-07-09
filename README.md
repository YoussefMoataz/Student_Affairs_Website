# Student_Affairs_Website
Made by : [**Youssef Moataz**](https://github.com/YoussefMoataz) - [**Mohamed Maged**](https://github.com/Ibn-Maged) - [**Nourhan Mahmoud**](https://github.com/NourhanMahmoudd) - 
[**Sara Walid**](https://github.com/sarawalid99) - [**Ahmed Saad**](https://github.com/ahmedsaad123456) - [**Hassan Magdi**](https://github.com/hassan1876) 

Description :
--------------------------------------------
This project is a web application developed using Django, a high-level Python web framework. 

The application allows users to manage student profiles and perform various operations such as adding, updating, and deleting student information. Additionally, users can view statistics and generate reports based on student data.

Features :
--------------------------------------------
- User Authentication: Users can create an account, log in, and log out.
- Student Profile Management: Users can add, update, and delete student profiles.
- Student Department Assignment: Users can assign a department to a student (limited to students in level 3).
- Reporting: The application generates reports based on student data, including the number of students in each level and the number of active/inactive students in each level.
- User Management: Administrators can add, update, and delete user accounts.
- Home Page: The home page displays statistics and reports.

Installation :
--------------------------------------------
To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Make sure you have Python installed. This project requires Python 3.9 or later.
3. Create a virtual environment for the project:
    - Open a terminal or command prompt.
    - Navigate to the project directory.
    - Run the command `python -m venv venv` to create a new virtual environment.
4. Activate the virtual environment:
    - On Windows: `venv\Scripts\activate`
    - On macOS and Linux: `source venv/bin/activate`
5. Install the project dependencies by running the command `pip install -r requirements.txt`.
6. Run the database migrations:
    - Run the command `python manage.py makemigrations` to create the migration files.
    - Run the command `python manage.py migrate` to apply the migrations to the database.
7. Start the development server by running the command `python manage.py runserver`.
8. Open your web browser and visit http://localhost:8000 to access the application.

Usage :
--------------------------------------------
- Once the application is running, you can access the homepage where you can navigate to different sections of the application.
- Use the provided forms to add new student profiles or user accounts.
- View and manage existing student profiles and user accounts through the respective pages.
- Update or delete student profiles and user accounts as needed.

Technologies :
--------------------------------------------
The project uses the following technologies:

- Python: Programming language used for the backend development.
- Django: High-level Python web framework for building web applications.
- HTML: Markup language for creating the structure of web pages.
- CSS: Styling language for designing the appearance of web pages.
- JavaScript: Programming language for adding interactivity to web pages.
- SQLite: Database management system used for storing data.

Directory Structure :
--------------------------------------------
<img width="194" alt="image" src="https://github.com/YoussefMoataz/Student_Affairs_Website/assets/92929722/16361eff-11ac-48cc-b188-7f1df3ae886a">


