let q = prompt("Кто там?");
if (q == "Админ") {
    let password = prompt("Пароль?");
    if (password == "Я главный") {
        alert("Здравствуйте!");
    } else if (password == null) {
        alert("Отменено");
    } else alert("Неверный пароль");
} else if (q == null) {
    alert("Отменено");
} else alert("Я вас не знаю");
