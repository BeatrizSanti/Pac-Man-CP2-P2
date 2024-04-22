import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FeedbackProvider } from './components/FeedbackContext';
import Feedback from './components/Feedback';
import StackRoutes from './routes/drawer'; // Supondo que StackRoutes esteja responsável pela navegação

const App = () => {
  return (
    <FeedbackProvider>
      <StackRoutes />
      {/* Se você quiser renderizar o componente Feedback em vez das rotas, use o código abaixo */}
      {/* <View style={styles.container}>
        <Feedback />
      </View> */}
    </FeedbackProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

