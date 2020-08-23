// Styles
import "./app-layout.styles.scss";

interface IAppLayout {
	children: React.ReactNode;
}

const AppLayout = ({ children }: IAppLayout) => {
	return (
		<>
			<div className="app-layout">
				<main className="main">{children}</main>
			</div>
		</>
	);
};

export default AppLayout;
