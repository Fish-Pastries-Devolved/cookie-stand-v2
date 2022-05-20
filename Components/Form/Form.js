import FormComp from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'

function Form(props) {
  [object, setObject] = useState({})

  const handleChange = (e) => {
    let store = {}
    const field = e.target.name;
    const value = e.target.value;
    store[field] = value;
    setObject(store);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createStore(object)
  }

  return (
    <>
      <div>
        <FormComp>
          <FormComp.Group className="mb-3" controlId="storeName">
            <FormComp.Label>Name</FormComp.Label>
            <FormComp.Control type="text" placeholder="storeName" name="name" onChange={handleChange}/>
          </FormComp.Group>
          <FormComp.Group className="mb-3" controlId="storeAvg">
            <FormComp.Label>Average:</FormComp.Label>
            <FormComp.Control type="text" placeholder="Average Cookie Sales Per Hour" name="avg" onChange={handleChange}/>
          </FormComp.Group>
          <FormComp.Group className="mb-3" controlId="storeMin">
            <FormComp.Label>Min:</FormComp.Label>
            <FormComp.Control type="text" placeholder="Min customers" name="min" onChange={handleChange}/>
          </FormComp.Group>
          <FormComp.Group className="mb-3" controlId="storeMax">
            <FormComp.Label>Max:</FormComp.Label>
            <FormComp.Control type="text" placeholder="Max customers" name="max" onChange={handleChange}/>
          </FormComp.Group>
          <Button onClick={handleSubmit}>
            Submit!
          </Button>
        </FormComp>
      </div>
    </>
  )
}

export default Form;