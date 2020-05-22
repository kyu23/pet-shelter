import React, { useEffect, useState } from "react";
import axios from "axios";
import {  navigate } from '@reach/router';


const Edit = (props) => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
                console.log(res);
                //fetchPets();
            })
    }, [props])
    
    const editPet = (e) => {
      e.preventDefault();

      const petToUpdate = { name, type, description, skill1, skill2, skill3 }

      axios.put(`http://localhost:8000/api/pets/${props._id}`, petToUpdate)
        .then( res => {
          if(res.data.errors) {
            setErrors(res.data.errors);
          } else {
            navigate(`/pets/${props._id}`);
          }
        })
        .catch(err => console.log(err));
    }

    return(
      <div>
      <p>Edit <b>{ name }</b></p>
      
        <form onSubmit={ editPet }>
            <p>Name: <input type="text" onChange={ e => setName(e.target.value) } value={ name } /></p> {/* 2 way data bind - what does that mean? */}
            { errors.name ? <p>{errors.name.message}</p> : "" }
            <p>Type: <input type="text" onChange={ e => setType(e.target.value) } value={ type } /></p>
            { errors.type ? <p>{errors.type.message}</p> : "" }
            <p>Description: <input type="text" onChange={ e => setDescription(e.target.value) } value={ description } /></p>
            { errors.description ? <p>{errors.description.message}</p> : "" }
            <p>Skill 1: (optional) <input type="text" onChange={ e => setSkill1(e.target.value) } value={ skill1 } /></p>
            <p>Skill 2: (optional) <input type="text" onChange={ e => setSkill2(e.target.value) } value={ skill2 } /></p>
            <p>Skill 3: (optional) <input type="text" onChange={ e => setSkill3(e.target.value) } value={ skill3 } /></p>
            <input type="submit" value="Edit Pet" />
            
        </form>
        </div>
    );

}

export default Edit;