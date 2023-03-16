const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter GitHub username";
document.body.appendChild(input);

const button = document.createElement("button");
button.textContent = "Lookup";
button.addEventListener("click", getUserInfo);
document.body.appendChild(button);

const p = document.createElement("p");
p.id = "user-image";
document.body.appendChild(p);

const table = document.createElement("table");
table.id = "user-info";
document.body.appendChild(table);

async function getUserInfo() {
  const username = input.value.trim();

  if (!username) {
    alert("Please enter a GitHub username");
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    const tableHeaders = ["Name", "Blog", "Created"];
    const tableData = [
      data.name || "",
      data.blog || "",
      new Date(data.created_at).toLocaleDateString()
    ];

    // Clear previous table data
    while (table.rows.length > 0) {
      table.deleteRow(0);
    }

    // Create table header row
    const headerRow = table.insertRow();
    tableHeaders.forEach(headerText => {
      const headerCell = headerRow.insertCell();
      headerCell.innerHTML = `<b>${headerText}</b>`;
    });
    headerRow.style.backgroundColor = "lightgray";

    // Create table data row
    const dataRow = table.insertRow();
    tableData.forEach(dataText => {
      const dataCell = dataRow.insertCell();
      dataCell.textContent = dataText;
    });

    // Display user image
    const image = document.createElement("img");
    image.src = data.avatar_url;
    image.alt = `${data.name || username}'s profile picture`;
    p.innerHTML = "";
    p.appendChild(image);
  } catch (error) {
    console.error(error);
  }
}