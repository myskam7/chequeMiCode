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
  storageBucket:"lucky-essence-182723.appspot.com"
};

firebase.initializeApp(firebaseConfig);



export default class Google extends React.Component {
  state = {
    imageUri: null,
    label: null,
  }

  render() {
    let imageView = null;
    if (this.state.imageUri) {
      imageView = (
        <Image
          style={{ width: 100 + "%", height: 400 }}
          source={{ uri: this.state.imageUri }}
        />
      );
    }

    let labelView = null;
    if (this.state.label) {
      labelView = (
        <Text style={{ margin: 5 }}>
          {this.state.label}
        </Text>
      );
    }

    return (
      <LinearGradient
      colors={['#3498db', '#8e44ad']}
      style={styles.container}
    >

      
        {imageView}
        {labelView}
        <TouchableOpacity
        // colors={'#3498db'}
          style={{ height: 80, width: 100 + "%", margin: 5, padding: 5, backgroundColor: '#F7FFDB', opacity:0.7}}
          onPress={this._pickImage}>
          <Text style={{textAlign:'center', fontSize: 40, color: "gray"}}
         >camScan</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  _pickImage = async () => {
    const {
      cancelled,
      uri,
      base64,
    } = await Expo.ImagePicker.launchCameraAsync({
      base64: true,
    });
    if (!cancelled) {
      this.setState({
        imageUri: uri,
        label: '(loading...)',
      });
    }

    const body = {
      requests:[
        {
          image:{
            content: base64,
          },
          features:[
            {
              type: 'DOCUMENT_TEXT_DETECTION',
              maxResults: 1,
            }
          ]
        },
      ],
    };

    const key = 'AIzaSyBD6nt7yvlejPr9tXo-D6MlDqvHvS9FXZo';
    const response = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${key}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
     
    const parsed = await response.json();
    this.setState({
      label: parsed.responses[0].textAnnotations[0].description,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
