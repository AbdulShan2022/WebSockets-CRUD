import React from "react";

export default function Input({ name, label, error, ...rest }) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input
                {...rest}
                name={name}
                className="input-field"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}