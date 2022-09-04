import FormikTextInput from '../FormInput/FormikTextInput';
import { View, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import PrimaryButton from '../PrimaryButton';
import { Formik } from 'formik';
import theme from '../../theme';
import * as yup from 'yup';
import useCreateReview from '../../hooks/useCreateReview';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.colors.appBodyBackground,
    alignItems: 'center',
  }
});

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required')
    .trim(),
  repositoryName: yup
    .string()
    .required('Repository name is required')
    .trim(),
  rating: yup
    .number()
    .positive()
    .min(0, 'Rating should be between 0 and 100 inclusive')
    .max(100, 'Rating should be between 0 and 100 inclusive')
    .required('Rating is required'),
  text: yup
    .string()
    .max(2000)
    .trim()
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" multiline />
      <PrimaryButton text={'Create a review'} onSubmit={onSubmit} />
    </View>
  );
};

export const CreateReviewContainer = ({ onSubmit }) => {

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const data = await createReview({ repositoryName, ownerName, rating, text });
      // for redirecting to the list page after successful logging
      if (data) {
        navigate(`/repository/${data?.createReview?.repositoryId}`, { replace: true });
      }
    } catch (e) {
      console.warn(e);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;