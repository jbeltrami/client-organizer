/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ServiceAccordion from './ServiceAccordion';
import { sortByDate } from '../../helpers/sortByDate';
import _ from 'lodash';

const AllServices = ({ client, services }) => {
  const [servicesToRender, setServicesToRender] = useState();

  useEffect(() => {
    setServicesToRender(services);
  }, [services]);

  const handleYearFilter = e => {
    const val = e.target.value;

    if (val !== 'All') {
      const filteredEntries = servicesToRender.filter(
        el => el[1].date.split('/').pop() === val,
      );

      return setServicesToRender(filteredEntries);
    }

    return setServicesToRender(services);
  };

  const renderFilters = serviceList => {
    const buildFilters =
      serviceList &&
      _.uniq(serviceList.map(e => e[1].date.split('/').pop())).sort(
        (a, b) => b - a,
      );

    return (
      buildFilters &&
      buildFilters.map(e => (
        <button
          className="btn btn-dark m-1"
          key={e}
          onClick={handleYearFilter}
          value={e}
        >
          {e}
        </button>
      ))
    );
  };

  const renderServices = servicesList => {
    if (servicesList && servicesList.length)
      return servicesList.sort(sortByDate).map(e => {
        return <ServiceAccordion {...e[1]} serviceId={e[0]} key={e[0]} />;
      });

    return <></>;
  };

  return (
    <>
      <div className="row mb-3">
        <div className="col-md-12 d-flex flex-row">
          {renderFilters(servicesToRender)}
          {services !== servicesToRender ? (
            <button
              className="btn btn-dark d-inline-block ml-auto"
              key="all"
              value="All"
              onClick={handleYearFilter}
            >
              Clear Filter
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="row align-items-start">
        {renderServices(servicesToRender)}
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const servicesToProps = state.firestore.data.services;
  const passServices =
    servicesToProps &&
    Object.entries(servicesToProps).filter(
      e => e[1].clientId === ownProps.client,
    );
  return { services: passServices };
};

export default compose(
  firestoreConnect(() => ['services']),
  connect(mapStateToProps),
)(AllServices);
