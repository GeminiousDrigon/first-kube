import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="#">Kubernetes!</a>
				</h1>
				<h1 style={{ lineHeight: 0 }}>Hello! Gemin!</h1>
				{typeof window !== "undefined" && <h3 style={{ lineHeight: 0 }}>{location?.hostname}</h3>}
			</main>
		</div>
	);
}
