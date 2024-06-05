import React, { useState } from "react";

const Testing = () => {
    const initialForm = {
        username: "",
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialForm);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleInputchange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    if (submitSuccess) {
        setSubmitSuccess(false);
        setFormData(initialForm);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors({});

        const errors = {};

        if (!formData.username) {
            errors.username = "Username is required";
        }

        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!isValidEmail(formData.email)) {
            errors.email = "Email is required";
        }

        if (!formData.password) {
            errors.password = "Password is required";
        } else if (formData.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
        }


        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            setIsSubmitting(true);

            //  simulating async or API delay
            setTimeout(() => { setIsSubmitting(false); setSubmitSuccess(true); }, 2500)
        }

    }


    return (
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <Label>UserName: </Label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputchange}
                    />
                    {formErrors.username && (<span>{formErrors.username}</span>)}
                </div>
                <div>
                    <Label>Email:</Label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputchange}
                    />
                </div>
                {formErrors.email && (<span>{formErrors.email}</span>)}
                <div>
                    <Label>Password:</Label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        minLength="8"
                        onChange={handleInputchange}
                    />
                </div>
                {formErrors.password && (<span>{formErrors.password}</span>)}
                <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting" : "Submit"}</button>
                {submitSuccess && (<p>Registration is successful</p>)}
            </form>
        </div>
    );
};
export default Testing;
