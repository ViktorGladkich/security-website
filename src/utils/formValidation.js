export const validateForm = (name, email, message) => {
    let errors = {};

    if (!name || !name.trim()) {
        errors.name = "Name ist erforderlich";
    }
    if (!email || !email.trim()) {
        errors.email = "E-Mail ist erforderlich";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "E-Mail ist ungültig";
    }
    if (!message || !message.trim()) {
        errors.message = "Nachricht ist erforderlich";
    }
    return errors;
};