import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 80,
    marginTop: 30,
    backgroundColor: '#eabfcb',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    paddingHorizontal: 60, 
 
  },
  headerImage: {
    position: 'absolute',
    width: 50, 
    height: 70, 
    
  },
  headerImage2: {
    position: 'absolute',
    width: 50, 
    height: 70, 
    marginLeft:300,
    
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    padding: 20,
    marginTop: 100, 
  },
  textBody: {
    fontSize: 18,
    marginBottom: 20,
    width: '100%',
    textAlign: 'left',
  },
  flatList: {
    paddingTop: 50,
    width: '100%',
  },
  flatListItem:{
    display: 'flex',
    alignItems: 'center',
    marginBottom:30,
  },
  flatListText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flatListImage: {
    width: 150,
    height: 100,
  },
});

export default styles;