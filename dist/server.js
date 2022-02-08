/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/client/components/app.tsx":
/*!***************************************!*\
  !*** ./app/client/components/app.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/*\n * @Author: Klien\n * @Date: 2022-02-05 13:28:07\n * @LastEditTime: 2022-02-08 09:42:33\n * @LastEditors: Klien\n */\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst router_1 = __importDefault(__webpack_require__(/*! ../router */ \"./app/client/router/index.tsx\"));\nconst App = (props) => react_1.default.createElement(router_1.default, { ssrData: props.ssrData, ssrPath: props.ssrPath });\nexports[\"default\"] = App;\n\n\n//# sourceURL=webpack://react-ssr/./app/client/components/app.tsx?");

/***/ }),

/***/ "./app/client/hooks/index.ts":
/*!***********************************!*\
  !*** ./app/client/hooks/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.requestInitialData = exports.getProps = void 0;\n/*\n * @Author: Klien\n * @Date: 2022-02-03 22:43:27\n * @LastEditTime: 2022-02-07 17:00:35\n * @LastEditors: Klien\n */\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nfunction getProps(props) {\n    console.log('getProps', props);\n    if (props.ssrData) {\n        console.log('props.ssrData', props.ssrData);\n        return props.ssrData;\n    }\n    return '';\n}\nexports.getProps = getProps;\nfunction requestInitialData(props, component, setFunctions) {\n    (0, react_1.useEffect)(() => {\n        //客户端运行时\n        if (typeof window != 'undefined') {\n            //非同构时，并且getInitialProps存在\n            if (!props.ssrData && component.getInitialProps) {\n                component.getInitialProps().then((data) => {\n                    console.log('requestInitialData======', data);\n                    // if (data) {\n                    // \t//遍历结果，执行set赋值\n                    // \tfor (let key in setFunctions) {\n                    // \t\tfor (let dataKey in data) {\n                    // \t\t\tif (key == dataKey) {\n                    // \t\t\t\tsetFunctions[key](data[dataKey]);\n                    // \t\t\t\tbreak;\n                    // \t\t\t}\n                    // \t\t}\n                    // \t}\n                    // }\n                });\n            }\n            if (component.title)\n                document.title = component.title;\n        }\n    }, [1]);\n}\nexports.requestInitialData = requestInitialData;\n\n\n//# sourceURL=webpack://react-ssr/./app/client/hooks/index.ts?");

/***/ }),

/***/ "./app/client/pages/About.tsx":
/*!************************************!*\
  !*** ./app/client/pages/About.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/*\n * @Author: Klien\n * @Date: 2022-02-05 17:25:42\n * @LastEditTime: 2022-02-06 02:23:41\n * @LastEditors: Klien\n */\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst About = () => react_1.default.createElement(\"div\", null, \"About\");\nexports[\"default\"] = About;\n\n\n//# sourceURL=webpack://react-ssr/./app/client/pages/About.tsx?");

/***/ }),

/***/ "./app/client/pages/Home.tsx":
/*!***********************************!*\
  !*** ./app/client/pages/Home.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/*\n * @Author: Klien\n * @Date: 2022-02-05 17:25:42\n * @LastEditTime: 2022-02-07 17:03:24\n * @LastEditors: Klien\n */\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n// import request from '../axios';\nconst hooks_1 = __webpack_require__(/*! ../hooks */ \"./app/client/hooks/index.ts\");\nconst Home = (props) => {\n    // const [desc, setDesc] = useState('惹不起');\n    const [val, toggle] = react_1.default.useState(false);\n    console.log('Home------data', val);\n    console.log('Home------props', props);\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    const goAbout = () => navigate('/about');\n    const ssrData = (0, hooks_1.getProps)(props);\n    console.log('Home---props', ssrData);\n    const [homeData, setHomeData] = (0, react_1.useState)(ssrData);\n    (0, hooks_1.requestInitialData)(props, Home, { data: ssrData });\n    //getProps获取props中的ssrData，重构和服务端渲染时props有值，第三个参数为默认值\n    // const [Home, setHome] = useState(ssrData);\n    //在单页面路由页面跳转，渲染组件时，requestInitialData调用getInitialProps\n    // requestInitialData(props, Home, { list: setHome });\n    // const [data, setData] = useState<any>(ssrData);\n    // console.log('Home====data', Home);\n    return react_1.default.createElement(\"div\", { onClick: goAbout }, \"Home111111\");\n};\nHome.getInitialProps = () => __awaiter(void 0, void 0, void 0, function* () {\n    // let list = [];\n    // const res: any = request.get('/api/Home');\n    // if (!res.errCode) list = res.data;\n    return {\n        props: {\n            ssrData: 'List Page',\n        },\n    };\n});\nHome.title = 'Home';\nexports[\"default\"] = Home;\n\n\n//# sourceURL=webpack://react-ssr/./app/client/pages/Home.tsx?");

