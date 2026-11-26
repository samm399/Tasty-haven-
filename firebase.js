import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

import {
    getAuth,
    signInAnonymously,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAfLfYcrSoez7yGiMVoc9biMCp7EKoeTgI",
    authDomain: "tasty-haven-63d82.firebaseapp.com",
    projectId: "tasty-haven-63d82",
    storageBucket: "tasty-haven-63d82.firebasestorage.app",
    messagingSenderId: "724943451833",
    appId: "1:724943451833:web:44c58f93f50542e33ccd68",
    measurementId: "G-4T22YRN793"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export async function customerSignIn() {

    const user = await new Promise(resolve => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            unsubscribe();
            resolve(user);
        });
    });

    if (user) {
        return user;
    }

    const result = await signInAnonymously(auth);

    return result.user;
}