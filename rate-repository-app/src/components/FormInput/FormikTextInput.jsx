import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';
import theme from '../../theme'

import TextInput from './TextInput';
import Text from '../Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.danger,
    paddingLeft: 20,
    marginRight: 'auto'
  },
  field: {
    backgroundColor: theme.colors.inputFieldBackground,
    borderRadius: 5,
    width: "90%",
    height: 45,
    marginTop: 20,
    paddingLeft: 20,
    justifyContent: "center",
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black'
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <View style={showError ? {...styles.field, borderColor: theme.colors.danger} : styles.field}>
        <TextInput
          onChangeText={value => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          error={showError}
          {...props}
        />
      </View>
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;