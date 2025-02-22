import React from "react";

export function Input({ className, ...props }) {
    return (
        <input
            className={`border p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            {...props}
        />
    );
}
