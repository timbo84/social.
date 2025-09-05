"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
const storedDate = typeof window !== "undefined"
  ? localStorage.getItem("selectedDate")
  : null;

  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: storedDate ? storedDate.split("T")[0] : "",
    eventTime: "",
    guestCount: "",
    venueName: "",
    venueAddress: "",
    venueCity: "",
    venueState: "",
    venueZip: "",
    specialRequests: "",
    hearAboutUs: "",
    extendedHours: false,
    additionalBackdrop: false,
    travelFee: false,
    rushDelivery: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("bookingFormData", JSON.stringify(formData));
    router.push("/booking/cart");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Personal Information */}
      <div className={`card ${styles.card}`}>
        <div className="card-header">
          <h5 className={styles.cardTitle}>Personal Information</h5>
        </div>
        <div className="card-body">
          <div className={styles.gridTwo}>
            <div>
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.gridTwo}>
            <div>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Event Information */}
      <div className={`card ${styles.card}`}>
        <div className="card-header">
          <h5 className={styles.cardTitle}>Event Information</h5>
        </div>
        <div className="card-body">
          <div className={styles.gridTwo}>
            <div>
              <label htmlFor="eventType">Event Type *</label>
              <select
                className="form-select"
                id="eventType"
                value={formData.eventType}
                onChange={(e) => handleInputChange("eventType", e.target.value)}
                required
              >
                <option value="">Select event type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="birthday">Birthday Party</option>
                <option value="graduation">Graduation</option>
                <option value="anniversary">Anniversary</option>
                <option value="holiday">Holiday Party</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="guestCount">Expected Guest Count *</label>
              <select
                className="form-select"
                id="guestCount"
                value={formData.guestCount}
                onChange={(e) =>
                  handleInputChange("guestCount", e.target.value)
                }
                required
              >
                <option value="">Select guest count</option>
                <option value="1-25">1-25 guests</option>
                <option value="26-50">26-50 guests</option>
                <option value="51-100">51-100 guests</option>
                <option value="101-200">101-200 guests</option>
                <option value="200+">200+ guests</option>
              </select>
            </div>
          </div>
          <div className={styles.gridTwo}>
            <div>
              <label htmlFor="eventDate">Event Date *</label>
              <input
                type="date"
                className="form-control"
                id="eventDate"
                value={formData.eventDate}
                onChange={(e) => handleInputChange("eventDate", e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="eventTime">Event Start Time *</label>
              <input
                type="time"
                className="form-control"
                id="eventTime"
                value={formData.eventTime}
                onChange={(e) => handleInputChange("eventTime", e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Venue Information */}
      <div className={`card ${styles.card}`}>
        <div className="card-header">
          <h5 className={styles.cardTitle}>Venue Information</h5>
        </div>
        <div className="card-body">
          {/* Full-width Venue Name */}
          <div>
            <label htmlFor="venueName">Venue Name *</label>
            <input
              type="text"
              className="form-control"
              id="venueName"
              value={formData.venueName}
              onChange={(e) => handleInputChange("venueName", e.target.value)}
              required
            />
          </div>

          {/* Street Address + City */}
          <div className={styles.gridTwo}>
            <div>
              <label htmlFor="venueAddress">Street Address *</label>
              <input
                type="text"
                className="form-control"
                id="venueAddress"
                value={formData.venueAddress}
                onChange={(e) =>
                  handleInputChange("venueAddress", e.target.value)
                }
                required
              />
            </div>
            <div>
              <label htmlFor="venueCity">City *</label>
              <input
                type="text"
                className="form-control"
                id="venueCity"
                value={formData.venueCity}
                onChange={(e) => handleInputChange("venueCity", e.target.value)}
                required
              />
            </div>
          </div>

          {/* State + ZIP */}
          <div className={styles.gridTwo}>
            <div>
              <label htmlFor="venueState">State *</label>
              <input
                type="text"
                className="form-control"
                id="venueState"
                value={formData.venueState}
                onChange={(e) =>
                  handleInputChange("venueState", e.target.value)
                }
                required
              />
            </div>
            <div>
              <label htmlFor="venueZip">ZIP Code *</label>
              <input
                type="text"
                className="form-control"
                id="venueZip"
                value={formData.venueZip}
                onChange={(e) => handleInputChange("venueZip", e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add-On Services */}
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Add-On Services</h3>

        <div className={styles.addOnRow}>
          <label className={styles.addOnLabel}>
            Extended hours (+2 hours) - $200
          </label>
          <input type="checkbox" className={styles.addOnCheckbox} />
        </div>

        <div className={styles.addOnRow}>
          <label className={styles.addOnLabel}>
            Additional backdrop - $150
          </label>
          <input type="checkbox" className={styles.addOnCheckbox} />
        </div>

        <div className={styles.addOnRow}>
          <label className={styles.addOnLabel}>
            Travel fee (outside 25 miles) - $100
          </label>
          <input type="checkbox" className={styles.addOnCheckbox} />
        </div>

        <div className={styles.addOnRow}>
          <label className={styles.addOnLabel}>
            Rush delivery (next day) - $75
          </label>
          <input type="checkbox" className={styles.addOnCheckbox} />
        </div>
      </div>

      {/* Submit */}
      <div className={styles.submitWrap}>
        <button type="submit" className="btn btn-primary btn-lg">
          Continue to Cart
        </button>
      </div>
    </form>
  );
}
