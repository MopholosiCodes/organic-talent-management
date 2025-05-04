import React from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/BecomeForm.scss";

export const BecomeForm = (props) => {
  const {page, setPage} = props;

  const initialValues = {
    gender: "",
    firstName: "",
    middleName: "",
    lastName: "",
    street: "",
    houseNumber: "",
    addition: "",
    postalCode: "",
    city: "",
    country: "",
    dob: "",
    phone: "",
    altPhone: "",
    skinTone: "",
    nationality: "",
    ethnicity: "",
    ethnicitySpecific: "",
    motherTongue: "",
    otherLanguages: "",
    dialects: "",
    newsletter: false,
    terms: false,
    gdpr: false,
    imageZip: null
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    street: Yup.string().required("Required"),
    houseNumber: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    ethnicity: Yup.string().required("Required"),
    ethnicitySpecific: Yup.string().required("Required"),
    nationality: Yup.string().required("Required"),
    skinTone: Yup.string().required("Required"),
    terms: Yup.bool().oneOf([true], "Required"),
    gdpr: Yup.bool().oneOf([true], "Required")
  });

  const BasicInfo = () => (
    <section className="form-section">
      <div className="form-row">
        <Field as="select" name="gender" className="form-input">
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Field>
        <Field name="firstName" placeholder="First name" className="form-input" />
        <Field name="middleName" placeholder="Second name" className="form-input" />
        <Field name="lastName" placeholder="Last name" className="form-input" />
      </div>
      <div className="form-row">
        <Field name="street" placeholder="Street" className="form-input" />
        <Field name="houseNumber" placeholder="House no." className="form-input" />
        <Field name="addition" placeholder="Addition" className="form-input" />
      </div>
      <div className="form-row">
        <Field name="postalCode" placeholder="Postal code" className="form-input" />
        <Field name="city" placeholder="City" className="form-input" />
        <Field as="select" name="country" className="form-input">
          <option value="">Country</option>
          <option value="Nederland">Nederland</option>
        </Field>
      </div>
      <div className="form-row">
        <Field name="dob" type="date" className="form-input" />
        <Field name="phone" placeholder="Phone" className="form-input" />
        <Field name="altPhone" placeholder="Alt. phone" className="form-input" />
      </div>
    </section>
  );

  const HeritageInfo = () => (
    <section className="form-section">
      <div className="form-row">
        <Field name="skinTone" placeholder="Skin tone" className="form-input" />
        <Field as="select" name="nationality" className="form-input">
          <option value="">Nationality</option>
          <option value="NL">NL</option>
          <option value="BE">BE</option>
        </Field>
      </div>
      <div className="form-row">
        <Field name="ethnicity" placeholder="Ethnicity" className="form-input" />
        <Field name="ethnicitySpecific" placeholder="Ethnicity (specific)" className="form-input" />
      </div>
      <div className="form-row">
        <Field name="motherTongue" placeholder="Mother tongue" className="form-input" />
        <Field name="otherLanguages" placeholder="Other languages" className="form-input" />
        <Field name="dialects" placeholder="Dialects" className="form-input" />
      </div>
    </section>
  );

  const Checkbox = () => (
    <section className="checkbox-section">
      <label className="checkbox-label">
        <Field type="checkbox" name="newsletter" />
        I want to subscribe to the newsletter
      </label>
      <label className="checkbox-label">
        <Field type="checkbox" name="terms" />
        I have read and agree to the terms and conditions
      </label>
      <label className="checkbox-label">
        <Field type="checkbox" name="gdpr" />
        I agree to the GDPR terms
      </label>
    </section>
  );

  const UploadZip = ({ setFieldValue }) => (
    <div className="upload-section">
      <h2 className="form-title">UPLOAD YOUR IMAGES / UPLOAD YOUR IMAGES</h2>
      <p className="upload-note">
        <strong>Please note:</strong> Read the <span className="green">do's</span> and <span className="red">don'ts</span> below carefully before uploading photos!
      </p>
      <div className="upload-box">
        <label htmlFor="imageZip">
          <div className="upload-area">
            <p><strong>Drag and drop your images to upload</strong></p>
            <p>or click here to select image</p>
            <p>or click to select your images</p>
          </div>
          <input
            id="imageZip"
            name="imageZip"
            type="file"
            accept=".zip"
            className="upload-input"
            onChange={(event) => {
              setFieldValue("imageZip", event.currentTarget.files[0]);
            }}
          />
        </label>
      </div>
    </div>
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (page === 1) {
          setPage(2);
        } else {
          console.log(values);
        }
      }}
    >
      {({ setFieldValue }) => (
        <FormikForm className="form-container">
          {page === 1 && (
            <>
              <BasicInfo />
              <HeritageInfo />
              <Checkbox />
              <button onClick={() => setPage(2)} className="submit-button">
                SAVE & CONTINUE
              </button>
            </>
          )}
          {page === 2 && (
            <div className="form-section">
              <UploadZip setFieldValue={setFieldValue} />
              <div className="form-buttons">
                <button type="button" className="submit-button" onClick={() => setPage(1)}>
                  BACK | PREVIOUS
                </button>
                <button type="submit" className="submit-button">
                  SAVE & CONTINUE
                </button>
              </div>
            </div>
          )}
        </FormikForm>
      )}
    </Formik>
  );
};
