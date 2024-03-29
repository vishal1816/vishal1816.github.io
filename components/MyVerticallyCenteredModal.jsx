import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import React, { useState } from 'react';
import styles from '../styles';
import axios from 'axios';



function MyVerticallyCenteredModal(props) {
  const [postpaidResult, setPostpaidResult] = useState(undefined);

  const rechargePostpaid = async () => {
    var data = { name:'name', phone:'mobile',age:'age',gender:'gender' };
    var config = {
      method: 'post',
      url: 'https://mha.codeblazar.com/acl/send_email.php?',
      // headers: {
      //   ...data.getHeaders(),
      // },
      data: data,

    };

    axios(config)
      .then(function (response) {
        // console.log(response.data);
        let data = [];
        data.push(response.data);
        setPostpaidResult(data);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Interest Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <form>
          <label> Name

            <input type='text' placeholder='Name'></input>
          </label><br />
          <label> Phone No.

            <input type='tel:' placeholder='Phone No.'></input>
          </label><br />

          <label> Gender

            <input type='text' placeholder='Gender'></input>
          </label><br />
          <label> Age

            <input type='number' placeholder='Age'></input>
          </label><br />

          <button onClick={()=>{
            rechargePostpaid()
           }}  style={{
            borderColor: 'lightrey',
            borderWidth: 1,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 26,
            paddingRight: 26,
            background: '#0c1024',
            color: 'white',
            borderRadius: 8,
          }} type='submit'> Submit </button>






        </form>





      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button style={{
        color: "white",
        fontSize: 18,
        background: "darkblue",
      }} variant="danger" onClick={() => setModalShow(true)}>
        Submit Interest
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;