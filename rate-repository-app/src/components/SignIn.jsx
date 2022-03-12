import FormikTextInput from './FormInput/FormikTextInput';
import { Pressable, View, StyleSheet } from 'react-native';
import Text from './Text';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.colors.appBodyBackground,
    alignItems: 'center',
  },

  signInButton: {
    width:"90%",
    borderRadius:5,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 20,
    backgroundColor:"blue",
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username should contain more than 4 symbols')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least  characters')
    .required('Password is required')
    .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
      <View style={styles.signInButton}>
        <Pressable onPress={onSubmit}>
          <Text fontWeight="bold" fontSize="subheading" color="buttonPrimary">Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;