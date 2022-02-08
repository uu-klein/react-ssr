/*
 * @Author: Klien
 * @Date: 2022-02-05 17:25:42
 * @LastEditTime: 2022-02-07 17:03:24
 * @LastEditors: Klien
 */
import React, { useState } from 'react';

import { NavigateFunction, useNavigate } from 'react-router-dom';

// import request from '../axios';

import { getProps, requestInitialData } from '../hooks';

const Home = (props: any) => {
	// const [desc, setDesc] = useState('惹不起');
	const [val, toggle] = React.useState(false);

	console.log('Home------data', val);

	console.log('Home------props', props);

	const navigate: NavigateFunction = useNavigate();

	const goAbout: () => void = () => navigate('/about');

	const ssrData: any = getProps(props);

	console.log('Home---props', ssrData);

	const [homeData, setHomeData] = useState(ssrData);

	requestInitialData(props, Home, { data: ssrData });

	//getProps获取props中的ssrData，重构和服务端渲染时props有值，第三个参数为默认值
	// const [Home, setHome] = useState(ssrData);
	//在单页面路由页面跳转，渲染组件时，requestInitialData调用getInitialProps
	// requestInitialData(props, Home, { list: setHome });

	// const [data, setData] = useState<any>(ssrData);

	// console.log('Home====data', Home);

	return <div onClick={goAbout}>Home111111</div>;
};

Home.getInitialProps = async () => {
	// let list = [];
	// const res: any = request.get('/api/Home');
	// if (!res.errCode) list = res.data;
	return {
		props: {
			ssrData: 'List Page',
		},
	};
};

Home.title = 'Home';

export default Home;
