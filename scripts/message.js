const { download } = require("express/lib/response");

document.getElementById('contact-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    const notification = document.getElementById('notification');

    if (response.ok) {
      // success
      notification.textContent = '¡Message sent successfully!';
      notification.style.color = 'green';
      notification.style.display = 'block';
      form.reset(); 
    } else {
      // fail
      notification.textContent = 'There was a problem sending the message. Try again.';
      notification.style.color = 'red';
      notification.style.display = 'block';
    }
  } catch (error) {
    console.error('Error:', error);
    const notification = document.getElementById('notification');
    notification.textContent = 'Error sending message. Check your connection.';
    notification.style.color = 'red';
    notification.style.display = 'block';
  }
  setTimeout(() => {
    const notification = document.getElementById('notification');
    notification.style.display = 'none';
  }, 5000);
});
