# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

## This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

# Getting Started with Classic Redux:

```cmd
npm i redux react-redux redux-thunk redux-devtools-extension
```

### 1. Write the initialState, reducer and action creators in a Slice.

### 2. Create the redux store by `createStore(rootReducer)` and combine reducers in rootReducer with `combineReducers` redux functions.

### 4. Install `react-redux` and Create a Provider in root of project and pass the store to the Provider.

### 5. Access the store with `useSelector(store=>store.feature)` every where in the application

### 6. We can access dispatch and dispatch an action by `useDispatch(actionCreator())` hook.

### 7. Setup thunk and redux-devtools in redux store:

```js
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);
```

# Getting Started with Redux Toolkit:

```cmd
npm i @reduxjs/toolkit
```

### Redux Store:

```js
import { confugureStore } from '@reduxjs/toolkit';
import customReducer from './features/custom/customSlice';
const store = configureStore({
	reducer: {
		custom: customReducer,
	},
});
export default store;
```

### Redux Slice:

```js
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	state1: initValue1,
	state2: initValue2,
	state3: initValue3,
};
const customSlice = createSlice({
	name: custom,
	initialState,
	reducers: {
		action1(state, action) {
			// update state
		},
		action2: {
			prepare(input1, input2) {
				return {
					payload: { input1, input2 },
				};
			},
			reducer(state, action) {
				// update state
			},
		},
	},
});
export const { action1, action2 } = customSlice.actions;
export default customSlice.reducer;

// Async Action
export function action3(input1, input2) {
	return async function (dispatch, getStore) {};
}
```

### Note: for `Async Actions` we should add a `Custom Action Creator` and and make API calls (or any other Async Action) over there and dispatch the name/action manually.

### Note : We should NEVER make a side effect(like Date Javascript Object) in reducers.
