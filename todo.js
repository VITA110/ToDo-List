function markAsDone(button) {
    
    let taskItem = button.parentElement;

    let doneTasks = document.getElementById('done-tasks');


    button.textContent = "Pendiente";
    button.setAttribute('onclick', 'markAsPending(this)');


    doneTasks.insertBefore(taskItem, doneTasks.firstChild);
}

function markAsPending(button) {

    let taskItem = button.parentElement;

    let pendingTasks = document.getElementById('pending-tasks');

    button.textContent = "Hecho";

    button.setAttribute('onclick', 'markAsDone(this)');


    pendingTasks.insertBefore(taskItem, pendingTasks.firstChild);
}


