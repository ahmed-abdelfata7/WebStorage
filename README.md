# JavaScript Local storage
Before HTML5 application data had to be stored in cookies,included in every request.
Web storage is more secure and can stored large amount of data locally without affecting on web site performance.
# Two objects for storing data
- session object `window.sessionStorage`
 used to store data for one session and data lost when browser closed.
- local object `window.localStorage`
 used to stroe data with no expiration date.

**Before using storage check if browser support it or not**

```javascript
if(typeof(Storage)!==undefined){
    //code to store data in web storage
}else{
    alert("Sorry Browser Not Support Storage");
}
```

# Store data
`localStorage.setItem("Name","Ahmed");`
or
`localStorage.Name="Ahmed";`
# Get data
`localStorage.getItem("Name");`
or 
`localStorage.Name`;
# Delete data
`localstorage.removeItem("Name");`

# About the project
I have been created a todo list application (CRUD) using localstorage you can download project.
To know how you can use localStorage to store data locally.