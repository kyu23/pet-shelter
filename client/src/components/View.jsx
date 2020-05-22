import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from '@reach/router';

const View = (props) => {

    const [pets, setPets] = useState("");
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState(1);
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [counter, setCounter] = useState(0);

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
        .then(res => {
            console.log(res);
            setId(res.data._id);
            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);
            fetchPets();
            likes();
        })
        .catch(err => console.log(err));
    }, [props]);

    const adoptPet = (id) => {
      axios.delete(`http://localhost:8000/api/pets/${props._id}`)
        .then(res => {
          console.log(res);
          navigate("/");
        })
        .catch(err => console.log(err));
    }

    const fetchPets = () => {
      axios.get("http://localhost:8000/api/pets")
        .then(res => {
          console.log(res);
          setPets(res.data);
        })
        .catch(err => console.log(err));
    }
    
    const likes = () => {
      let likes = 0;
      setCounter(likes + 1);

    }

    return(
      <div>
        <h2>Details about: { name }</h2>
      <div className="col-sm-6 mb-3">
          <div className="card">
        <div className="card-header bg-dark text-white">
        <span className="mr-2">{ name }</span>
        
        <button className="btn btn-sm btn-outline-primary mr-2"><Link to={ "/pet/edit/" + id }>Edit Pet</Link></button>
        <button className="btn btn-sm btn-outline-danger mr-2" onClick={ adoptPet }>Adopt</button>
        
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
            <div class="type">
            <label htmlFor="type"><b>Type:</b>
              <p>{ type }</p>
            </label>
          </div>
          <div class="type">
            <label htmlFor="desc"><b>Description:</b>
              <p>{ description }</p>
            </label>
          </div>
            </div>
            <div className="col">
              <div class="skills">
              <label htmlFor="skill1"><b>Skills:</b>
                <p>{ skill1 }</p>
                <p>{ skill2 }</p>
                <p>{ skill3 }</p>
              </label>
          </div>
            </div> 
          </div>
          
          
          <div class="counter">
          { counter }
          <button onClick= { likes }>Like { name }</button>
        </div>
          </div>
          
        </div>
        
        
      </div>  
      
    </div>
    );
    
}

export default View;