function edit_todo(event) {

    let text = event.target.parentNode.querySelector("span").textContent

    let string_array = JSON.parse(localStorage.getItem("todos")) || []

    let updated_text = prompt("Enter Your Updated Text", text)

    if (updated_text) {
        let position_todo = string_array.indexOf(text)
        string_array.splice(position_todo, 1, updated_text)



        let array_to_string = JSON.stringify(string_array)
        localStorage.setItem("todos", array_to_string)

    }

    display_todos()
}

function delete_todo(event) {
    let text = event.target.parentNode.querySelector("span").textContent

    console.log(text)

    let string_array = JSON.parse(localStorage.getItem("todos")) || []

    let position_todo = string_array.indexOf(text)

    string_array.splice(position_todo, 1)

    let array_to_string = JSON.stringify(string_array)
    localStorage.setItem("todos", array_to_string)

    display_todos();
}


function display_todos(event) {
    let string_array = JSON.parse(localStorage.getItem("todos")) || [];

    let output = document.getElementById("output")
    output.innerHTML = ""

    for (let i = 0; i < string_array.length; i++) {
        output.innerHTML +=
            `<div class = "flex justify-around p-4 my-5">
            <span class = "font-[cursive]">${string_array[i]}</span>
            <button class="bg-gray-600 p-3 text-white rounded-md" onclick="edit_todo(event)">Edit</button>
            <button class="bg-red-600 p-3 text-white font-sans rounded-md" onclick="delete_todo(event)">Delete</button>
             </div>`
    }
}



function gen_todo(event) {
    event.preventDefault()

    let username = document.getElementById("username");

    let string_array = localStorage.getItem("todos")

    let old_value = JSON.parse(string_array) || [];

    let new_value = [username.value, ...old_value];

    let array_to_string = JSON.stringify(new_value)

    localStorage.setItem("todos", array_to_string)

    username.value = "";

    display_todos()
}

display_todos()


