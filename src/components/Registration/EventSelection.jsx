import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircleIcon, XCircleIcon, EyeIcon, X } from "lucide-react";
import { CalendarDays, Clock, MapPin, School } from "lucide-react"; // Added missing imports
import { events } from "../../utils/eventData";

const EventSelection = () => {
  const location = useLocation();
  const userData = location.state || {};
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedEventsByTimeSlot, setSelectedEventsByTimeSlot] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEventDetails, setSelectedEventDetails] = useState(null);
  const [needsAccommodation, setNeedsAccommodation] = useState(null);

  const handleAccommodationSelection = (event) => {
    setNeedsAccommodation(event.target.value);
  };

  const eventSchedule = {
    "Day 1": {
      "9:30 AM - 11:00 AM": [{ id: 9 }, { id: 10 }, { id: 33 }, { id: 43 }, { id: 58 }, { id: 61 }, { id: 62 }, { id: 77 }, { id: 89 }, { id: 101 }, { id: 102 }, { id: 112 }, { id: 117 }, { id: 119 }, { id: 120 }, { id: 123 }],
      "11:30 AM - 1:30 PM": [{ id: 34 }, { id: 12 }],
      "2:00 PM - 3:30 PM": [{ id: 1 }, { id: 13 }, { id: 17 }, { id: 35 }, { id: 40 }, { id: 45 }, { id: 46 }, { id: 47 }, { id: 48 }, { id: 64 }, { id: 65 }, { id: 81 }, { id: 82 }, { id: 92 }, { id: 93 }, { id: 94 }, { id: 106 }, { id: 114 }, { id: 122 }],
      "3:30 PM - 5:00 PM": [{ id: 7 }, { id: 25 }, { id: 36 }, { id: 39 }, { id: 44 }, { id: 54 }, { id: 55 }, { id: 69 }, { id: 70 }, { id: 71 }, { id: 73 }, { id: 74 }, { id: 80 }, { id: 85 }, { id: 97 }, { id: 98 }, { id: 108 }, { id: 109 }],
    },
    "Day 2": {
      "9:30 AM - 11:00 AM": [{ id: 18 }, { id: 22 }, { id: 23 }, { id: 32 },{ id: 76 }, { id: 78 }, { id: 90 }, { id: 91 }, { id: 104 }, { id: 115 }, { id: 121 }, { id: 122 }],
      "11:30 AM - 1:30 PM": [{ id: 19 }],
      "2:00 PM - 3:30 PM": [{ id: 5 }, { id: 6 }, { id: 20 }, { id: 21 }, { id: 28 }, { id: 37 }, { id: 38 }, { id: 42 }, { id: 49 }, { id: 50 }, { id: 51 }, { id: 52 }, { id: 53 }, { id: 66 }, { id: 67 }, { id: 68 }, { id: 83 }, { id: 84 }, { id: 95 }, { id: 96 }, { id: 107 }, { id: 110 }],
      "3:30 PM - 5:00 PM": [{ id: 29 }, { id: 41 }, { id: 56 }, { id: 57 }, { id: 87 }, { id: 99 }, { id: 100 }],
    },
  };

  const paymentOptions = [
    { label: "Day 1", value: "Day 1", price: 200 },
    { label: "Day 2", value: "Day 2", price: 200 },
    { label: "Day 1 & 2 (both)", value: "Both", price: 300 },
  ];

  const handlePaymentSelection = (event) => {
    setSelectedOption(event.target.value);
    setSelectedEventsByTimeSlot({});
  };

  // Handle selection of one event per time slot (mutual exclusion like radio buttons)
  const handleEventSelection = (eventDetails, day, timeSlot) => {
    setSelectedEventsByTimeSlot(prev => {
      const timeSlotKey = `${day}-${timeSlot}`;

      // If clicking the already selected event, deselect it
      if (prev[timeSlotKey]?.id === eventDetails.id) {
        const newState = { ...prev };
        delete newState[timeSlotKey];
        return newState;
      }

      // Otherwise, select this event for this time slot (replacing any previous selection)
      return {
        ...prev,
        [timeSlotKey]: eventDetails
      };
    });
  };

  const handleViewEvent = (e, eventId) => {
    e.stopPropagation(); // Prevent event selection when clicking the eye icon

    const eventDetails = events.find(event => event.id === eventId);
    if (eventDetails) {
      setSelectedEventDetails(eventDetails);
      setModalOpen(true);
    }
  };

  // Modal component definition
  const Modal = ({ isOpen, onClose, eventDetails }) => {
    if (!isOpen || !eventDetails) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
      >
        <div
          className="bg-[#1E0F2D] rounded-xl overflow-hidden w-full max-w-[90%] min-w-[300px] sm:max-w-2xl shadow-2xl 
                     max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="border-b border-purple-800 sticky top-0 bg-[#1E0F2D] z-10">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-purple-100 mb-2">
                    {eventDetails.name}
                  </h2>
                  <p className="text-purple-300 text-sm">{eventDetails.subtitle}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-purple-800/30 rounded-lg transition-colors"
                >
                  <X className="text-purple-200" size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-4 sm:p-6 space-y-6">
            {/* Description */}
            <div>
              <p className="text-purple-200 leading-relaxed">{eventDetails.description}</p>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2 text-purple-300">
                <CalendarDays size={18} />
                <span>{new Date(eventDetails.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <Clock size={18} />
                <span>{eventDetails.startingTime}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <MapPin size={18} />
                <span>{eventDetails.venue}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <School size={18} />
                <span>{eventDetails.organizer}</span>
              </div>
            </div>

            {/* Coordinators */}
            <div className="border-t border-purple-800/30 pt-4">
              <h3 className="text-lg font-semibold text-purple-100 mb-3">Contact</h3>
              <div className="grid gap-4">
                <div className="text-purple-200">
                  <p className="font-medium">Faculty Coordinator</p>
                  <p className="text-purple-300">{eventDetails.facultyCoordinator}</p>
                </div>
                <div className="text-purple-200">
                  <p className="font-medium">Student Coordinators</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                    {eventDetails.studentCoordinators.map((coordinator, index) => (
                      <p key={index} className="text-purple-300">
                        {coordinator.name} - {coordinator.contact}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  const handleNext = () => {
    const selectedEvents = Object.values(selectedEventsByTimeSlot);
    userData.selectedOption = selectedOption;
    userData.accommodation = needsAccommodation;
    window.scrollTo(0, 0);
    navigate("/registration/payment", {

      state: { userData, selectedEvents },
    });
  };

  // Helper function to check if an event is selected for a specific time slot
  const isEventSelected = (eventId, day, timeSlot) => {
    const timeSlotKey = `${day}-${timeSlot}`;
    return selectedEventsByTimeSlot[timeSlotKey]?.id === eventId;
  };

  // Get total number of selected events
  const totalSelectedEvents = Object.keys(selectedEventsByTimeSlot).length;

  // Fixed Custom checkbox component
  const Checkbox = ({ checked, onChange }) => {
    return (
      <div
        className={`w-5 h-5 flex-shrink-0 border rounded flex items-center justify-center transition-colors cursor-pointer
          ${checked
            ? "bg-purple-600 border-purple-400"
            : "bg-purple-900/30 border-purple-700"}`}
        onClick={(e) => {
          e.stopPropagation(); // Stop event from bubbling up
          onChange(e);
        }}
      >
        {checked && (
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </div>
    );
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#1E0F2D] via-[#2A1B3D] to-[#14092A] text-purple-200 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-purple-100 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            Event Selection
          </h1>
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 p-4 rounded-lg border border-purple-800/30">
            <p className="text-lg">
              Welcome, {userData.name || "Participant"}! Choose a <strong>payment option</strong> and select <strong>one event</strong> per time slot.
            </p>
          </div>
        </div>

        {/* Payment Options Table */}
        <div className="mb-6">
          <table className="w-full border border-purple-800 text-purple-100">
            <thead>
              <tr className="bg-purple-900/50">
                <th className="p-3 border border-purple-700">Option</th>
                <th className="p-3 border border-purple-700">Price</th>
                <th className="p-3 border border-purple-700">Select</th>
              </tr>
            </thead>
            <tbody>
              {paymentOptions.map((option) => (
                <tr key={option.value} className="text-center bg-purple-900/30">
                  <td className="p-3 border border-purple-700">{option.label}</td>
                  <td className="p-3 border border-purple-700">₹{option.price}</td>
                  <td className="p-3 border border-purple-700">
                    <input
                      type="radio"
                      name="paymentOption"
                      value={option.value}
                      checked={selectedOption === option.value}
                      onChange={handlePaymentSelection}
                      className="w-5 h-5 accent-purple-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedOption === "Both" && (
          <motion.div
            className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-6 rounded-xl shadow-lg border border-purple-800/30 mt-6 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-purple-100 mb-4">Do you need accommodation?</h2>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="accommodation"
                  value="Yes"
                  checked={needsAccommodation === "Yes"}
                  onChange={handleAccommodationSelection}
                  className="w-5 h-5 accent-purple-500"
                />
                <span className="text-purple-100">Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="accommodation"
                  value="No"
                  checked={needsAccommodation === "No"}
                  onChange={handleAccommodationSelection}
                  className="w-5 h-5 accent-purple-500"
                />
                <span className="text-purple-100">No</span>
              </label>
            </div>
          </motion.div>
        )}


        {/* Events Based on Payment Selection */}
        {selectedOption && (
          <div className="space-y-6">
            {Object.entries(eventSchedule)
              .filter(([day]) => selectedOption === "Both" || selectedOption === day)
              .map(([day, sessions]) => (
                <motion.div
                  key={day}
                  className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl p-6 shadow-lg border border-purple-800/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-4 text-purple-100">{day}</h2>

                  {Object.entries(sessions).map(([timeSlot, sessionEvents]) => {
                    const timeSlotKey = `${day}-${timeSlot}`;
                    const hasSelectionForTimeSlot = !!selectedEventsByTimeSlot[timeSlotKey];

                    return (
                      <div key={timeSlot} className="mb-8">
                        <div className="flex items-center mb-3">
                          <h3 className="text-xl font-semibold text-purple-200">{timeSlot}</h3>
                          {hasSelectionForTimeSlot && (
                            <span className="ml-3 text-xs bg-purple-700/50 px-2 py-1 rounded-full text-purple-100">
                              1 event selected
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {sessionEvents.map(({ id }) => {
                            const eventDetails = events.find((e) => e.id === id);
                            if (!eventDetails) return null;

                            const isSelected = isEventSelected(eventDetails.id, day, timeSlot);

                            return (
                              <div className="relative" key={eventDetails.id}>
                                <motion.div
                                  className={`flex items-start p-4 rounded-md border min-h-16 cursor-pointer
                                    ${isSelected
                                      ? "bg-gradient-to-br from-purple-700/40 to-purple-600/30 border-purple-500"
                                      : "bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-purple-700"}`}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => handleEventSelection(eventDetails, day, timeSlot)}
                                >
                                  {/* Custom Checkbox (with fixed event handling) */}
                                  <div className="flex-shrink-0 mr-3 mt-1">
                                    <Checkbox
                                      checked={isSelected}
                                      onChange={(e) => {
                                        handleEventSelection(eventDetails, day, timeSlot);
                                      }}
                                    />
                                  </div>

                                  {/* Event Name - Text wrapping enabled */}
                                  <div className="flex-grow">
                                    <p className="text-sm text-purple-100 break-words mr-6">
                                      {eventDetails.name}
                                    </p>
                                  </div>
                                </motion.div>

                                {/* Eye button to view event details */}
                                <div
                                  className="absolute top-0 right-0 p-2"
                                >
                                  <button
                                    onClick={(e) => handleViewEvent(e, eventDetails.id)}
                                    className="text-purple-300 hover:text-purple-100 transition-colors p-2"
                                    aria-label="View event details"
                                  >
                                    <EyeIcon size={18} />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              ))}
          </div>
        )}

        {/* Confirm Selection Button */}
        <div className="mt-8 flex justify-center">
          <motion.button
            className="px-10 py-4 bg-gradient-to-br from-purple-600 to-purple-900 text-white rounded-xl font-bold
              hover:from-purple-700 hover:to-purple-950 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
              flex items-center space-x-2 border border-purple-500/30"
            onClick={handleNext}
            disabled={totalSelectedEvents < 1}
            whileHover={{ scale: totalSelectedEvents >= 1 ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
          >
            {totalSelectedEvents < 1 ? <XCircleIcon size={24} /> : <CheckCircleIcon size={24} />}
            <span>Confirm Selection ({totalSelectedEvents})</span>
          </motion.button>
        </div>
      </div>

      {/* Modal - rendered just once at the root level */}
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedEventDetails(null);
        }}
        eventDetails={selectedEventDetails}
      />
    </motion.div>
  );
};

export default EventSelection;