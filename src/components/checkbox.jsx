import React from "react";

const CheckBox = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <input
            type="checkbox"
            className={`h-4 w-4 rounded border border-gray-300 text-green-600 focus:ring-green-500 ${className}`}
            ref={ref}
            {...props}
        />
    );
});

CheckBox.displayName = "Checkbox";

export { CheckBox };
