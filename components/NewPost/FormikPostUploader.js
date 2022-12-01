import {yupToFormErrors} from 'formik';
import React, {useState} from 'react';
import * as Yup from 'yup';

const uploadPostSchema = Yup.object().shape({
  image: Yup.string().required('A file is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character'),
});
function FormikPostUploader(props) {
  const [thumbnailURL, setthumbnailURL] = useState();
  return <div></div>;
}

export default FormikPostUploader;
