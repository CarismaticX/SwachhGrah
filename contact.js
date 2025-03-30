function submitFeedback() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedbackType = document.getElementById('feedbackType').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = Thank you, ${name}! Your ${feedbackType} has been submitted successfully.;
}function submitFeedback() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedbackType = document.getElementById('feedbackType').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = Thank you, ${name}! Your ${feedbackType} has been submitted successfully.;
}