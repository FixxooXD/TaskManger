import { ReactNode } from "react";

interface ButtonProps {
	extraBtnClasses?: string;
	textColor?: string;
	handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	title?: string;
	disable?: boolean;
	type?: "button" | "submit" | "reset";
	children?: ReactNode;
    content?: {
        text: string;
        icon?: React.ElementType;
      };
}

function Button({
	extraBtnClasses,
	textColor,
	handleClick,
    title,
	disable,
	type = "button",
	children,
    content
}: ButtonProps) {
	const handleClickProp = type === "submit" ? undefined : handleClick;
    
	return (
		<button
			type={type}
			title={title ?? ""}
			onClick={handleClickProp}
			disabled={disable}
			className={`flex gap-2 items-center text-iconColor ${extraBtnClasses} ${
				textColor ?? ""
			} rounded-md px-2 py-1 hover:scale-105 transition duration-300 ease-in-out`}
		>
            {content?.icon && <content.icon className="w-5 h-5" />}
            {content?.text} 
			{children}
		</button>
	);
}

export default Button;