import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="stylesheet" href="/css/normalize.min.css" />
					<link rel="stylesheet" href="/css/pr.animation.css" />
					<link rel="stylesheet" href="/css/owl.carousel.min.css" />
					<link rel="stylesheet" href="/css/uikit.min.css" />
					<link rel="stylesheet" href="/css/fonts.css" />
					<link rel="stylesheet" href="/css/pixeicons.css" />
					<script src="/js/jquery.min.js"></script>
					<script src="/js/anime.min.js"></script>
					<script src="/js/pr.animation.js"></script>
					<script src="/js/uikit.min.js"></script>
					<script src="/js/owl.carousel.min.js"></script>
				</Head>
				<body className="home front-page body">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
