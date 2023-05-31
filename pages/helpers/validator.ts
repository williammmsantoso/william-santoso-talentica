import * as Yup from 'yup';

export const validatorGrades = Yup.object().shape({
      grades: Yup.array().of(
          Yup.object().shape({
              aspek_penilaian_1: Yup.mixed().required('Mohon pilih Aspek Penilaian 1'),
              aspek_penilaian_2: Yup.mixed().required('Mohon pilih Aspek Penilaian 2'),
              aspek_penilaian_3: Yup.mixed().required('Mohon pilih Aspek Penilaian 3'),
              aspek_penilaian_4: Yup.mixed().required('Mohon pilih Aspek Penilaian 4'),
          }),
      ),
  });