import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const image = {
  uri: 'https://wallpaperaccess.com/full/2314950.jpg' ,
};

const Login = props => {
        return (
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <ScrollView style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
      <View >
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.view}>
            <Text style={styles.loginHeading}>Login</Text>
            <View>
              <Image
                style={styles.logo}
                source={require('../image/user.png')}
              />
            </View>
            <View style={styles.viewText}>
            <Icon name="user-alt" size={20} color="#86BFFD" />
              <TextInput
              
                onChangeText={text => console.log(text)}
                style={styles.input}
                placeholder="Enter Email"
                placeholderTextColor="#ccc"
              />
            </View>
            <View style={styles.viewText}>
            <Icon name="lock" size={20} color="#86BFFD" />
              <TextInput
                onChangeText={text => console.log(text)}
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry={true}
                placeholderTextColor="#ccc"
              />
            </View>
            <Text style={styles.forgetPassword}>Forgot Password?</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => alert('User Login Successfully!')}>
              <Text style={{color: '#000'}}>Login</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 14,
              }}>
              <Text
                style={{color: '#fff', fontSize: 12, paddingHorizontal: 10}}>
                Dont have an account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Signup')}>
                <Text
                  style={{
                    color: '#7ed6df',
                    fontSize: 14,
                    paddingHorizontal: 10,
                  }}>
                  Signup Now
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{color: '#fff', paddingVertical: 12, fontSize: 20}}>
              ___________OR___________
            </Text>
            <TouchableOpacity style={styles.btnGoogle}>
              <Text style={{color: '#fff', fontSize: 17}}>
                Signin With Google
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  loginHeading: {
    fontSize: 38,
    letterSpacing: 1,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
    marginTop: 80,
  },
  btn: {
    width: '62%',
    borderRadius: 2,
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGoogle: {
    width: '62%',
    borderRadius: 2,
    marginTop: 20,
    backgroundColor: '#86BFFD',
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  forgetPassword: {
    color: '#7ed6df',
    marginTop: 10,
    marginLeft: 110,
  },
  logo: {
    height: 120,
    width: 120,
    marginTop: 15,
    marginBottom: 15,
  },
  viewText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#86BFFD',
    width: '62%',
    marginTop: 12,
  },
});

export default Login;