export const validateForm = (name, email, message, setFormErrors) => {
    let errors = {};
    if (!name.trim()) {
        errors.name = "Name is required";
    }
    if (!email.trim()) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid";
    }
    if (!message.trim()) {
        errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
};