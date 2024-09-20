import React, { useState, useEffect } from "react";

const ServiceForm = ({
  addService,
  updateService,
  editingService,
  closePopup,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (editingService) {
      setFormData({
        name: editingService.name,
        description: editingService.description,
        price: editingService.price,
      });
    }
  }, [editingService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.price) {
      alert("Please fill in all fields");
      return;
    }

    const service = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price), // Ensure price is a number
    };

    if (editingService) {
      updateService({ ...editingService, ...service });
    } else {
      addService(service);
    }

    // Reset form fields after submission
    setFormData({
      name: "",
      description: "",
      price: "",
    });
  };

  return (
    <form className="service-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Service Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Service Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Service Price"
        value={formData.price}
        onChange={handleChange}
      />
      <button type="submit">
        {editingService ? "Update Service" : "Add Service"}
      </button>
    </form>
  );
};

export default ServiceForm;
