let inputTask = document.getElementById("inputTask");
let taskKeeper = document.getElementById("taskKeeper");



document.getElementById("addTask").onclick = function () {
    if (inputTask.value.length == 0) {
        alert("Please Add Your Task First")
    }
    else {
        let currentTime = new Date();
        let date = currentTime.getDate();
        let month = currentTime.getMonth() + 1;
        let year = currentTime.getFullYear();
        let minutes = currentTime.getMinutes();
        let hours = currentTime.getHours();
        let seconds = currentTime.getSeconds();

        // Adding Task 
        taskKeeper.innerHTML +=
            `<div class="task">
        <span id="showTask">
            ${inputTask.value}
        </span>
        <button id="deleteTask">
            Delete
        </button>
        <span id="printDate">
        <li>
        ${hours}:${minutes}:${seconds}
        </li>
        <li>
        ${date}/${month}/${year}
        </li>
        </span>
        </div>`

        inputTask.value = "";

        // Deleting Task
        var deletetask = document.querySelectorAll("#deleteTask");

        for (let i = 0; i < deletetask.length; i++) {
            deletetask[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }

}

