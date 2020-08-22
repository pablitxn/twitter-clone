// Types
// import {  } from "next";
// Router
import Link from "next/link";
// Components
import AppLayout from "components/app-layout/app-layout.component";

interface ITimeline {
	username: string;
}

export default function Timeline({ username }: ITimeline) {
	return (
		<AppLayout>
			<h1>This is the timeline of {username}</h1>
			<Link href="/">
				<a>Go home</a>
			</Link>
		</AppLayout>
	);
}

Timeline.getInitialProps = async () => {
	const res = await fetch("http://localhost:3000/api/hello");
	const response = await res.json();

	return response;
};
