const login = async (event) => {
  event.preventDefault();

  const name = document.getElementById("login-name").value;
  const password = document.getElementById("login-password").value;

  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      password,
    }),
  });

  const data = await response.json();

  console.log(data);

  if (response.ok) {
    alert("Login successful");
  } else {
    alert(data.message);
  }
};

document
  .getElementById("form-login")
  .addEventListener("submit", login);



  
const registration = async (event) => {
  event.preventDefault();

  const name = document.getElementById("register-name").value;
  const password = document.getElementById("password").value;
  const checkPassword = document.getElementById("check-password").value;

  if (password.length < 8) {
    alert("Пароль должен содержать минимум 8 символов");
    return;
  }

  if (password !== checkPassword) {
    alert("Пароли не совпадают");
    return;
  }

  try {
    const response = await fetch("/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      throw new Error(data.message);
    }

    alert("Регистрация успешна");

  } catch (error) {
    console.error(error);
    alert("Ошибка регистрации");
  }
};

document
  .getElementById("form-registration")
  .addEventListener("submit", registration);

















fetch('/login')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Ошибка', error));

fetch('/login', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
name: 'Пользователь',
password: 'Sonya_904'
})
})
.then(response => response.json())
.then(data => console.log('Ok:', data))
.catch(error => console.error('Ошибка:', error));
