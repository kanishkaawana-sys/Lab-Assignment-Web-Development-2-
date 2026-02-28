const addBtn = document.getElementById("addEventBtn");
const eventList = document.getElementById("eventList");


addBtn.addEventListener("click", function () {
  const title = document.getElementById("eventTitle").value;
  const date = document.getElementById("eventDate").value;
  const category = document.getElementById("eventCategory").value;
  const desc = document.getElementById("eventDesc").value;

  if (title === "" || date === "") {
    alert("Please fill required fields");
    return;
  }

  
  const emptyText = document.querySelector(".empty-text");
  if (emptyText) emptyText.remove();

 
  const card = document.createElement("div");
  card.className = "event-card";

  card.innerHTML = `
    <h3>${title}</h3>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Category:</strong> ${category}</p>
    <p>${desc}</p>
    <button class="delete-btn">X</button>
  `;

  eventList.appendChild(card);


  document.getElementById("eventTitle").value = "";
  document.getElementById("eventDate").value = "";
  document.getElementById("eventCategory").value = "";
  document.getElementById("eventDesc").value = "";
});


eventList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});


document.getElementById("textBtn").addEventListener("click", function () {
  const demoText = document.getElementById("demoText");

 
  demoText.innerText = "Text changed using innerText";
  demoText.style.color = "green";
  demoText.style.fontWeight = "bold";
});