document.addEventListener("DOMContentLoaded", () => {
    const habits = window.loadData('dlm_habits', []);
    const tasks = window.loadData('dlm_tasks', []);

    const habitsProgressEl = document.getElementById("habits-progress");
    const tasksProgressEl = document.getElementById("tasks-progress");
    const habitsCircleEl = document.getElementById("habits-circle");

    if (habitsProgressEl) {
        const totalHabits = habits.length;
        const compHabits = habits.filter(h => h.completed).length;
        let percentage = 0;
        
        if (totalHabits > 0) {
            percentage = Math.round((compHabits / totalHabits) * 100);
        }

        habitsProgressEl.textContent = `${compHabits} / ${totalHabits} Completed`;
        
        if (habitsCircleEl) {
            habitsCircleEl.style.setProperty('--percentage', `${percentage}%`);
            habitsCircleEl.querySelector('.progress-text').textContent = `${percentage}%`;
        }
        
        if (tasksProgressEl) {
            tasksProgressEl.textContent = `${tasks.length} Total Tasks`;
        }
    }
});
//test 
// =====================
// 1. FORM SUBMIT
// =====================
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

submitBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const age = ageInput.value;

    // Validation
    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (age === "" || age < 1) {
        alert("Please enter a valid age");
        return;
    }

    output.textContent = `Hello, ${name}! You are ${age} years old.`;
});


// =====================
// 2. COUNTER
// =====================
let count = 0;

const counterValue = document.getElementById("counterValue");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

// Function to update UI
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

// Increase
increaseBtn.addEventListener("click", function () {
    count++;
    updateCounter();
});

// Decrease
decreaseBtn.addEventListener("click", function () {
    count--;
    updateCounter();
});

// Reset
resetBtn.addEventListener("click", function () {
    count = 0;
    updateCounter();
});


// =====================
// 3. TO-DO LIST
// =====================
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Create span for text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Mark complete (strike)
    span.addEventListener("click", function () {
        span.style.textDecoration = 
            span.style.textDecoration === "line-through" ? "none" : "line-through";
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // clear input
}

// Add task button
addTaskBtn.addEventListener("click", addTask);


// =====================
// 4. DARK MODE
// =====================
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


// =====================
// 5. IMAGE PREVIEW
// =====================
const imageUrl = document.getElementById("imageUrl");
const showImageBtn = document.getElementById("showImageBtn");
const previewImage = document.getElementById("previewImage");

showImageBtn.addEventListener("click", function () {
    const url = imageUrl.value.trim();

    if (url === "") {
        alert("Please enter image URL");
        return;
    }

    previewImage.src = url;
    previewImage.style.display = "block";
});


// =====================
// 6. KEYBOARD EVENTS
// =====================

// Enter in task input
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Enter in name input
nameInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        submitBtn.click();
    }
});