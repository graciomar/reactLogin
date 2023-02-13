import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,  ScrollView,
  KeyboardAvoidingView } from 'react-native';

import MyImageButton from './pages/components/MyImageButton';
import Mytextinput from './pages/components/Mytextinput';
import Mybutton from './pages/components/Mybutton';

const Login = ({ navigation }) => {
  let [userLogin, setUserLogin] = useState('');
  let [userPass, setUserPass] = useState('');

  let register_user = () => {
      //console.log(userLogin, userPass);

      if (!userLogin) {
        alert('Por favor preencha o login !');
        return;
      }
      if (!userPass) {
        alert('Por favor informe a senha !');
        return;
      }

      alert('Erro ao tentar Registrar o Usuário !!!');
    };

  
  return (
    <SafeAreaView style={{ flex: 1 , justifyContent: 'center'}}>
      
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'center' }}>
                
                <Mytextinput
                    placeholder="Entre com o email ou CPF"
                    value={userLogin}
                    style={{ padding: 10 }}
                    onChangeText={
                      (userLogin) => setUserLogin(userLogin)
                    }
                  />

                <Mytextinput
                    placeholder=""
                    secure
                    value={userPass}
                    style={{ padding: 10 }}
                    onChangeText={
                      (userPass) => setUserPass(userPass)
                    }
                  />

                <Mybutton title="Acessar" customClick={register_user} />  
                 
            </KeyboardAvoidingView>
            </ScrollView> 
        </View>    
       
    </SafeAreaView>
  );

};

export default Login;
