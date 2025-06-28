const pins = {
  admin: "1234",
  manager: "2345",
  employee: "3456",
  guest: "4567"
};

function login() {
  const role = document.getElementById("user-role").value;
  const pin = document.getElementById("pin").value;
  const error = document.getElementById("error-message");

  if (pins[role] === pin) {
    document.querySelector(".login-screen").classList.add("hidden");
    document.getElementById("main-screen").classList.remove("hidden");
    error.classList.add("hidden");
  } else {
    error.classList.remove("hidden");
  }
}
