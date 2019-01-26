"use strict";

if (localStorage.tasks) {
    var tasks = [];
    let transforming_tasks = localStorage.tasks.split(",");
    for (let index = 0; index <= transforming_tasks.length; index++) {
        tasks.push(transforming_tasks[index]);
    }
} else {
    var tasks = [];
}

$(document).ready(() => {
    $("#task_error").hide();
    $("#task_success").hide();
    $("#all_tasks").hide();
    if (tasks.length != 0) {
        $("#all_tasks").show();
        show();
    }
});
//save task
function save_task() {
    let task = $("#task").val();
    //check if task not empty
    if (task) {
        //filter the input
        task = task.replace(/(<([^>,]+)>)/ig, "");
        //saving task into array first then add it to our local storage
        tasks.push(task);
        localStorage.tasks = tasks;
        //showing success msg after saving
        $("#task").val("");
        $("#task_success").html("Task saved successfully");
        $("#task_success").show();
        setTimeout(() => {
            $("#task_success").hide();
        }, 2000);
        show();

    } else {
        $("#task_error").html("Please Enter Task Name");
        $("#task_error").show();
        setTimeout(() => {
            $("#task_error").hide();
        }, 2000);
    }
}
//get all tasks
function show() {
    $("#new_task").html("");
    $("#all_tasks").show();
    let saved_tasks = localStorage.tasks
    if (saved_tasks !== undefined) {
        let transforming_tasks = saved_tasks.split(",");
        for (let index = 0; index <= transforming_tasks.length; index++) {
            if (transforming_tasks[index] !== undefined && transforming_tasks[index] != "") {
                $("#new_task").append(`
                    <tr id="deleted_row${transforming_tasks[index]}">
                        <td>
                        ${transforming_tasks[index]}
                        </td>
                        <td>
                        <i class="fa fa-trash fa-lg" style="color:red;" onclick="delete_task('${transforming_tasks[index]}');"></i>
                        </td>
                    </tr>
            `);
            }
        }
    }
}
function delete_task(data) {
    //get the index of data passed
    let index = tasks.indexOf(data);
    //removing this index from tasks array
    tasks.splice(index, 1);
    //saving tasks in local storage again
    localStorage.tasks = tasks;
    console.log(localStorage.tasks)
    if (tasks.length == 0) {
        $("#all_tasks").hide();
    }
    $("#deleted_row" + data).remove();
}