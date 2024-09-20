import React, { useState } from "react";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm";
import "./App.css";

const App = () => {
  const [services, setServices] = useState([
    {
      name: "Sagar Hospital",
      description: "Best In Kumarswamy Layout",
      price: 500000,
      id: 1,
    },
    {
      name: "Manipal Hospital 2",
      description: "Best Doctor & Treatment",
      price: 200000,
      id: 2,
    },
    {
      name: "Vashavi Hospital",
      description: "Top Notch Treatment",
      price: 100000,
      id: 3,
    },
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  const addService = (service) => {
    const newId =
      services.length > 0 ? Math.max(...services.map((s) => s.id)) + 1 : 1;
    setServices([...services, { ...service, id: newId }]);
    setIsPopupOpen(false);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setEditingService(null);
    setIsPopupOpen(false);
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const handleEditClick = (service) => {
    setEditingService(service);
    setIsPopupOpen(true);
  };

  return (
    <div className="app-container">
      <h1>Healthcare Services</h1>
      <button className="add-btn" onClick={() => setIsPopupOpen(true)}>
        Add Service
      </button>
      <ServiceList
        services={services}
        setEditingService={handleEditClick}
        deleteService={deleteService}
      />
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <ServiceForm
              addService={addService}
              updateService={updateService}
              editingService={editingService}
              closePopup={() => setIsPopupOpen(false)}
            />
            <button className="close-btn" onClick={() => setIsPopupOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
