import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: "AIzaSyAjFMkQ7VWYIe3uhqDjZ70ypNu9ZJNtdjs",
		authDomain: "test-d75b9.firebaseapp.com",
		databaseURL: "https://test-d75b9.firebaseio.com",
		projectId: "test-d75b9",
		storageBucket: "test-d75b9.appspot.com",
		messagingSenderId: "829222739090"
	}
};

