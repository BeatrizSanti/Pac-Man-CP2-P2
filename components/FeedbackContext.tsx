import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FeedbackContext = createContext();

export const useFeedbackContext = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const loadFeedbacks = async () => {
    try {
      const storedFeedbacks = await AsyncStorage.getItem('feedbacks');
      if (storedFeedbacks !== null) {
        setFeedbacks(JSON.parse(storedFeedbacks));
      }
    } catch (error) {
      console.error('Error loading feedbacks', error);
    }
  };

  const saveFeedbacks = async (updatedFeedbacks) => {
    try {
      await AsyncStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
    } catch (error) {
      console.error('Error saving feedbacks', error);
    }
  };

  const addFeedback = (name, comment) => {
    if (name.trim() === '' || comment.trim() === '') {
      return;
    }
    const updatedFeedbacks = [...feedbacks, { author: name, comment }];
    setFeedbacks(updatedFeedbacks);
    saveFeedbacks(updatedFeedbacks);
  };

  const deleteFeedback = async (index) => {
    const updatedFeedbacks = [...feedbacks];
    updatedFeedbacks.splice(index, 1);
    setFeedbacks(updatedFeedbacks);
    saveFeedbacks(updatedFeedbacks);
  };

  return (
    <FeedbackContext.Provider value={{ feedbacks, addFeedback, deleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
