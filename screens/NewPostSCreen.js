import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import AddNewPost from '../components/NewPost/AddNewPost';

function NewPostSCreen(props) {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <AddNewPost />
    </SafeAreaView>
  );
}

export default NewPostSCreen;
