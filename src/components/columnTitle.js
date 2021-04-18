import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles.module.css';

function ColumnTitle({title}) {
  return (
    <p className={classes.columnTitle}>
      {title}
    </p>
  )
};

ColumnTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ColumnTitle;