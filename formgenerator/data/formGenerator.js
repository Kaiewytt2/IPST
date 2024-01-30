document.addEventListener('DOMContentLoaded', function() {
    const formSelector = document.getElementById('form-selector');
    formSelector.addEventListener('change', function() {
        const selectedFormPath = this.value;
        loadJSON(selectedFormPath, generateForm);
    });
});

function loadJSON(path, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.open('GET', path, true);
    xhr.send();
}

function createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    for (const attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }
    if (content) {
        element.textContent = content;
    }
    return element;
}

function generateFormFields(formData, formContainer) {
    formData.fields.forEach(field => {
        const formGroup = createElement('div', { class: 'form-group' });
        const label = createElement('label', { for: field.name, class: 'form-label' }, field.label);
        const input = createElement(field.type === 'textarea' ? 'textarea' : 'input', {
            type: field.type,
            name: field.name,
            placeholder: field.placeholder,
            id: field.name,
            class: 'form-control'
        });
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        formContainer.appendChild(formGroup);
    });
}

function generateForm(formData) {
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = '';
    const form = createElement('form');
    generateFormFields(formData, form);
    const submitButton = createElement('button', { type: 'submit', class: 'btn btn-primary' }, 'Submit');
    form.appendChild(submitButton);
    formContainer.appendChild(form);
}