window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Load employees.json
  fetch("employees.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("employee-list");

      data.forEach(dept => {
        // Department title
        const h4 = document.createElement("h4");
        h4.textContent = dept.department;
        container.appendChild(h4);

        // Employee list
        const ul = document.createElement("ul");
        dept.employees.forEach(name => {
          const li = document.createElement("li");
          li.textContent = name;
          ul.appendChild(li);
        });
        container.appendChild(ul);
      });
    })
    .catch(err => console.error("Error loading employees.json:", err));
});
