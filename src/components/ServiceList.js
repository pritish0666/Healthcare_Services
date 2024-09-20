import React from "react";

const ServiceList = ({ services, setEditingService, deleteService }) => {
  return (
    <div className="service-list">
      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        <ul>
          {services.map((service) => (
            <li key={service.id} className="service-item">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p>Price: ${service.price}</p>
              <button onClick={() => setEditingService(service)}>Edit</button>
              <button onClick={() => deleteService(service.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceList;
