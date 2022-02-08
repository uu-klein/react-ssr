/*
 * @Author: Klien
 * @Date: 2022-02-05 21:55:48
 * @LastEditTime: 2022-02-06 14:11:06
 * @LastEditors: Klien
 */
import React from 'react';

import { renderToString } from 'react-dom/server';

import { StaticRouter } from 'react-router-dom/server';

import App from '../client/components/app';

const html = (url: any) => (
	// <Provider store={store}>
	<StaticRouter location={url}>
		<App ssrData={'传入ssrData'} />
	</StaticRouter>
	// </Provider>
);

export const render = (req: any) => renderToString(html(req.baseUrl));
