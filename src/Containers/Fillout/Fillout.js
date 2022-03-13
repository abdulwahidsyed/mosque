import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import MyVerticallyCenteredModal from "./Modal/Modal";
import "./Fillout.css";
import Input from "../../components/Input/Input";

const Fillout = () => {
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState([
    {
      name: "name",
      placeholder: "Name",
      type: "text",
      label: "Name",
      error: false,
      value: "",
      inpType: "text",
    },
    {
      name: "email",
      placeholder: "@email.com",
      type: "email",
      label: "Email",
      error: false,
      value: "",
      inpType: "text",
    },
    {
      name: "phoneNumber",
      placeholder: "Phone Number",
      type: "number",
      label: "Phone Number",
      error: false,
      value: "",
      inpType: "text",
    },
    {
      name: "amount",
      placeholder: "Amount",
      type: "number",
      label: "Amount",
      error: false,
      value: "",
      inpType: "text",
    },
    {
      name: "date",
      placeholder: "Select Date",
      type: "text",
      label: "Select Date",
      error: false,
      value: "",
      inpType: "date",
    },
  ]);

  const submitForm = (e) => {
    let formIsValid = true;
    const k = [...formData].map((el) => {
      if (!el.value) {
        formIsValid = false;
        return { ...el, error: true };
      }
      return { ...el };
    });
    setFormData(k);
    if (!formIsValid) {
      return;
    }
    setModalShow(true);
  };

  const checkoutHandler = () => {
    setLoading(true);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success");
        // reject("Error");
      }, 3000);
    });
    promise
      .then((res) => {
        clearForm();
        setLoading(false);
        setModalShow(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => {
        console.log("my err", err);
        setLoading(false);
        setModalShow(false);
        
        setTimeout(() => {
          setNetworkError(true);
        }, 3000);
      });
  };

  const clearForm = () => {
    const k = [...formData].map((el) => {
      return {
        ...el,
        value: "",
        error: false,
      };
    });
    setFormData(k);
  };

  const inpChangeHandler = (e) => {
    const k = formData.map((el) => {
      if (el.name === e.target.name) {
        return {
          ...el,
          value: e.target.value,
          error: false,
        };
      }
      return { ...el };
    });
    setFormData(k);
  };

  const dateChangeHandler = (e) => {
    const k = formData.map((el) => {
      if (el.name === "date") {
        return {
          ...el,
          value: e,
          error: false,
        };
      }
      return { ...el };
    });
    setFormData(k);
  };

  return (
    <div className="form-container">
      {formData.map((el) => {
        return (
          <Input
            inp={el}
            onChange={inpChangeHandler}
            dateChangeHandler={dateChangeHandler}
            key={el.name}
          />
        );
      })}
      <Button
        variant="outline-dark"
        className="submit-btn"
        onClick={submitForm}
      >
        Submit
      </Button>

      {loading && (
        <div className="spinner-wrap">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {success && (
        <div className="alert-wrap" onClick={() => setSuccess(false)}>
          <Alert
            variant="success"
            onClose={() => setSuccess(false)}
            dismissible
          >
            <Alert.Heading>Success</Alert.Heading>
          </Alert>
        </div>
      )}
      {networkError && (
        <div className="alert-wrap" onClick={() => setNetworkError(false)}>
          <Alert variant="danger" onClose={() => setNetworkError(false)} dismissible>
            <Alert.Heading>Something went wrong. Please try again.</Alert.Heading>
          </Alert>
        </div>
      )}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSubmit={checkoutHandler}
        formdata={[...formData]}
      />
    </div>
  );
};

export default Fillout;
