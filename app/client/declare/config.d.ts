/*
 * @Author: Klien
 * @Date: 2022-01-14 20:10:15
 * @LastEditTime: 2022-02-03 22:17:52
 * @LastEditors: Klien
 */
export {};
declare global {
	interface Window {
		// 声明window参数
		ssrData: any;
		ssrPath: any;
	}
}
