/*
 * @Author: Klien
 * @Date: 2022-02-03 21:38:17
 * @LastEditTime: 2022-02-07 17:02:46
 * @LastEditors: Klien
 */
import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

import About from '../pages/About';

const routers: any = [
	{
		path: '/',
		component: Home,
	},
	{
		path: 'about',
		component: About,
	},
];

const Router = (props: any) => (
	<Routes>
		<Route path='/'>
			{routers.map((router: any, i: number) => (
				<Route key={i} index={i === 0} path={router.path} element={<router.component {...props} />} />
			))}
		</Route>
	</Routes>
);

export default Router;
