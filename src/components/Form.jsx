import React from "react"

export const Form = (props) => {
  const {page} = props;
  const BasicInfo = () => {
    return (
      <div className="basic-info-container">
        <section className="">
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
        </section>
        <section className="">
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
        </section>
        <section className="">
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
        </section>
        <section className="">
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
        </section>
      </div>
    )
  }

  const HeritageInfo = () => {
    return (
      <div className="heritage-info-container">
        <section className="">
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
        </section>
        <section className="">
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
        </section>
        <section className="">
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
        </section>
      </div>
    )
  }

  const Checkbox = () => {
    return (
      <div className="checkbox-container">
        <section>
          <p><input type="checkbox" name=""id="" />lorem 123</p>
        </section>
        <section>
          <p><input type="checkbox" name=""id="" />lorem 123</p>
        </section>
        <section>
          <p><input type="checkbox" name=""id="" />lorem 123</p>
        </section>
      </div>
    )
  }

  const FileUpload = () => {
    return (
      <div className="upload-container">
        <input type="file" name="" id="" />
      </div>
    )
  }

  return (
    <div className="form-container">
      {page === 1 && (
        <>
          <BasicInfo />
          <HeritageInfo />
          <Checkbox />
        </>
      )}
      {page === 2 && (
        <>
          <FileUpload />
        </>
      )}
    </div>
  )
}