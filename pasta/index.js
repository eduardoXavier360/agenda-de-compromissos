document.addEventListener("DOMContentLoaded", loadAppointments);
document.getElementById("appointment-form").addEventListener("submit", addAppointment);

function addAppointment(e) {
    e.preventDefault();
    
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let description = document.getElementById("description").value;

    if (!date || !time || !description) return alert("Preencha todos os campos!");

    let appointment = { date, time, description };
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    document.getElementById("appointment-form").reset();
    loadAppointments();
}

function loadAppointments() {
    let list = document.getElementById("appointment-list");
    list.innerHTML = "";

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    appointments.forEach((appt, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${appt.date} ${appt.time} - ${appt.description} 
            <button class="delete-btn" onclick="deleteAppointment(${index})">X</button>`;
        list.appendChild(li);
    });
}

function deleteAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem("appointments"));
    appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    loadAppointments();
}
