import { Text, View, FlatList, Image} from 'react-native';
import styles from '../styles/styles';
import data from '../data/data';

const DynamicList = () => {
    return (
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.flatListItem}>
            <Image source={{ uri: item.link }} style={styles.flatListImage} />
            <Text style={styles.flatListText}>{item.name}</Text>
            <Text style={styles.flatListText}>Precio: ${item.price}</Text>
          </View>
        )}
        contentContainerStyle={styles.flatList}
      />
    );
  };
  
  export default DynamicList;