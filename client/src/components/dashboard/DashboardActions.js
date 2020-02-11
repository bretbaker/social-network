import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DashboardActions = ({
  profile: {
    user: { _id }
  }
}) => {
  return (
    <div className='dash-buttons'>
      <Link to={`/profile/${_id}`} className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'></i> View Profile
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
        <i className='fab fa-black-tie text-primary'></i> Add Experience
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary'></i> Add Education
      </Link>
    </div>
  );
};

DashboardActions.propTypes = {
  profile: PropTypes.object.isRequired
};

export default DashboardActions;
