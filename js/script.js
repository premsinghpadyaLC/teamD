// Load JSON data and populate the problem table
fetch('data/problem.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById("problem-data");
    data.forEach(entry => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${entry.crop}</td>
        <td>${entry.farmer_price}</td>
        <td>${entry.market_price}</td>
        <td>${entry.middlemen_profit}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error("Error loading JSON data:", error));
