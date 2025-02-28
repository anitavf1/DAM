import { Text, View, ScrollView, Image } from 'react-native';
import styles from '../styles/styles';
import DynamicList from './DynamicList';

export default function MainContainer() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textTitle}>Sylvanian House</Text>
        <Image
          source={require('../assets/gatito_persa.png')} 
          style={styles.headerImage}
        />
        <Image
          source={require('../assets/gatito_persa.png')} 
          style={styles.headerImage2}
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.textBody}>
          Bienvenido a Sylvanian House, donde encontrarás tus ternurines favoritos 💕
        </Text>

        <ScrollView>
          <DynamicList />
        </ScrollView>
      </View>
    </View>
  );
}