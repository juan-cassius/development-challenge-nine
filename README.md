# Development challenge

## Welcome to the "Would change" branch!

Here I'll update the software with the improvements I would do if there is no time limit to the challenge.
Things that I have changed 'til this moment:

- Added Pagination
- Added SearchBar
- Backend: Validation to Address keys
- Backend: Empty fields validation
- Added Integration tests to all CRUD operations
- Fixed container permission issue


##

In this repository you will find my solution to the Medcloud Coding Challenge 9. The requirements to deliver this challenge are on the end of this document.

## Requirements to run this project

- [Docker](https://www.docker.com/) installed in your machine.

## Instructions

First you need to clone this project and enter the folder:

```bash
    git clone git@github.com:juan-cassius/development-challenge-nine.git
    cd development-challenge-nine
```

Make Sure that you are not using the ports below in your machine. If you want to use other ports instead just change the ports on the docker-compose.yaml file on the root of this project:

```
3000 // Frontend Port
3001 // Backend Port
3306 // Database Port
```
To change them just find the "ports" part of the service you want to custom:

```
    service_name:     # Find the service you want to change the port
        ports:
            XXXX:0000 # Change the left number to the port you need!
```

Then you'll have to setup the 3 container (frontend, backend, db):

```bash
    sudo docker compose up -d --build
```

This may take long, the backend container depends on the status check of the db container. After this step you are good to go. Just use the links bellow to use the services:

```bash
http://localhost:3000/ <- This is the frontend address
http://localhost:3001/ <- This is the backend address
```

Bellow you can find some previews of the project:

### Home Page

![Home Page](./previews/Home.png)

In this page you can see all the patients names, search by name. In this page you can add, edit or remove patients. Theres pagination limited to 5 rows per page. To see all the patient data just click on the name and you'll be redirected to the details page.

## Details Page

![Details Page](./previews/DetailsPage.png)

Here you can remove, edit or see all the patient data.

## Create Patient Page

![Creation Page](./previews/CreatePage.png)

Through this form you can add a patient.

## Edit Patient Page

![Edit Page](./previews/EditPage.png)

This page is the same as the above, the only difference is that the patient data is already in the form.
!!!!YOU CAN ONLY SUBMIT THIS FORM IF THERE IS A MODIFICATION!!!! (Otherwise you'll get an error alert).

## About Page

![AboutMe Page](./previews/AboutMe.png)

In this page you can find some contacts and info about me. Feel free to contact any time!

# Thank you for visiting my code solution!

Bellow you have the original README.md of this project:

![logo medcloud-03 white copy](https://user-images.githubusercontent.com/46347123/158176045-de9fefb0-35e2-4515-83ff-c132608aa870.png)

About Medcloud:

We make exams and medical data management more flexible, secure and effective by accelerating the transition from clinics and hospitals to the cloud.
The RIS and PACS systems have been practically the same for the past 25 years. Interoperability problems, high costs and a lack of understanding about the patient's access to his medical records.

These points defined limits for the doctor-patient relationship and barriers to radiology workflows. We are revolutionizing this through a Care Coordination based solution that improves workflows for providers and integrates doctors and patients for a better experience.

Since our foundation, almost 10 years ago, we have prioritized excellence in the management of health data, structuring workflows of health professionals, clinics, laboratories and hospitals for assertive and quality diagnostics.

We understand that behind each medical record there is a patient seeking to improve his health and the hope of family members for his well being. After all, we are all patients, and Medcloud's mission is to help you live longer and better. #PatientFirst

Medcloud's challenge for Dev Full Stack.

## Goal

- To develop a web application (CRUD) to manage patient registers (Patient's name, birth date, email and address).

## Required

- You need to develop both the front-end and the back-end.
- In the front-end you MUST use React.
- In the back-end you MUST use Node.js.
- The patient data should not be static (You MUST use a cloud database or a local database).
- Field validation (date, required fields, etc).

## Extra Points

- Cache the data in-browser.
- Pagination.
- Use Material UI - https://material-ui.com.
- A cool design.
- If you choose a local database: a docker environment of your project.

## References

- Intro to React: https://reactjs.org/tutorial/tutorial.html.

## What will be evaluated:

- Clean and organized code (naming, etc.)
- Knowledge of patterns (PSRs, design patterns, SOLID)
- Be consistent and know how to argue your choices
- Present solutions you master
- Data Modeling
- Code maintainability
- Error handling
- Architecture (structuring thought before writing)
- Affection in decoupling components (other layers, service, repository)

According to the above criteria, we will evaluate your test in order to proceed to the technical interview. If you have not acceptably achieved what we are proposing above, we will not proceed with the process.

## Delivery

You MUST fork this repository to your own account and push you code to it.
When you finish it, you must send a email to cv@medcloud.com.br with your curriculum and your fork.

Good luck! Any doubts, feel free to send an email to cv@medcloud.com.br.

## For the day of the technical interview and code review

On the date set by the recruiter, have your application running on your local machine to run the tests and to show us the points developed and possible questions. We will do a code review together with you as if you were already on our team, you will be able to explain what you thought, how you architected and how the project can evolve. Good luck!
