const form = document.getElementById('form');

function retrieveFormValue(event) {
    event.preventDefault();

    const name = form.querySelector('[name="name"]');
    const password = form.querySelector('[name="password"]');
    const email = form.querySelector('[name="email"]');
    const role = form.querySelector('[name="role"]');
    const passwordrepeat = form.querySelector('[name="passwordrepeat"]');
    const checkboxmod = form.querySelector('[name="checkboxmod"]');

    if (name.value === '') {
        name.style.border = '1px solid red';
    }
    if (password.value === '') {
        password.style.border = '1px solid red';
    }
    if (email.value === '') {
        email.style.border = '1px solid red';
    }
    if (role.value === '') {
        role.style.border = '1px solid red';
    }
    if (passwordrepeat.value === '') {
        passwordrepeat.style.border = '1px solid red';
    }

    if (name.value === '' || password.value === '' || email.value === '' || role.value === '' || passwordrepeat.value === '') {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
    }

    if (password.value !== passwordrepeat.value) {
        alert('Пароли не совпадают');
        password.style.border = '1px solid red';
        passwordrepeat.style.border = '1px solid red';
        return;
    }

    form.style.display = 'none';

    alert('Регистрация успешно завершена');

    const values = {
        name: name.value,
        password: password.value,
        email: email.value,
        role: role.value,
        passwordrepeat: passwordrepeat.value,
        checkboxmod: checkboxmod.checked
    };

    console.log('js', values);
}

form.addEventListener('submit', retrieveFormValue);
