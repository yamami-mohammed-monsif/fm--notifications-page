const notifications = document.querySelectorAll('.notification');
const markAll = document.querySelector('.mark-all-as-read');
const notificatiosNumber = document.querySelector('.notifications-number');
const redDots = document.querySelectorAll('.unread-message');

markAll.addEventListener('click', () => {
    notifications.forEach(function(notification) {
        notification.style.backgroundColor = 'inherit';
    })

    redDots.forEach(function(redDot) {
        redDot.style.display = 'none';
    })

    notificatiosNumber.innerHTML = '0';
})
    
var number = parseInt(notificatiosNumber.innerHTML);

notifications.forEach(function(notification) {

    notification.addEventListener('click', () => {
        notification.style.backgroundColor = 'inherit';
        notification.querySelector('.unread-message').style.display = 'none';
        if(number > 0) {
            number = number - 1;
            notificatiosNumber.innerHTML = number;
        }
    })
})

const sentMessage = document.querySelector('.sent-private-msg');
const message = document.querySelector('.message-content');

sentMessage.addEventListener('click', () => {
    if(message.style.display === 'block') {
        message.style.display = 'none';
    } else {
        message.style.display = 'block';
    }
})