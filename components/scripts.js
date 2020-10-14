import Head from 'next/head';
import dynamic from 'next/dynamic';
const MainScripts = () => {
	return (
		<Head>
			<script src="/js/validate.js"></script>
			<script src="/js/main.js"></script>
		</Head>
	);
};

export default dynamic(() => Promise.resolve(MainScripts), {
	ssr: false,
});
