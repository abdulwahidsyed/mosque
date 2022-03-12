import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import MyVerticallyCenteredModal from "./Modal/Modal";
import "./Fillout.css";

const Fillout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, message: "" });
  const [startDate, setStartDate] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setformData] = useState([
    {
      name: "name",
      value: "ABDUL WAHID",
      placeholder: "Name",
    },
    {
      name: "email",
      value: "a@a.com",
      placeholder: "Email address",
      type: "email",
    },
    {
      name: "phoneNumber",
      value: "111",
      placeholder: "Phone Number",
    },
  ]);

  const onChangeHandler = (e) => {
    const k = [...formData].map((el) => {
      if (el.name === e.target.name) {
        return {
          ...el,
          value: e.target.value,
        };
      }
      return { ...el };
    });

    k[e.target.name] = {
      ...k[e.target.name],
      value: e.target.value,
    };
    setformData(k);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!startDate) {
      setError({ show: true, message: "Please select date ..." });
      return;
    }
    setModalShow(true);
  };

  const confirmSubmit = () => {
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
        }, 300000);
      })
      .catch((err) => {
        console.log("my err", err);
        setError({
          show: true,
          message: "Something went wrong. Please try again",
        });
        setLoading(false);
        setModalShow(false);
      });
  };

  const clearForm = () => {
    const k = [...formData].map((el) => {
      return {
        ...el,
        value: "",
      };
    });
    setformData(k);
    setStartDate("");
  };

  const closeError = () => {
    setError({ show: false, message: "" });
  };

  return (
    <div className="main-container">
      <Form onSubmit={submitForm}>
        {formData.map((el) => {
          return (
            <Form.Group className="mb-3" key={el.name}>
              <Form.Label>{el.placeholder}</Form.Label>
              <Form.Control
                required
                type={el.type || "text"}
                name={el.name}
                placeholder={el.placeholder}
                value={el.value}
                onChange={(e) => onChangeHandler(e)}
              />
            </Form.Group>
          );
        })}

        <Form.Group className="mb-3" required>
          <Form.Label>Select Date</Form.Label>
          <DatePicker
            selected={startDate}
            minDate={new Date()}
            onChange={(date) => setStartDate(date)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {loading && (
        <div className="spinner-wrap">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {error.show && (
        <div className="alert-wrap" onClick={closeError}>
          <Alert variant="danger" onClose={closeError} dismissible>
            <Alert.Heading>{error.message}</Alert.Heading>
          </Alert>
        </div>
      )}
      {success && (
        <div className="alert-wrap" onClick={() => setSuccess(false)}>
          <Alert
            variant="success"
            onClose={() => setSuccess(false)}
            dismissible
          >
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
          </Alert>
        </div>
      )}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSubmit={confirmSubmit}
        formdata={[
          ...formData,
          {
            value: `${startDate}`,
            placeholder: "Selected Date",
          },
        ]}
      />
    </div>
  );
};

export default Fillout;
