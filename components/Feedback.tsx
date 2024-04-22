import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFeedbackContext } from './FeedbackContext';

import Header from './Header';
import Footer from './Footer';

export default function Feedback({ navigation }) {
  const { feedbacks, addFeedback, deleteFeedback } = useFeedbackContext();
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handlePublish = () => {
    addFeedback(name, comment);
    setName('');
    setComment('');
  };

  const handleDelete = (index) => {
    deleteFeedback(index);
  };

  return (
    <SafeAreaView style={styles.containerBackground}>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}> Deixe seu comentário!! </Text>
          <View style={styles.feedbackContainer}>
            <Text style={styles.title2}>Nome: </Text>
            <TextInput
              style={[styles.input, styles.commentInput]}
              placeholder="Nome"
              value={name}
              onChangeText={text => setName(text)}
              fontSize={15}
            />
            <Text style={styles.title2}>Comentário: </Text>
            <TextInput
              style={[styles.input, styles.commentInput]}
              placeholder=""
              multiline
              value={comment}
              onChangeText={text => setComment(text)}
              fontSize={15}
              color={'white'}
            />
            <TouchableOpacity
              style={styles.publishButton}
              onPress={handlePublish}>
              <Text style={styles.publishButtonText}> Comentar </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.feedbackList}>
            {feedbacks.map((feedback, index) => (
              <View key={index} style={styles.feedbackItem}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={[styles.feedbackName, { backgroundColor: '#000000' }]}>Nome: {feedback.author}</Text>
                  <TouchableOpacity onPress={() => handleDelete(index)}>
                    <MaterialIcons name="delete" size={24} color="red" />
                  </TouchableOpacity>
                </View>
                <Text style={[styles.feedbackComment, { backgroundColor: '#000000' }]}>Comentário: {feedback.comment}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    backgroundColor: '#FFDF00',
    marginTop: 25,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    width: '90%',
    marginTop: 60,
    left: 20,
  },
  title: {
    color: '#000000',
    fontSize: 26,
    fontFamily: 'Minecraft',
    marginBottom: 20,
    marginLeft: 20,
  },
  title2: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Minecraft',
    marginBottom: 15,
    marginTop: 15,
  },
  feedbackContainer: {
    borderWidth: 6,
    borderColor: '#001E97',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#000000',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#001E97',
    borderWidth: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: 'Minecraft',
    backgroundColor: '#000000',
  },
  commentInput: {
    height: 100,
    color: 'white',
  },
  publishButton: {
    backgroundColor: '#001E97',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  publishButtonText: {
    color: 'white',
    fontFamily: 'Minecraft',
  },
  feedbackList: {
    flex: 1,
  },
  feedbackItem: {
    marginBottom: 40,
    padding: 20,
    borderWidth: 5,
    borderColor: '#001E97',
    borderRadius: 10,
    backgroundColor: '#000000',
  },
  feedbackName: {
    fontFamily: 'Minecraft',
    color: 'white',
    marginBottom: 15,
  },
  feedbackComment: {
    fontFamily: 'Minecraft',
    color: 'white',
    marginBottom: 15,
  },
});
