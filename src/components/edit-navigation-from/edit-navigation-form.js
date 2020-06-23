import React, { useEffect } from "react";
import { useFormik } from "formik";

const EditNavigationForm = ({ data, updateData }) => {
  const formik = useFormik({
    initialValues: {
      meta: data.meta,
      content: data.content,
      action: data.action,
    },
  });

  useEffect(() => {
    updateData(formik.values)
  }, [formik.values, updateData])

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <p>Title</p>
        <input
          id={`meta.title`}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.meta.title}
        />
      </div>
      <p>Navigation</p>
      {formik.values.content.map((item, index) => {
        return (
          <div key={index}>
            <input
              id={`content[${index}].title`}
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={item.title}
            />
            <input
              id={`content[${index}].url`}
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={item.url}
            />
          </div>
        );
      })}
      <p>Email Address</p>
      {
        <div>
          <input
            id={`action.title`}
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.action.title}
          />
          <input
            id={`action.url`}
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.action.url}
          />
        </div>
      }
    </form>
  );
};

export default EditNavigationForm;
