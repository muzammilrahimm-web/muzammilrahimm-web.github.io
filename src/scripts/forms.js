// Shared form behaviour for Nestora (runs in the browser).
//
// - Friendly validation messages for any <form data-validate>
// - Show/hide password buttons ([data-password-toggle])
//
// IMPORTANT: This is FRONTEND ONLY. Nothing is sent to a server and nothing
// is saved in localStorage, cookies or any other browser storage.
// Real accounts and emails need a secure backend, which is a future step.

function getMessage(input, form) {
  const v = input.validity;
  const label = input.dataset.label || 'This field';

  if (input.type === 'checkbox') {
    return v.valueMissing ? input.dataset.requiredMessage || 'Please tick this box to continue.' : '';
  }
  if (v.valueMissing) return `${label} is required.`;
  if (v.typeMismatch && input.type === 'email') {
    return 'Please enter a valid email address, for example name@example.com.';
  }
  if (v.tooShort) return `${label} must be at least ${input.minLength} characters.`;
  if (v.patternMismatch) return input.dataset.patternMessage || `${label} is not in the right format.`;

  // "Confirm password" must match the field named in data-match.
  if (input.dataset.match) {
    const other = form.querySelector(`#${input.dataset.match}`);
    if (other && input.value !== other.value) return 'Passwords do not match.';
  }
  return '';
}

function showError(input, message) {
  const error = document.getElementById(`${input.id}-error`);
  input.setAttribute('aria-invalid', message ? 'true' : 'false');
  if (error) error.textContent = message;
}

function setupForm(form) {
  if (form.dataset.ready) return; // avoid setting up the same form twice
  form.dataset.ready = 'true';

  const fields = [...form.querySelectorAll('input, textarea, select')].filter((i) => i.type !== 'hidden');
  const status = form.querySelector('[data-form-status]');

  fields.forEach((input) => {
    // Check a field when the user leaves it (only once they've typed something).
    input.addEventListener('blur', () => {
      if (input.type !== 'checkbox' && input.value) showError(input, getMessage(input, form));
    });
    // Once a field shows an error, update it live as the user fixes it.
    const liveEvent = input.type === 'checkbox' ? 'change' : 'input';
    input.addEventListener(liveEvent, () => {
      if (input.getAttribute('aria-invalid') === 'true') showError(input, getMessage(input, form));
      // Re-check "confirm password" when the main password changes.
      const confirm = form.querySelector(`[data-match="${input.id}"]`);
      if (confirm && confirm.value) showError(confirm, getMessage(confirm, form));
    });
  });

  form.addEventListener('submit', (event) => {
    // Always stop the browser from sending the form: there is no backend yet.
    event.preventDefault();
    if (status) status.hidden = true;

    let firstInvalid = null;
    fields.forEach((input) => {
      const message = getMessage(input, form);
      showError(input, message);
      if (message && !firstInvalid) firstInvalid = input;
    });

    if (firstInvalid) {
      if (status && form.dataset.errorMessage) {
        status.textContent = form.dataset.errorMessage;
        status.classList.add('form-status--error');
        status.hidden = false;
      }
      firstInvalid.focus();
      return;
    }
    if (status) status.classList.remove('form-status--error');

    // Valid: explain honestly that nothing happened, and clear passwords.
    form.querySelectorAll('[data-password]').forEach((input) => {
      input.value = '';
      input.type = 'password';
    });
    form.querySelectorAll('[data-password-toggle]').forEach(resetToggle);

    if (status) {
      status.textContent = form.dataset.successMessage ||
        'Thanks! This is a design preview, so nothing was sent or saved.';
      status.hidden = false;
    }

    // Lets a page add its own behaviour after a valid submit (e.g. the Contact page).
    form.dispatchEvent(new CustomEvent('form:valid', { detail: { status } }));
  });
}

function resetToggle(button) {
  button.setAttribute('aria-pressed', 'false');
  button.setAttribute('aria-label', 'Show password');
  const text = button.querySelector('[data-toggle-text]');
  if (text) text.textContent = 'Show';
}

function setupPasswordToggle(button) {
  if (button.dataset.ready) return;
  button.dataset.ready = 'true';
  const input = document.getElementById(button.getAttribute('aria-controls'));
  if (!input) return;

  button.addEventListener('click', () => {
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    button.setAttribute('aria-pressed', String(show));
    button.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    const text = button.querySelector('[data-toggle-text]');
    if (text) text.textContent = show ? 'Hide' : 'Show';
  });
}

export function initForms() {
  document.querySelectorAll('form[data-validate]').forEach(setupForm);
  document.querySelectorAll('[data-password-toggle]').forEach(setupPasswordToggle);
}
