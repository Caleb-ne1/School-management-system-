document.getElementById('add-student-form').addEventListener('submit', async function(event){
    event.preventDefault();

    const first_name = document.getElementById('first_name').value
    const last_name = document.getElementById('last_name').value
    const email = document.getElementById('email').value
    const course = document.getElementById('course').value
    const reg_no = document.getElementById('reg_no').value

    const response = await fetch("http://localhost:3002/students/add-student", {
        method: 'POST',
        headers: {
            'content-Type' : 'application/json',
        },
        body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
            course: course,
            reg_no: reg_no
        })
    });

    if (response.ok){
        const result = await response.json();
        alert("Student added" + result.name)
    } else {
        alert("Student not added")
    }
})

async function fetchStudents() {
    const response = await fetch('http://localhost:3002/students/all-students'); // Adjust the URL to match your backend
    const students = await response.json();
    const tableBody = document.getElementById('students-body');
    tableBody.innerHTML = '';

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.first_name}</td>
            <td>${student.last_name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td>${student.reg_no}</td>
        `;
        tableBody.appendChild(row);
    });
}

window.onload = fetchStudents;
