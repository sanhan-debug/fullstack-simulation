
import { useFormik } from 'formik';
import axios from "axios"
import * as Yup from 'yup';
import '../AddPage/addpage.css'
import Container from 'react-bootstrap/esm/Container';

function AddPage() {

  const formik = useFormik({
    initialValues: {
      imageUrl: '',
      name: "",
      price: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, '15-')
        .min(3, '3+')
        .required('Required'),
    }),
    onSubmit: values => {
      axios.post("http://localhost:3000/products/", values)
        .then(() => console.log("result: " + values))
    },
  });
  return (
    <Container style={{display:'flex', justifyContent:'center'}}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.imageUrl}
        />
        {formik.touched.imageUrl && formik.errors.imageUrl ? (
          <div>{formik.errors.imageUrl}</div>
        ) : null}
        <br />
        <br />
        <label htmlFor="name">Name</label>

        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
        <br />
        <label htmlFor="name">Price</label>

        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div style={{ color: "red" }}>{formik.errors.price}</div>
        ) : null}


        <button type="submit">Submit</button>
      </form>
    </Container>
  );

}

export default AddPage