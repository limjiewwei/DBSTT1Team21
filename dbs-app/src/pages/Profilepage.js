import '../App.css';
import { useEffect, useState, useContext } from 'react'
import { useNavigate } from'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';

const Profilepage = () => {
  const navigate = useNavigate();
  const [userObject, setUserObject] = useState({});
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [checkBox, setCheckBox] = useState("");
  const backButton = () => {
    navigate(-1);
  };

    useEffect(() => {
      // axios.get(`http://localhost:3001/users/${id}`).then((response) => {
      //   setUserObject(response.data)
      // })
      if (userObject.OptIntoPhyStatements == 1) {
        setCheckBox("checked")
      }
    }, [])

    const cancel = () => {
      navigate("/dashboard")
    }
  

    const edit = (id) => {
      // axios.put("http://localhost:3001/users/edit",
      // {
      //   address: address,
      //   email: email,
      //   id: id
      // },
      setUserObject({...userObject, address: address, email: email})
    }

  return (
    <div>
      <Button variant="outline-secondary" onClick={backButton}>Back</Button>
    <form class="profileContainer">
    <h3>Profile Page</h3>
    <div class="form-group">
      <label>Username</label>
      <input disabled type="text" value={userObject.Username} class="form-control" />
    </div>
    <div class="form-group">
      <label>First Name</label>
      <input disabled type="text" value={userObject.Firstname}  class="form-control" />
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input disabled type="text" value={userObject.Lastname}  class="form-control" />
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input value={userObject.Address} onChange={(e) => {setAddress(e.target.value)}} type="passtextword" class="form-control" id="address" />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input value={userObject.Email} onChange={(e) => {setEmail(e.target.value)}} type="text" class="form-control" id="email" />
    </div>
    <div class="form-check">
      <input disabled type="checkbox" class="form-check-input" id="checkBox" checked={checkBox} />
      <label class="form-check-label">Opt in Physical Statements</label>
    </div>
    <button onClick={() => {edit(userObject.id)}} type="submit" class="btn btn-primary">Save</button>
    <button onClick={cancel} type="submit" class="btn btn-primary">Cancel</button>

    </form>
    </div>
  )
}

export default Profilepage
