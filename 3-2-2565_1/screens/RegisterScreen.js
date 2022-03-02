import {StyleSheet, View, SafeAreaView} from 'react-native';
import React from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Icon,
} from 'native-base';
import axios from 'axios';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';

const validateSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'ชื่อต้องมีความยาวอย่างน้อย 3 ตัวอักษร')
    .max(20, 'ชื่อต้องมีความยาวไม่เกิน 20 ตัวอักษร')
    .required('กรุณากรอกชื่อ'),
  email: Yup.string().email('อีเมลไม่ถูกต้อง').required('กรุณากรอกอีเมล'),
  password: Yup.string()
    .min(8, 'รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร')
    .required('กรุณากรอกรหัสผ่าน'),
});

const RegisterScreen = ({navigation}) => {
  return (
    <Container>
      <Content padder>
        <Formik
          // the value name and startnig value
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validateSchema}
          onSubmit={async values => {
            // same shape as initial values
            // console.log(values);
            // alert(JSON.stringify(values));
            try {
              const url = 'https://api.codingthailand.com/api/register';
              const res = await axios.post(url, {
                name: values.name,
                email: values.email,
                password: values.password,
              });
              alert(res.data.message);
              navigation.navigate('Home');
            } catch (error) {
              alert(error.response.data.errors.email[0]);
            }
          }}>
          {/*errors is for validating, touched is for when component is unclicked*/}
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setSubmitting,
          }) => (
            <Form>
              <Item
                fixedLabel
                error={errors.name && touched.name ? true : false}>
                <Label>Name</Label>
                <Input
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
                {errors.name && touched.name && <Icon name="close-circle" />}
              </Item>
              {errors.name && touched.name && (
                <Item>
                  <Label style={{color: 'red'}}>{errors.name}</Label>
                </Item>
              )}
              <Item
                fixedLabel
                last
                error={errors.email && touched.email ? true : false}>
                <Label>Email</Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && <Icon name="close-circle" />}
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{color: 'red'}}>{errors.email}</Label>
                </Item>
              )}
              <Item
                fixedLabel
                last
                error={errors.password && touched.password ? true : false}>
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry={true}
                />
                {errors.password && touched.password && (
                  <Icon name="close-circle" />
                )}
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{color: 'red'}}>{errors.password}</Label>
                </Item>
              )}
              <Button
                block
                large
                style={{marginTop: 30, backgroundColor: '#f75d59'}}
                onPress={() => {
                  handleSubmit();
                }}
                // If submitted, disable button
                disabled={isSubmitting}>
                
                <Text
                  style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                  Register
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default RegisterScreen;