const employees = [
    { name: "John Doe", email: "johndoe@example.com", role: "Admin" },
    { name: "Jane Smith", email: "janesmith@example.com", role: "User" },
];

const tableBody = document.querySelector("tbody");

function loadTableRows() {
    tableBody.innerHTML = ""; // Clear existing rows
    employees.forEach((employee, index) => {
        const row = `
        <tr>
          <td>${employee.name}</td>
          <td>${employee.email}</td>
          <td>${employee.role}</td>
          <td>
            <div class="action-buttons">
              <button class="edit" onclick="editEmployee(${index})">Edit</button>
              <button class="delete" onclick="deleteEmployee(${index})">Delete</button>
            </div>
          </td>
        </tr>
      `;
        tableBody.innerHTML += row;
    });
}

loadTableRows();

