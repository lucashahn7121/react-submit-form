import React from 'react';
import { fieldData } from '../field-set';
import FieldInput from '../FieldInput';
import { useHistory } from 'react-router-dom';
import { checkFormValues } from '../../utils/validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../../features/errorSlice';

import './style.scss';
import { userInfoChange } from '../../features/userSlice';

const SubmitPage = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  
  const user = useSelector(state => state.user);
  const error = useSelector(state => state.error);

  const handleSubmit = (e) => {
    const result = checkFormValues(user, dispatch);
    dispatch(setError(result));
    if (!result.isError) history.push('/success');
  }

  const handleChange = (e, id) => {
    dispatch(userInfoChange({ [id]: e.target.value }));
    dispatch(setError({ isError: false, [id]: '' }))
  }

  return (
    <section>
      <h2>Please enter your information</h2>
      <form className='submit-container'>
        {fieldData.map((field, idx) => (
          <div className='row-container' key={idx}>
            {(Array.isArray(field) ? field : [field]).map((data, id) => (
              <FieldInput
                {...data}
                key={id}
                inputVal={user[data.id]}
                errorMsg={error[data.id]}
                onChange={e => handleChange(e, data.id)}
              />
            ))}
          </div>
        ))}
        <button type='button' onClick={handleSubmit}>Submit</button>
      </form>
    </section>
  );
}

export default SubmitPage;