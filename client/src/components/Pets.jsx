import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from '@reach/router';


const Pets = (props) => {

    const [pets, setPets] = useState([]);

    const adoptPet = (id) => {
      axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then(res => {
          console.log(res);
          fetchPets();
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

    useEffect ( () => {
      fetchPets();
    }, [props])

    return(
      <div>
            <h4>These pets are looking for a good home:</h4>
            <table border="1">
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                {pets.map( (p, i) => 
                    <tr key={ i }>
                    <td>{p.name}</td>
                    <td>{p.type}</td>
                    <td>{p.description}</td>        
                    <button><Link to={ "/pets/" + p._id } >Details</Link></button>
                    <button><Link to={ "/pet/edit/" + p._id }>Edit Pet</Link></button>
                    <button onClick={ (e) => adoptPet(p._id) }>Adopt</button> 
                </tr>
                )}
            </tbody>
        </table>
        </div>
    );
}

export default Pets;