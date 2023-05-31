import type { NextPage } from 'next'
import React, { useEffect, useState } from "react";
import { Avatar, Typography } from "@mui/material";
import { FieldArray, Form, Formik, getIn } from 'formik';
import Image from "next/image";
import { gradesInitialValues } from "./constants/grades";
import SelectGrades from './components/SelectGrades';
import { validatorGrades } from './helpers/validator';
import { arrOfObjToObj } from './helpers/text';

const Home: NextPage = () => {
  const [result, setResult] = useState<any>([]);

  const saveSubmitValue = (value: any) => {
      const tempArr1: any[] = [], tempArr2: any[] = [], tempArr3: any[] = [], tempArr4: any[] = [];

      if (value?.grades) {
        value?.grades.forEach((grade: any) => {
          Object.keys(grade).forEach((key: string) => {
              if (key === 'aspek_penilaian_1') {
                  tempArr1.push({
                    key: [grade.name],
                    value: grade.aspek_penilaian_1
                  })
              } else if (key === "aspek_penilaian_2") {
                  tempArr2.push({
                    key: [grade.name],
                    value: grade.aspek_penilaian_2
                  })
              } else if (key === "aspek_penilaian_3") {
                  tempArr3.push({
                    key: [grade.name],
                    value: grade.aspek_penilaian_3
                  })
              } else if (key === "aspek_penilaian_4") {
                  tempArr4.push({
                    key: [grade.name],
                    value: grade.aspek_penilaian_4
                  })
              }
          });
        });
      }

      setResult([
        {
          aspek_penilaian_1: arrOfObjToObj(tempArr1)
        },
        {
          aspek_penilaian_2: arrOfObjToObj(tempArr2)
        },
        {
          aspek_penilaian_3: arrOfObjToObj(tempArr3)
        },
        {
          aspek_penilaian_4: arrOfObjToObj(tempArr4)
        },
      ]);
  }

  return <div className='home-wrapper'>
        <Typography variant="h4">
          Input
        </Typography>
        <Typography variant="subtitle1" mt={2} mb={5} >
          Masukkan Nilai kedalam input, jika ingin menambahkan mahasiswa tekan icon "ADD", untuk menghapus tekan icon "TRASH".
        </Typography>

        <div className="input-table">
            <div className="head-wrapper flex items-center justify-between">
                {
                    [...Array(6)].map((item, idx) => {
                        if (idx === 0 || idx === 5) {
                            return <div key={idx} className="head">
                                {idx === 0 ? 'Nama' : 'Action'}
                            </div>
                        }
                        return <div className="head" key={idx}>Aspek Penilaian {idx}</div>
                    })
                }
            </div>
            <Formik
                initialValues={gradesInitialValues}
                validationSchema={validatorGrades}
                onSubmit={(values: any) => {
                    saveSubmitValue(values);
                }}
            >
                {({ values, setFieldValue, errors }) => {
                    return (<Form className="form-formik">
                        <FieldArray name="grades">
                            {({ remove, push }) => <div>
                                        {
                                            values.grades.length > 0 && values.grades.map((grade, index) => {
                                                return <div className="body-wrapper flex items-center justify-between" key={index}>
                                                    <div className='body'>
                                                        <div className="flex gaps-16 items-center">
                                                            <Avatar src="/user.png" />
                                                            <input className='input-name' type="text" value={`mahasiswa_${index + 1}`} disabled />
                                                        </div>
                                                    </div>
                                                    <div className='body'>
                                                      <SelectGrades
                                                        name={`grades.${index}.aspek_penilaian_1`}
                                                        value={grade.aspek_penilaian_1}
                                                        errorMessage={getIn(errors,`grades[${index}].aspek_penilaian_1`)}
                                                        onChange={(e: any) => {
                                                          setFieldValue(
                                                            `grades.${index}.aspek_penilaian_1`,
                                                            e
                                                          );
                                                        }}
                                                      />
                                                    </div>
                                                    <div className='body'>
                                                      <SelectGrades
                                                        name={`grades.${index}.aspek_penilaian_2`}
                                                        value={grade.aspek_penilaian_2}
                                                        errorMessage={getIn(errors,`grades[${index}].aspek_penilaian_2`)}
                                                        onChange={(e: any) => {
                                                          setFieldValue(
                                                            `grades.${index}.aspek_penilaian_2`,
                                                            e
                                                          );
                                                        }}
                                                      />
                                                    </div>
                                                    <div className='body'>
                                                      <SelectGrades
                                                        name={`grades.${index}.aspek_penilaian_3`}
                                                        value={grade.aspek_penilaian_3}
                                                        errorMessage={getIn(errors,`grades[${index}].aspek_penilaian_3`)}
                                                        onChange={(e: any) => {
                                                          setFieldValue(
                                                            `grades.${index}.aspek_penilaian_3`,
                                                            e
                                                          );
                                                        }}
                                                      />
                                                    </div>
                                                    <div className='body'>
                                                      <SelectGrades
                                                        name={`grades.${index}.aspek_penilaian_4`}
                                                        value={grade.aspek_penilaian_4}
                                                        errorMessage={getIn(errors,`grades[${index}].aspek_penilaian_4`)}
                                                        onChange={(e: any) => {
                                                          setFieldValue(
                                                            `grades.${index}.aspek_penilaian_4`,
                                                            e
                                                          );
                                                        }}
                                                      />
                                                    </div>
                                                    <div className='body flex items-center justify-between'>
                                                        <div className="flex items-center justify-between gaps-16">
                                                            {index === values.grades.length - 1 && <Image
                                                                className="cursor-pointer"
                                                                src="/add.png"
                                                                alt="add"
                                                                onClick={() =>
                                                                    push({
                                                                        name: `mahasiswa_${index+1}`,
                                                                        aspek_penilaian_1: '',
                                                                        aspek_penilaian_2: '',
                                                                        aspek_penilaian_3: '',
                                                                        aspek_penilaian_4: '',
                                                                    })
                                                                }
                                                                width={20}
                                                                height={20}
                                                            />}
                                                            {values.grades.length > 1 && index > 0 && (
                                                                <Image
                                                                    className="cursor-pointer"
                                                                    src="/delete.png"
                                                                    alt="delete"
                                                                    onClick={() => remove(values.grades.length - 1)}
                                                                    width={20}
                                                                    height={20}
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                }
                        </FieldArray>
                        <div className="button-wrapper flex items-center justify-end">
                          <button className='default-button' type="submit">Simpan</button>
                        </div>
                    </Form>)
                }}
            </Formik>
        </div>

        <Typography variant="h4">
          Output
        </Typography>
        <Typography variant="subtitle1" mt={1} mb={5} >
          Berikut adalah hasil dari JSON input diatas.
        </Typography>

        {
          result && result.length > 0 && result.map((item: any, index: number) => {
            return <div className='result' key={index}>
              <pre>{JSON.stringify(item)}</pre>
            </div>
          })
        }
        
    </div>
}

export default Home
