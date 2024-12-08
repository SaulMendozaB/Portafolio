document.getElementById('contact-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const notification = document.getElementById('notification');

  try {
    const response = await fetch('https://formspree.io/f/mnnqynyd', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

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
    notification.textContent = 'Error sending message. Check your connection.';
    notification.style.color = 'red';
    notification.style.display = 'block';
  }

  // Hide notification after 5 seconds
  setTimeout(() => {
    notification.style.display = 'none';
  }, 5000);
});