/***/ }),

/***/ "./app/client/router/index.tsx":
/*!*************************************!*\
  !*** ./app/client/router/index.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/*\n * @Author: Klien\n * @Date: 2022-02-03 21:38:17\n * @LastEditTime: 2022-02-07 17:02:46\n * @LastEditors: Klien\n */\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nconst Home_1 = __importDefault(__webpack_require__(/*! ../pages/Home */ \"./app/client/pages/Home.tsx\"));\nconst About_1 = __importDefault(__webpack_require__(/*! ../pages/About */ \"./app/client/pages/About.tsx\"));\nconst routers = [\n    {\n        path: '/',\n        component: Home_1.default,\n    },\n    {\n        path: 'about',\n        component: About_1.default,\n    },\n];\nconst Router = (props) => (react_1.default.createElement(react_router_dom_1.Routes, null,\n    react_1.default.createElement(react_router_dom_1.Route, { path: '/' }, routers.map((router, i) => (react_1.default.createElement(react_router_dom_1.Route, { key: i, index: i === 0, path: router.path, element: react_1.default.createElement(router.component, Object.assign({}, props)) }))))));\nexports[\"default\"] = Router;\n\n\n//# sourceURL=webpack://react-ssr/./app/client/router/index.tsx?");

/***/ }),

/***/ "./app/server/index.ts":
/*!*****************************!*\
  !*** ./app/server/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/*\n * @Author: Klien\n * @Date: 2022-02-05 13:28:07\n * @LastEditTime: 2022-02-08 09:08:32\n * @LastEditors: Klien\n */\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst render_1 = __webpack_require__(/*! ./render */ \"./app/server/render.tsx\");\nconst server = (0, express_1.default)();\nserver.set('view engine', 'ejs');\nserver.set('views', path_1.default.join(__dirname, 'views'));\nserver.use('/', express_1.default.static(path_1.default.join(__dirname, 'static')));\nserver.get('/', (req, res) => {\n    const manifest = fs_1.default.readFileSync(path_1.default.join(__dirname, 'static/manifest.json'), 'utf-8');\n    const assets = JSON.parse(manifest);\n    const component = (0, render_1.render)(req);\n    res.render('client', { assets, component });\n});\nserver.listen(3003, () => {\n    console.log(`Server running on http://localhost:3003`);\n});\n\n\n//# sourceURL=webpack://react-ssr/./app/server/index.ts?");

/***/ }),

/***/ "./app/server/render.tsx":
/*!*******************************!*\
  !*** ./app/server/render.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.render = void 0;\n/*\n * @Author: Klien\n * @Date: 2022-02-05 21:55:48\n * @LastEditTime: 2022-02-06 14:11:06\n * @LastEditors: Klien\n */\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nconst server_2 = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\nconst app_1 = __importDefault(__webpack_require__(/*! ../client/components/app */ \"./app/client/components/app.tsx\"));\nconst html = (url) => (\n// <Provider store={store}>\nreact_1.default.createElement(server_2.StaticRouter, { location: url },\n    react_1.default.createElement(app_1.default, { ssrData: '传入ssrData' }))\n// </Provider>\n);\nconst render = (req) => (0, server_1.renderToString)(html(req.baseUrl));\nexports.render = render;\n\n\n//# sourceURL=webpack://react-ssr/./app/server/render.tsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./app/server/index.ts");
/******/ 	
/******/ })()
;