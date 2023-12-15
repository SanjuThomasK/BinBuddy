import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Text
          style={{
            textAlign: 'center',
            color: '#000000',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            alignContent: 'center',fontSize:50
          }}>
          Welcome to BinBuddy
        </Text>
        <TouchableOpacity>
        <Image
          source={{
            uri: 'https://publicdomainvectors.org/photos/johnny_automatic_NPS_map_pictographs_part_44.png',
          }}
          style={{width: 100, height: 100,borderRadius:30}}
        />
        </TouchableOpacity>
        <Text>Press For User Login{'\n'}</Text>
        <TouchableOpacity>
        <Image
          source={{
            uri: 'https://as2.ftcdn.net/v2/jpg/06/35/92/55/1000_F_635925572_zuFuvxFN714NN2UotpY6El5Qc2X2z7R1.jpg',
          }}
          style={{width: 200, height: 100,borderRadius: 45}}
        />
        </TouchableOpacity>
        <Text>Press For Admin Login</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});