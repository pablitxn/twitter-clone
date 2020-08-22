interface IAppLayout {
	children: React.ReactNode;
}

export default function AppLayout({ children }: IAppLayout) {
	return (
		<>
			<main>{children}</main>
			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: monospace;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</>
	);
}
