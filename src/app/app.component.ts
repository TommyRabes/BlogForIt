import { Component } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBNv0LgFz-ikfUxdTSy4xGiAf57t02qtsc",
  authDomain: "multi-business-d9ead.firebaseapp.com",
  projectId: "multi-business-d9ead",
  storageBucket: "multi-business-d9ead.appspot.com",
  messagingSenderId: "1012775254919",
  appId: "1:1012775254919:web:12edbdfe54af136d2ff122",
  measurementId: "G-HZN9TJW09P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BlogForIt';
}
