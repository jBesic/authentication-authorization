import React from 'react';
import withAuthorization from '../../hoc/withAuthorization/withAuthorization'

const Account = () => {
    return (
        <div className='account'>
            <h1>Account page</h1>
        </div>
    );
}

export default withAuthorization(Account);