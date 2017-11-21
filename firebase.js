import gcloud from 'google-cloud';
import Expo, {LinearGradient} from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';


import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCjx9JwwuUosMScjTt6ffSCEhDpPqSH0pU",
  authDomain: "lucky-essence-182723.firebaseapp.com",
  databaseURL:  "https://lucky-essence-182723.firebaseio.com",
  storageBucket:"lucky-essence-182723.appspot.com",
  projectId: 'lucky-essence-182723'
};

firebase.initializeApp(firebaseConfig);



export default class Firebase extends React.Component {
  state = {
    imageUri: null,
    label: null,
  }

  render() {
    
    var gcs = gcloud.storage();
    
    var backups = gcs.bucket('backups');
    backups.upload('db.zip', function(err, file) {
      // file.createReadStream();
      // file.getMetadata();
      // ...
    });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// Authentication is automatic
// inside Google Compute Engine.
var gcloud = require('google-cloud')({
    projectId: 'grape-spaceship-123'
  });
  
  



