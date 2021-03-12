import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddModal({ handleClose, show, addData }) {
    const [name, setName] = useState("");
    const [cases, setCases] = useState("");
    const [region, setRegion] = useState("");
    const [access, setAccess] = useState("");

    return (
        <>
            <Modal show={show} onHide={() => {
                handleClose();
                setName("");
                setCases("");
                setRegion("");
                setAccess("");
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Staff</Modal.Title>
                 </Modal.Header>
                <Modal.Body>
                    <Form.Group >
                        <Form.Label>Name: </Form.Label>
                        <Form.Control type="text" onChange={e => setName(e.target.value)} value={name} placeholder="Ex. Michael Luck"/> 
                        <Form.Label>Cases: </Form.Label>
                        <Form.Control type="text" onChange={e => setCases(e.target.value)} value={cases} placeholder="Ex. 16"/> 
                        <Form.Label>Region: </Form.Label>
                        <Form.Control type="text" onChange={e => setRegion(e.target.value)} value={region} placeholder="Ex. HRM"/> 
                        <Form.Label>Access: </Form.Label>
                        <Form.Control type="text" onChange={e => setAccess(e.target.value)} value={access} placeholder="Ex. User"/>           
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={() => {
                        addData(name, cases, region, access);
                        setName("");
                        setCases("");
                        setRegion("");
                        setAccess("");
                        handleClose();
                    }}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddModal
