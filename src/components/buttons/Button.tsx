import React from "react";

interface ButtonProps {
    name: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string; // optional tailwind classes from parent
}

const Button: React.FC<ButtonProps> = ({
    name,
    onClick,
    type = "button",
    className = "",
}) => {
    const defaultClasses =
        "px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200";

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${defaultClasses} ${className}`}
        >
            {name}
        </button>
    );
};

export default Button;
