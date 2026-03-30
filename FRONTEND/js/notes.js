document.addEventListener("DOMContentLoaded", () => {

    //  Load notes from localStorage
    let notes = JSON.parse(localStorage.getItem("dlm-notes")) || [];

    //  Select elements (match HTML classes)
    const notesInput = document.querySelector(".note-input");
    const addNoteBtn = document.querySelector(".btn-save");
    const notesList = document.querySelector(".notes-list");

    //  Render Notes Function
    function renderNotes() {
        notesList.innerHTML = "";

        notes.forEach((note, index) => {
            const li = document.createElement("li");
            li.className = "note-item";

            li.innerHTML = `
                <div class="note-content">
                    <input type="checkbox" data-index="${index}" ${note.completed ? "checked" : ""}>
                    <span class="${note.completed ? "completed" : ""}">
                        ${note.title}
                    </span>
                </div>
                <button class="delete-btn" data-index="${index}">
                    Delete
                </button>
            `;

            notesList.appendChild(li);
        });

        //  Save updated notes
        localStorage.setItem("dlm-notes", JSON.stringify(notes));
    }

    //  Add Note
    addNoteBtn.addEventListener("click", () => {
        const title = notesInput.value.trim();

        if (title === "") return;

        notes.push({
            title: title,
            completed: false
        });

        notesInput.value = "";
        renderNotes();
    });

    //  Handle checkbox + delete
    notesList.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");

        if (index === null) return;

        // Checkbox toggle
        if (e.target.tagName === "INPUT") {
            notes[index].completed = e.target.checked;
        }

        // Delete note
        if (e.target.classList.contains("delete-btn")) {
            notes.splice(index, 1);
        }

        renderNotes();
    });

    //  Initial render
    renderNotes();
});