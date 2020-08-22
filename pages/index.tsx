// Types?
import { NextComponentType } from "next";
// SEO
import Head from "next/head";
// Router
import Link from "next/link";
import { useRouter } from "next/router";
// Components
import AppLayout from "components/app-layout/app-layout.component";

const App: NextComponentType = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Twitter 🐦</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<AppLayout>
				<h1>
					<a href="https://nextjs.org">devter</a>
				</h1>
				<nav>
					<Link href="/timeline">
						<a>timeline</a>
					</Link>
				</nav>
			</AppLayout>

			<style jsx>{`
				h1 {
					text-align: center;
					font-size: 48px;
				}

				nav {
					font-size: 24px;
					text-align: center;
				}

				.another-title {
					color: #333;
					font-size: 24px;
				}

				a {
					color: orange;
					text-decoration: none;
				}
			`}</style>
		</>
	);
};

export default App;
