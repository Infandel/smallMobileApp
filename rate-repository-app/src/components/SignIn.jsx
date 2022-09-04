import FormikTextInput from './FormInput/FormikTextInput';
import { View, StyleSheet } from 'react-native';
import { useNavigate } from "react-router-native";
import PrimaryButton from './PrimaryButton';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.colors.appBodyBackground,
    alignItems: 'center',
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username should contain more than 4 symbols')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
    .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
    // .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
    // .matches(/\d/, "Password must have a number")
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
      <PrimaryButton text={'Sign In'} onSubmit={onSubmit} />
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password })
      // for redirecting to the list page after successful logging
      navigate("/", { replace: true });
    } catch (e) {
      console.warn(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;