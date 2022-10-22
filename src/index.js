import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './redux/reducers/rootReducer'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider,getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCNcwcBO_Ei2_SQu59Jdo8wH-3JBcG1ehg",
  authDomain: "resume-yt-final-baecb.firebaseapp.com",
  projectId: "resume-yt-final-baecb",
  storageBucket: "resume-yt-final-baecb.appspot.com",
  messagingSenderId: "541958097980",
  appId: "1:541958097980:web:7195cff0106b3aa2de8739"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore()
const reduxStore=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)));

ReactDOM.render(

    <BrowserRouter>
    <Provider store={reduxStore}>
      <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}
      >   <App /></ReactReduxFirebaseProvider>
         
            </Provider>

  
    </BrowserRouter>
,
  document.getElementById('root')
);