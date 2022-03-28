import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

const App: React.FC = (props) => {
	const [pageData, setPageData] = useState<any>(null);

	useEffect(() => {
		(async () => {
			await getResumeData();
		})();
	}, []);

	const getResumeData = async () => {
		const response = await axios({
			url: './resumeData.json',
			method: 'GET',
		});

		setPageData(response?.data);
	};

	return (
		<div className='App scroll_style' style={{ overflowY: 'hidden' }}>
			<Header data={pageData?.main} />
			<About data={pageData?.main} />
			<Resume data={pageData?.resume} />
			<Portfolio data={pageData?.portfolio} />
			<Contact data={pageData?.main} />
			<Footer data={pageData?.main} />
		</div>
	);
};

export default App;
