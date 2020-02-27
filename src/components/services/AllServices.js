import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import ServiceAccordion from './ServiceAccordion';

const AllServices = ({ client }) => {
  useFirestoreConnect('services');
  const [filterServices, setFilterServices] = useState({});

  const services = useSelector(({ firestore: { data } }) => {
    if (data.services) {
      const servicesArray = Object.values(data.services);
      const servicesIndex = Object.keys(data.services);

      const returnObj = servicesArray.reduce((acc, singleService, i) => {
        if (singleService.clientId === client)
          return { ...acc, [servicesIndex[i]]: singleService };

        return acc;
      }, {});

      return returnObj;
    }

    return {};
  });

  const renderFilters = () => {
    console.log(typeof services);
    return <div className="col-md-12">Filters go here</div>;
  };

  const renderServices = servicesList => {
    const servicesArray = Object.values(servicesList);
    const servicesIndex = Object.keys(servicesList);

    if (servicesArray && servicesIndex)
      return servicesArray.map((service, i) => {
        return <ServiceAccordion {...service} key={servicesIndex[i]} />;
      });

    return <></>;
  };

  return (
    <>
      <div className="row mb-3">{renderFilters()}</div>
      <div className="row align-items-start">{renderServices(services)}</div>
    </>
  );
};

export default AllServices;
