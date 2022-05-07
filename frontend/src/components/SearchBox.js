import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : '/search');
  };

  const [isActive, setActive] = useState('');
  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className={isActive ? 'search active' : 'search'}>
      <Form className="searchform" onSubmit={submitHandler}>
        <InputGroup>
          <FormControl type="text" className="searchinput" name="q" id="q" onChange={(e) => setQuery(e.target.value)} placeholder="search products..." aria-label="Search Products" aria-describedby="button-search"></FormControl>
          <Button variant="outline-danger" type="submit" id="button-search">
            <i className="fas fa-search"></i>
          </Button>
        </InputGroup>
      </Form>
      <button className="searchbtn" onClick={ToggleClass}>
        <i className="fas fa-search searchicon"></i>
        <i className="fas fa-times xicon"></i>
      </button>
    </div>
  );
}
