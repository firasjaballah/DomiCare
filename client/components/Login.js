import * as React from "react";
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base"

function Login (){
    const [formData, setData] = React.useState({});
    const [errors,  setErrors] = React.useState({});
    const navigation = useNavigation()
    
    const validate =() =>{
      let validation = true;
      if (formData.email === undefined) {
        errors.email = "email is required";
        validation = false;
    }
      if (formData.password === undefined) {
        errors.password = "Password is required";
        validation = false;
    }
    };
    
    const post = () =>{
      console.log('aaa')
    };
    const onSubmit =()=>{
      console.log('aaa')

    };
        return (
            <NativeBaseProvider>
              <Center flex={1} px="3">
              <Box safeArea p="2" py="8" w="90%" maxW="290">
              <Heading
                size="lg"
                fontWeight="600"
                color="coolGray.800"
                _dark={{
                  color: "warmGray.50",
                }}
              >
                Welcome
              </Heading>
              <Heading
                mt="1"
                _dark={{
                  color: "warmGray.200",
                }}
                color="coolGray.600"
                fontWeight="medium"
                size="xs"
              >
                Sign in to continue!
              </Heading>
        
              <VStack space={3} mt="5">
                <FormControl>
                  <FormControl.Label>Email </FormControl.Label>
                  <Input    onChangeText={(value) =>
                                    setData({ ...formData, email: value })
                                }/>
                </FormControl>
                <FormControl>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input    onChangeText={(value) =>
                                    setData({ ...formData, password: value })
                                } type="password" />
                  <Link
                    _text={{
                      fontSize: "xs",
                      fontWeight: "500",
                      color: "indigo.500",
                    }}
                    alignSelf="flex-end"
                    mt="1"
                  >
                    Forget Password?
                  </Link>
                </FormControl>
                <Button mt="2" colorScheme="cyan">
                  Sign in
                </Button>
                <HStack mt="6" justifyContent="center">
                  <Text
                    fontSize="sm"
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    I'm a new user.{" "}
                  </Text>
                  <Link
                    _text={{
                      color: "indigo.500",
                      fontWeight: "medium",
                      fontSize: "sm",
                    }}
                    onPress={()=>navigation.navigate('SignUpType')}
                  >
                    Sign Up
                  </Link>
                </HStack>
              </VStack>
            </Box>
              </Center>
            </NativeBaseProvider>
          )
}

export default function () {
    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <Login />
            </Center>
        </NativeBaseProvider>
    );
}