/*
 * @Author: Klien
 * @Date: 2022-02-03 22:43:27
 * @LastEditTime: 2022-02-07 17:00:35
 * @LastEditors: Klien
 */
import React, { useState, useEffect } from 'react';

export function getProps(props: any) {
	console.log('getProps', props);

	if (props.ssrData) {
		console.log('props.ssrData', props.ssrData);
		return props.ssrData;
	}
	return '';
}

export function requestInitialData(props: any, component: any, setFunctions: any) {
	useEffect(() => {
		//客户端运行时
		if (typeof window != 'undefined') {
			//非同构时，并且getInitialProps存在
			if (!props.ssrData && component.getInitialProps) {
				component.getInitialProps().then((data: any) => {
					console.log('requestInitialData======',data);
					
					// if (data) {
					// 	//遍历结果，执行set赋值
					// 	for (let key in setFunctions) {
					// 		for (let dataKey in data) {
					// 			if (key == dataKey) {
					// 				setFunctions[key](data[dataKey]);
					// 				break;
					// 			}
					// 		}
					// 	}
					// }
				});
			}
			if (component.title) document.title = component.title;
		}
	}, [1]);
}
