/*
 * @Author: Klien
 * @Date: 2022-02-05 13:28:07
 * @LastEditTime: 2022-02-08 07:10:13
 * @LastEditors: Klien
 */
import React from 'react';

import { hydrate } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './components/app';

hydrate(
	<BrowserRouter>
		<App ssrData={window.ssrData} ssrPath={window.ssrPath} />
	</BrowserRouter>,
	document.getElementById('app')
);
