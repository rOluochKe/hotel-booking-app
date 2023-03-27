import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { DatePicker, Select } from "antd";
import { read } from "../actions/hotel";
import { useSelector } from "react-redux";

const { Option } = Select;

const EditHotel = ({ match }) => {
  // redux
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  // state
  const [values, setValues] = useState({
    title: "",
    content: "",
    image: "",
    price: "",
    from: "",
    to: "",
    bed: "",
  });
  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100x100.png?text=PREVIEW"
  );
  // destructuring variables from state
  const { title, content, image, price, from, to, bed } = values;

  useEffect(() => {
    loadSellerHotel();
  }, []);

  const loadSellerHotel = async () => {
    let res = await read(match.params.hotelId);
    // console.log(res);
    setValues({ ...values, ...res.data });
    setPreview(`${process.env.REACT_APP_API}/hotel/image/res.data._id`);
  };

  const handleSubmit = async (e) => {
    //
  };

  const handleImageChange = (e) => {
    // console.log(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
    setValues({ ...values, image: e.target.files[0] });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Edit Hotel</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            show edit form
          </div>
          <div className="col-md-2">
            <img
              src={preview}
              alt="preview_image"
              className="img img-fluid m-2"
            />
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditHotel;
