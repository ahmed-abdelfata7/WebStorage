"use strict";
var tasks = [];
$(document).ready(() => {
    $("#task_error").hide();
});
//save task
function save_task() {
    let task = $("#task").val();
    //check if task not empty
    if (task) {
        //saving task into array first then add it to our local storage
        task = task.replace(/(<([^>]+)>)/ig, "");
        alert(task);
        tasks.push(task + "<br>");
        localStorage.tasks = tasks;
    } else {
        $("#task_error").html("Please Enter Task Name");
        $("#task_error").show();
        setTimeout(() => {
            $("#task_error").hide();
        }, 2000);
    }
    console.log(localStorage.tasks);
}