import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fieldData } from '../field-set';
import ShowInfo from '../ShowInfo';

const SuccessPage = () => {

  const history = useHistory();

  const isError = useSelector(state => state.error.isError);
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (isError) history.push('/');
  }, [isError, history]);

  useEffect(() => {
    document.title = 'Submitted successfully!';
  }, [])

  return (
    <section>
      <h2>Thank you for your information</h2>
      <form className='submit-container'>
        {fieldData.map((field, idx) => (
          <div className='row-container' key={idx}>
            {(Array.isArray(field) ? field : [field]).map((data, id) => (
              <ShowInfo {...data} key={id} info={user[data.id]} />
            ))}
          </div>
        ))}
        <button type='button' onClick={() => history.push('/')}>Back to your information</button>
      </form>
    </section>
  );
}

export default SuccessPage;