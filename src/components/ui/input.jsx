export const Input = ({ type, placeholder, ...props }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="border rounded px-3 py-2 w-full"
            {...props}
        />
    );
};

