import React, { useState } from 'react';
import Button from '../../UI/Button';
import Card from '../../UI/Card';

import styles from './style.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserFunction = (e) => {
    e.preventDefault();
    if (
      enteredUsername.trim.length === 0 ||
      enteredAge.trim.length === 0
    ) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredAge, enteredUsername);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserFunction}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;