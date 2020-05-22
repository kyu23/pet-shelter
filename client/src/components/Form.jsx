import React, { useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Form = (props) => {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState({});
  
    const addPet = (e) => {
      e.preventDefault();
      const pet = { name, type, description, skill1, skill2, skill3 }

      axios.post("http://localhost:8000/api/pets", pet)
        .then(res => {
          console.log(res);
          if(res.data.errors) {
            setErrors(res.data.errors);
          } else {
            navigate("/");
          }
        })
        .catch(err => console.log(err));
    }

    return(
        <form onSubmit={ addPet }>
        <div className="form-group">
          <label>Name: </label>
          <input type="text" className="form-control" onChange={ e => setName(e.target.value) } />
          { errors.name ? <p className="text-danger">{errors.name.message}</p> : "" }      
        </div>
        <div className="form-group">
          <label>Type: </label>
          <input type="text" className="form-control" onChange={ e => setType(e.target.value) } value = { type } />
          { errors.type ? <p className="text-danger">{errors.type.message}</p> : "" }
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text" className="form-control" onChange={ e => setDescription(e.target.value) } />
          { errors.description ? <p className="text-danger">{errors.description.message}</p> : "" }       
        </div>
        <div className="form-group">
          <label>Skill 1: (optional) </label>
          <input type="text" className="form-control" onChange={ e => setSkill1(e.target.value) } />
        </div>
        <div className="form-group">
          <label>Skill 2: (optional) </label>
          <input type="text" className="form-control" onChange={ e => setSkill2(e.target.value) } />     
        </div>
        <div className="form-group">
          <label>Skill 3: (optional) </label>
          <input type="text" className="form-control" onChange={ e => setSkill3(e.target.value) } />
        </div>
        <input className="btn btn-outline-primary" type="submit" />
        {/* <p>{ JSON.stringify(errors) }</p> */}
      </form>
    );
}

export default Form;