"use client";

import { useState } from "react";
import clsx from "clsx";
import styles from "./calendar.module.css";

const unavailableDates = new Set([
  "2024-12-25",
  "2024-12-31",
  "2024-12-14",
  "2024-12-21",
  "2024-12-28",
  "2025-01-01",
  "2025-01-15",
  "2025-01-22",
]);

export function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const calendarDays = [];

  const prevMonthLastDay = new Date(currentYear, currentMonth, 0); // Last day of previous month
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const date = new Date(
      currentYear,
      currentMonth - 1,
      prevMonthLastDay.getDate() - i
    );
    const dateString = date.toISOString().split("T")[0];
    calendarDays.push({
      date,
      isCurrentMonth: false,
      isToday: false,
      isSelected: false,
      isUnavailable: true,
      dateString,
    });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    const dateString = date.toISOString().split("T")[0];
    const isToday = date.toDateString() === today.toDateString();
    const isSelected = selectedDate?.toDateString() === date.toDateString();
    const isUnavailable = unavailableDates.has(dateString) || date < today;

    calendarDays.push({
      date,
      isCurrentMonth: true,
      isToday,
      isSelected,
      isUnavailable,
      dateString,
    });
  }

  const remainingDays = 42 - calendarDays.length;
  for (let day = 1; day <= remainingDays; day++) {
    const date = new Date(currentYear, currentMonth + 1, day);
    const dateString = date.toISOString().split("T")[0];
    calendarDays.push({
      date,
      isCurrentMonth: false,
      isToday: false,
      isSelected: false,
      isUnavailable: true,
      dateString,
    });
  }

  const handleDateSelect = (day) => {
    if (!day.isUnavailable && day.isCurrentMonth) {
      setSelectedDate(day.date);
    }
  };

  const navigateMonth = (direction) => {
    setCurrentDate(
      new Date(currentYear, currentMonth + (direction === "next" ? 1 : -1), 1)
    );
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarContainer}>
        {/* Calendar Header */}
        <div className={styles.calendarHeader}>
          <button
            onClick={() => navigateMonth("prev")}
            className={styles.navButton}
          >
            ‹
          </button>
          <h3 className={styles.monthTitle}>
            {monthNames[currentMonth]} {currentYear}
          </h3>
          <button
            onClick={() => navigateMonth("next")}
            className={styles.navButton}
          >
            ›
          </button>
        </div>

        {/* Calendar Grid */}
        <div>
          <div className={styles.dayGrid}>
            {dayNames.map((day) => (
              <div key={day} className={styles.dayHeader}>
                {day}
              </div>
            ))}
          </div>

          <div className={styles.dayGrid}>
            {calendarDays.map((day, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(day)}
                disabled={day.isUnavailable}
                className={clsx(styles.dayButton, {
                  [styles.today]: day.isToday && !day.isSelected,
                  [styles.selected]: day.isSelected,
                  [styles.unavailable]: day.isUnavailable,
                })}
              >
                {day.date.getDate()}
                {day.isUnavailable && day.isCurrentMonth && (
                  <div className={styles.strikeThrough}></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Date Display */}
        {selectedDate && (
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardRow}>
                <div>
                  <p className={styles.cardLabel}>Selected Date</p>
                  <p className={styles.cardDate}>
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <button
                  className={styles.detailsButton}
                  onClick={() => {
                    localStorage.setItem(
                      "selectedDate",
                      selectedDate.toISOString()
                    );
                    window.location.href = "/booking/details";
                  }}
                >
                  Continue to Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={clsx(styles.legendBox, styles.selectedBox)}></div>
            <span>Selected</span>
          </div>
          <div className={styles.legendItem}>
            <div className={clsx(styles.legendBox, styles.todayBox)}></div>
            <span>Today</span>
          </div>
          <div className={styles.legendItem}>
            <div className={clsx(styles.legendBox, styles.unavailableBox)}>
              <div className={styles.strikeThrough}></div>
            </div>
            <span>Unavailable</span>
          </div>
        </div>
      </div>
    </div>
  );
}
