import React from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { Dropdown } from "./Dropdown";
import { 
    categories,
    confection,
    gender,
    hairColor,
    hairLength,
    Looks,
    hairStyles,
    ageGroup,
    height
} from "../data/filter";
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
    imageZip: null,
    height: "",
    shoeSize: "",
    eyeColor: "",
    hairColor: "",
    waistSize: "",
    age: "",
    dressSize: "",
    hipSize: "",
    categories: [], 
    confection: [], 
    hairColor: [],
    hairLength: [], 
    looks: [], 
    hairStyles: [],
    ageGroup: [], 
    heightGroup: []
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
    gdpr: Yup.bool().oneOf([true], "Required"),
    height: Yup.string().required("Required"),
    shoeSize: Yup.string().required("Required"),
    eyeColor: Yup.string().required("Required"),
    hairColor: Yup.string().required("Required"),
    waistSize: Yup.string().required("Required"),
    age: Yup.string().required("Required"),
    dressSize: Yup.string().required("Required"),
    hipSize: Yup.string().required("Required"),
    categories: Yup.array().min(1, "At least one category is required").required("Required"),
    confection: Yup.array().min(1, "At least one confection is required").required("Required"),
    gender: Yup.string().required("Required"),
    hairColor: Yup.array().min(1, "At least one hair color is required").required("Required"),
    hairLength: Yup.array().min(1, "At least one hair length is required").required("Required"),
    looks: Yup.array().min(1, "At least one look is required").required("Required"),
    hairStyles: Yup.array().min(1, "At least one hair style is required").required("Required"),
    ageGroup: Yup.array().min(1, "At least one age group is required").required("Required"),
    heightGroup: Yup.array().min(1, "At least one height group is required").required("Required")
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

    const PhysicalInfo = () => (
      <section className="form-section">
        <div className="form-row">
          <Field name="height" placeholder="Height (cm)" className="form-input" />
          <Field name="shoeSize" placeholder="Shoe size (EU)" className="form-input" />
          <Field name="eyeColor" placeholder="Eye color" className="form-input" />
        </div>
        <div className="form-row">
          <Field name="hairColor" placeholder="Hair color" className="form-input" />
          <Field name="waistSize" placeholder="Waist size (cm)" className="form-input" />
          <Field name="hipSize" placeholder="Hip size (cm)" className="form-input" />
        </div>
        <div className="form-row">
          <Field name="age" placeholder="Age" className="form-input" />
          <Field name="dressSize" placeholder="Dress size (EU)" className="form-input" />
        </div>
      </section>
    );

    const Category = () => (
      <section className="form-section">
      <section className="filter-form__fields-two-col">
        <div className="dropdown">
          <Field name="categories">
            {({ field, form }) => (
              <Dropdown
                name="categories"
                options={categories}
                multiSelect={true}
                value={field.value}
                onChange={(val) => form.setFieldValue("categories", val)}
              />
            )}
          </Field>
        </div>
        <div className="dropdown">
          <Field name="confection">
            {({ field, form }) => (
              <Dropdown
                name="confection"
                options={confection}
                multiSelect={true}
                value={field.value}
                onChange={(val) => form.setFieldValue("confection", val)}
              />
            )}
          </Field>
        </div>
      </section>

      <section className="filter-form__fields-three-col">
        <div className="dropdown">
          <Field name="gender">
            {({ field, form }) => (
              <Dropdown
                name="gender"
                options={gender}
                multiSelect={false}
                value={field.value}
                onChange={(val) => form.setFieldValue("gender", val)}
              />
            )}
          </Field>
        </div>
        <div className="dropdown">
          <Field name="hairColor">
            {({ field, form }) => (
              <Dropdown
                name="hairColor"
                options={hairColor}
                multiSelect={true}
                value={field.value}
                onChange={(val) => form.setFieldValue("hairColor", val)}
              />
            )}
          </Field>
        </div>
        <div className="dropdown">
          <Field name="hairLength">
            {({ field, form }) => (
              <Dropdown
                name="hairLength"
                options={hairLength}
                multiSelect={true}
                value={field.value}
                onChange={(val) => form.setFieldValue("hairLength", val)}
              />
            )}
          </Field>
        </div>
      </section>

      <section className="filter-form__fields-four-col">
        <div className="dropdown">
          <Field name="looks">
            {({ field, form }) => (
              <Dropdown
                name="looks"
                options={Looks}
                multiSelect={true}
                value={field.value}
                onChange={(val) => form.setFieldValue("looks", val)}
              />
            )}
          </Field>
        </div>
        <div className="dropdown">
          <Field name="hairStyles">
            {({ field, form }) => (
              <Dropdown
                name="hairStyles"
                options={hairStyles}
                multiSelect={true}
                value={field.value}
                onChange={(val) => form.setFieldValue("hairStyles", val)}
              />
            )}
          </Field>
        </div>
        <div className="dropdown">
          <Field name="ageGroup">
            {({ field, form }) => (
              <Dropdown
                name="ageGroup"
                options={ageGroup}
                multiSelect={true}
                value={field.value}
                onChange={(val) => form.setFieldValue("ageGroup", val)}
              />
            )}
          </Field>
        </div>
        <div className="dropdown">
          <Field name="heightGroup">
            {({ field, form }) => (
              <Dropdown
                name="heightGroup"
                options={height}
                multiSelect={true}
                value={field.value}
                onChange={(val) => form.setFieldValue("heightGroup", val)}
              />
            )}
          </Field>
        </div>
      </section>
    </section>
  )
  

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
              <Category />
              <HeritageInfo />
              <PhysicalInfo />
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
