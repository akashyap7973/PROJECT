document.addEventListener("DOMContentLoaded", () => {

    const nameInput = document.getElementById("nameInput");
    const ageInput = document.getElementById("ageInput");
    const submitBtn = document.getElementById("submitBtn");
    const output = document.getElementById("output");

    const counterValue = document.getElementById("counterValue");
    const increaseBtn = document.getElementById("increaseBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");

    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    const themeBtn = document.getElementById("themeBtn");

    const imageUrl = document.getElementById("imageUrl");
    const showImageBtn = document.getElementById("showImageBtn");
    const previewImage = document.getElementById("previewImage");

    
    submitBtn.addEventListener("click", handleSubmit);

    function handleSubmit() {
        const name = nameInput.value.trim();
        const age = ageInput.value.trim();

        if (name === "") {
            alert("Please enter your name");
            return;
        }

        if (age === "" || age < 1) {
            alert("Please enter a valid age");
            return;
        }

        output.textContent = `Hello, ${name}! You are ${age} years old.`;
    }

    nameInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleSubmit();
    });

   
    let count = 0;

    function updateCounter() {
        counterValue.textContent = count;

        if (count > 0) {
            counterValue.style.color = "green";
        } else if (count < 0) {
            counterValue.style.color = "red";
        } else {
            counterValue.style.color = "black";
        }
    }

    increaseBtn.addEventListener("click", () => {
        count++;
        updateCounter();
    });

    decreaseBtn.addEventListener("click", () => {
        count--;
        updateCounter();
    });

    resetBtn.addEventListener("click", () => {
        count = 0;
        updateCounter();
    });

    
    addTaskBtn.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;

       li.addEventListener("click", ()=>{
        taskList.style.textDecoration= 
        li.style.textDecoration== "line-through"
        ?"none"
        : "line-through";
       });

       const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.style.marginLeft = "10px";
        delBtn.style.background = "red";

        delBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(delBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    }
      
   taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });

   
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

   
    // showImageBtn.addEventListener("click", () => {
    //     const url = imageUrl.value.trim();

    //     if (url === "") {
    //         alert("Enter image URL");
    //         return;
    //     }
    // )