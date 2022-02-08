/*
 * @Author: Klien
 * @Date: 2022-02-05 13:28:07
 * @LastEditTime: 2022-02-08 09:42:33
 * @LastEditors: Klien
 */
import React from 'react';

import Router from '../router';

const App = (props: any) => <Router ssrData={props.ssrData} ssrPath={props.ssrPath} />;

export default App;

