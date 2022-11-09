import Vue from 'nativescript-vue'

import Home from './components/Home'

import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-messaging'; // only needs to be imported 1x
import { AuthorizationStatus } from '@nativescript/firebase-messaging';
// const defaultApp = await firebase().initializeApp();

async function requestUserPermission() {
	const authStatus = await firebase()
		.messaging()
		.requestPermission({
			ios: {
				alert: true,
			},
		});
	const enabled = authStatus === AuthorizationStatus.AUTHORIZED || authStatus === AuthorizationStatus.PROVISIONAL;

	if (enabled) {
		console.log('Authorization status:', authStatus);

		const didRegister = await firebase().messaging()
                .registerDeviceForRemoteMessages();
	}
}

firebase().messaging().getToken().then(token => {
  console.log('FCM Token:', token);
});

requestUserPermission();
firebase()
	.messaging()
	.onMessage(async (remoteMessage) => {
		console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
	});
console.log('app.js ran!');

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
