# Example firebase app with background messages


App id is `org.nativescript.firebaseexamplevue`, change in `nativescript.config.ts` if necessary

1. Clone the app and run `npm run setup`
2. Add `App_Resources/Android/src/google-services.json`
3. Copy your firebase admin service account credentials to `admin-project/src/credentials.json`
4. Run the app `ns run android`
5. Copy the FCM token from console (`JS: FCM Token: YOUR_TOKEN`)
6. Paste FCM token in `admin-project/src/index.ts` (`const TOKEN = 'YOUR_TOKEN';`)
7. Run `npm run sendmessage` to send a FCM data message (runs index.ts)


