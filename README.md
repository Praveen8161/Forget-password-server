# Forgot Password BackEnd

## Working
- Login check the user data and allow the login
- SignUp check the existing database and update the new user
- Forgot Password creates a temporary token and send a mail to the user to update the password

**Base URL**

URL - https://forget-password-server.onrender.com/

### POST
**signup**
  `https://forget-password-server.onrender.com/signup/newuser`
Get the user data and store it in the dataBase
Automatically send a email to the user for Authentication

***Request Format***

{
    "email": "okok@gmail.com",
    "password": "example"
}

### POST
**login**
  `https://forget-password-server.onrender.com/login/user`
Get the user data and check the user details in the database

***Request Format***

{
    "email": "oki@gmail.com",
    "password": "example"
}

### POST
**forgot passoword**
  `https://forget-password-server.onrender.com/forgot`
Get the user email and check the user details in the database and send a Password Reset link to the User email

***Request Format***

{
    "email": "oki@gmail.com"
}

### GET
**verify reset page**
  `https://forget-password-server.onrender.com/reset/:id/:token`
When the User click the password reset email it will check the data and allow the user to update the new password

### PATCH
**update new password**
  `https://forget-password-server.onrender.com/forgot`
  
***Request Format***

{
  "newPassword": "123",
  "confirmPassword": "123"
}

## API Documentation
- [API](https://documenter.getpostman.com/view/31335509/2s9YkkgPSB)

## Front End Live Site
- [Live Site](https://kaleidoscopic-crepe-c6c530.netlify.app/)

## Live Site
- [Live Site](https://forget-password-server.onrender.com/)
