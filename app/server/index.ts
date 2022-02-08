/*
 * @Author: Klien
 * @Date: 2022-02-05 13:28:07
 * @LastEditTime: 2022-02-08 09:08:32
 * @LastEditors: Klien
 */
import express from 'express';

import fs from 'fs';

import path from 'path';

import { render } from './render';

const server = express();

server.set('view engine', 'ejs');

server.set('views', path.join(__dirname, 'views'));

server.use('/', express.static(path.join(__dirname, 'static')));

server.get('/', (req, res) => {
	const manifest = fs.readFileSync(path.join(__dirname, 'static/manifest.json'), 'utf-8');

	const assets = JSON.parse(manifest);

	const component = render(req);

	res.render('client', { assets, component });
});

server.listen(3003, () => {
	console.log(`Server running on http://localhost:3003`);
});
