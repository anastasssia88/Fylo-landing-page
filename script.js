const email = document.getElementById('email')
const button1 = document.getElementById('signUp')
const errorOrConfirmation = document.getElementById('error-or-confirmation')

const email_second = document.getElementById('email_second')
const button_second = document.getElementById('signUp_second')
const errorOrConfirmation_second = document.getElementById('error-or-confirmation_second')

button1.addEventListener('click', (e) => {
    let messages = []
    if (email.value === '' || email.value == null) {
        messages.push('Email is required')
        e.preventDefault()
        errorOrConfirmation.innerText = messages.join(', ')
        email.style.border = "1px solid #B91C1C"
    }

    if (email.value.length >= 1 ) {
        messages.push('Please check your email')
        errorOrConfirmation.innerText = messages.join(', ')
        email.style.border = "1px solid rgba(156, 163, 175, 1)"
    }

})


button_second.addEventListener('click', (e) => {
    let messages = []

    if (email_second.value === '' || email_second.value == null) {
        messages.push('Email is required')
        e.preventDefault()
        errorOrConfirmation_second.innerText = messages.join(', ')
        email_second.style.border = "1px solid #B91C1C"
    }

    if (email_second.value.length >= 1 ) {
        messages.push('Please check your email')
        errorOrConfirmation_second.innerText = messages.join(', ')
        email_second.style.border = "1px solid rgba(156, 163, 175, 1)"
    }

    
})