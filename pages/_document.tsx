import { Html, Main, NextScript, Head } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body className='bg-lightPrimary dark:bg-primary'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

