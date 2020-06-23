import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import EditNavigationForm from "../edit-navigation-from";
import HttpService from "../../services/http-service";
import "bootstrap/dist/css/bootstrap.min.css";

const EditNavigationModal = () => {
  const [show, setShow] = useState(false);
  const [navigation, setNavigation] = useState();
  const [form, setForm] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchNavigation = async () => {
    const http = new HttpService();
    return await http.getSectionByType("navigation");
  };

  useEffect(() => {
    fetchNavigation().then((data) => setNavigation(data));
  }, []);

  if (!navigation) {
    return <p>Loading...</p>;
  }

  const updateData = (form) => {
    setForm(form);
  };

  const submitForm = () => {
    const http = new HttpService();
    http.updateSection(form);
    
  };

  return (
    <div>
      <Button variant="success" onClick={handleShow}>
        Edit Navigation
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Navigation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditNavigationForm data={navigation} updateData={updateData} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={submitForm}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditNavigationModal;
