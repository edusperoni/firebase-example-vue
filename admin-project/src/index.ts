import { initializeApp, cert } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';


const credentials = require('./credentials.json');
const TOKEN = 'YOUR_TOKEN';

const app = initializeApp({
    credential: cert(credentials)
});

getMessaging(app).send({
    token: TOKEN,
    data: {
        title: 'test',
    },
    android: {
        priority: 'high'
    }
})

