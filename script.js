let input = document.getElementById("input1");
let button = document.getElementById("button1");
let list = document.getElementById("taskList1");

button.addEventListener("click", function(){
    let userTask = input.value.trim(); // No whitespace!
    if (userTask !== ""){
        let newListTask = document.createElement("li");

        let containerForButton = document.createElement("div");
        containerForButton.className = "TaskButtons";

        let completeButton = document.createElement("button");
        completeButton.textContent = "Complete";

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        containerForButton.appendChild(completeButton);
        containerForButton.appendChild(deleteButton);

        newListTask.textContent = userTask;
        newListTask.appendChild(containerForButton);
        list.appendChild(newListTask);

        completeButton.addEventListener("click", function(event){
            completeTask(event, newListTask);
        });

        deleteButton.addEventListener("click", function(event){
            deleteTask(event, list, newListTask);
        });

        input.value = "";
    } else {
        alert("Please enter a valid task!");
    }
});

function completeTask(event, newListTask){
    event.stopPropagation();
    newListTask.style.textDecoration = "line-through";
    newListTask.style.fontWeight = "bold";
}

function deleteTask(event, list, newListTask){
    event.stopPropagation();
    list.removeChild(newListTask);
}
