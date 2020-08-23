// Styles
import "./button.styles.scss";

interface IButton {
	children: React.ReactNode;
	onClick: () => void;
}

const Button = ({ children, onClick }: IButton) => (
	<button onClick={onClick}>{children}</button>
);

export default Button;
