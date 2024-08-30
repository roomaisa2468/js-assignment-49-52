//ques-1
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    document.getElementById('displayUsername').textContent = username;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayPassword').textContent = password;
    document.getElementById('formData').style.display = 'block';
});

//ques-2

document.getElementById('toggleButton').addEventListener('click', function() {
    const fullDetails = document.getElementById('fullDetails');
    const summary = document.getElementById('summary');
    const button = document.getElementById('toggleButton');

    if (fullDetails.style.display === 'none') {
        
        fullDetails.style.display = 'block';
        button.textContent = 'Read Less'; // Change button text
    } else {
        fullDetails.style.display = 'none';
        button.textContent = 'Read More'; // Change button text
    }
});



// ques-3
const students = [
    { name: "Ali", age: 20, grade: "A" },
    { name: "Haley Noor", age: 22, grade: "B" },
    { name: "Charlie", age: 23, grade: "C" },
    { name: "Aryan", age: 21, grade: "B" },
    { name: "Rossie Dossan", age: 20, grade: "A" },
    { name: "Zayn", age: 22, grade: "C" },
    { name: "Grace", age: 21, grade: "B" },
    { name: "Zahviyan", age: 23, grade: "A" },
    { name: "Ahlam", age: 20, grade: "C" },
    { name: "Jack", age: 22, grade: "B" }
];

let editingIndex = null;
function renderTable() {
    const tbody = document.querySelector('#studentTable tbody');
    tbody.innerHTML = ''; 

    students.forEach((student, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>
                <button class="edit" onclick="editRow(${index})">Edit</button>
                <button class="delete" onclick="deleteRow(${index})">Delete</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}
function deleteRow(index) {
    students.splice(index, 1); 
    renderTable(); 
}

function editRow(index) {
    const student = students[index];
    document.getElementById('editName').value = student.name;
    document.getElementById('editAge').value = student.age;
    document.getElementById('editGrade').value = student.grade;
    document.getElementById('editIndex').value = index;
    document.getElementById('editFormContainer').style.display = 'block';
    editingIndex = index;
}
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    if (editingIndex === null) {
        students.push({ name, age, grade });
    } else {
        students[editingIndex] = { name, age, grade };
        editingIndex = null;
        document.getElementById('editFormContainer').style.display = 'none';
    }

    renderTable();
    document.getElementById('studentForm').reset();
});
document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('editName').value;
    const age = document.getElementById('editAge').value;
    const grade = document.getElementById('editGrade').value;

    students[editingIndex] = { name, age, grade };
    editingIndex = null;
    document.getElementById('editFormContainer').style.display = 'none';
    renderTable();
});
document.getElementById('cancelEdit').addEventListener('click', function() {
    editingIndex = null;
    document.getElementById('editFormContainer').style.display = 'none';
});
renderTable();
