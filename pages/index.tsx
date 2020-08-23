// Hooks
import { useEffect, useState } from "react";
// SEO
import Head from "next/head";
// Router
import Link from "next/link";
// Components
import AppLayout from "components/app-layout/app-layout.component";
import Button from "components/_shared/button/button.component";
import Github from "components/_shared/icons/github.icon";
// Styles
import "./styles.scss";
// Firebase
import "firebase/auth";

import { loginWithGoogle, getCurrentUser } from "firebase/client";

const App = () => {
	const [user, setUser] = useState(undefined);

	const handleClick = () => {
		loginWithGoogle();
	};

	useEffect(() => {
		getCurrentUser(setUser);
	}, []);

	useEffect(() => {
		console.log(user);
	}, [user]);

	return (
		<>
			<Head>
				<title>Twitter 🐦</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<AppLayout>
				<section className="home">
					<img src="/twitter-logo.png" alt="Logo" />
					<h1>Twitter</h1>
					<h2>
						El Justicialismo ha dejado de ser la causa de un hombre para ser la causa del
						pueblo, y por ella sí valdría la pena darlo todo, incluso la vida.
					</h2>

					<div>
						{user === null && (
							<Button onClick={handleClick}>
								<Github fill="#fff" width={24} height={24} />
								Login with GitHub
							</Button>
						)}
						{user && user.avatar && (
							<div>
								<img src={user.avatar} />
								<strong>{user.username}</strong>
							</div>
						)}
					</div>
				</section>
			</AppLayout>
		</>
	);
};

export default App;
