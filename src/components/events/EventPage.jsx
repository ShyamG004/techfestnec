import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Calendar,
  User,
  Users,
  ArrowLeft,
  MapPin,
  Home,
  List,
} from "lucide-react";
import { useEvents } from "../../utils/eventData";

const styles = {
  fadeOut: {
    animation: "fadeOut 0.3s ease-out forwards",
  },
  fadeIn: {
    animation: "fadeIn 0.3s ease-in forwards",
  },
  keyframes: `
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
};

const EventPage = () => {
  const { id } = useParams();
  const { getEventsById } = useEvents();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [navigating, setNavigating] = useState(false);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles.keyframes;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);
  
  useEffect(() => {
    // Always scroll to top when this page is initially navigated to
    if (performance.navigation.type !== 2) { // Not back/forward navigation
      window.scrollTo(0, 0);
    }
  }, []);
  
  useEffect(() => {
    let isMounted = true;

    if (!id) {
      setLoading(false);
      return;
    }

    if (isMounted) {
      try {
        const fetchedEvent = getEventsById(id);
        if (fetchedEvent) {
          setEvent({
            ...fetchedEvent,
            image: fetchedEvent.image,
            subtitle: fetchedEvent.subtitle || fetchedEvent.description,
            startingTime: fetchedEvent.startingTime || "",
            organizer: fetchedEvent.organizer || "TBD",
            facultyCoordinator: fetchedEvent.facultyCoordinator || "TBD",
            studentCoordinators: fetchedEvent.studentCoordinators || "TBD",
            rules: fetchedEvent.rules || [],
          });
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleBack = () => {
    setNavigating(true);
    // Use history.back() to properly maintain browser history
    setTimeout(() => {
      window.history.back();
    }, 300); // Short delay for animation
  };

  const handleRegister = () => {
    window.open('../../registration/userdetail', '_blank');
  };

  if (loading || navigating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a0033] to-[#0c0019] flex items-center justify-center">
        <div
          className="text-white text-xl"
          style={navigating ? styles.fadeOut : {}}
        >
          {/* Loading spinner or text could go here */}
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a0033] to-[#0c0019] flex items-center justify-center">
        <div className="text-white text-xl">Event not found</div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#1a0033] to-[#0c0019] p-5 font-['Orbitron'] tracking-widest"
      style={navigating ? styles.fadeOut : styles.fadeIn}
    >
      {/* Navigation Buttons */}
      <div className="fixed top-4 right-4 z-50 flex gap-4">
       
        <button
          onClick={() => navigate("/")}
          className="p-2 rounded-full bg-purple-600/50 hover:bg-purple-600 transition-colors duration-300 text-white"
          title="Go to Home"
        >
          <Home className="w-6 h-6" />
        </button>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBack}
        className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300 mb-4"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Events</span>
      </button>

      {/* Rest of the component remains unchanged */}
      {/* Header */}
      <header className="text-center py-5 mb-10">
        <h1
          className="text-4xl md:text-5xl font-bold uppercase text-white animate-pulse 
                     [text-shadow:_0_0_5px_#fff,_0_0_10px_#fff,_0_0_20px_#8000ff,_0_0_30px_#8000ff,_0_0_40px_#8000ff]"
        >
          {event.name}
        </h1>
        <h2
          className="text-2xl font-medium text-white mt-2
                     [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff]"
        >
          {event.subtitle}
        </h2>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row gap-6">
        {/* Left Side - Event Image */}
        <div
          className="flex-1 bg-purple-900/10 backdrop-blur-lg rounded-xl border border-purple-600/20 
                      shadow-[0_0_20px_rgba(128,0,255,0.2)]"
        >
          <div className="p-6">
            <div className="rounded-lg overflow-hidden border border-purple-600/30 aspect-square relative">
              <img
                src={event.poster}
                alt={event.name}
                className="absolute inset-0 w-full h-full object-fill"
                onError={(e) => {
                  e.target.src = "/api/placeholder/800/800";
                  e.target.onerror = null;
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Side - Schedule */}
        <div
          className="flex-1 bg-purple-900/10 backdrop-blur-lg rounded-xl border border-purple-600/20 
                      shadow-[0_0_20px_rgba(128,0,255,0.2)]"
        >
          <div className="p-6">
            <h2
              className="text-xl font-medium text-white mb-6
                         [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff]"
            >
              Schedule & Details
            </h2>

            <div className="flex flex-col gap-6">
              {/* Date and Time */}
              <div className="flex items-center gap-4 text-white">
                <Calendar className="w-6 h-6 text-purple-300" />
                <div>
                  <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                    {event.date}
                  </p>
                  <p className="text-sm text-purple-300 mt-1">
                    {event.startingTime}
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-center gap-4 text-white">
                <MapPin className="w-6 h-6 text-purple-300" />
                <div>
                  <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                    Venue
                  </p>
                  <p className="text-sm text-purple-300 mt-1">{event.venue}</p>
                </div>
              </div>

              {/* Organizer */}
              <div className="flex items-center gap-4 text-white">
                <Users className="w-6 h-6 text-purple-300" />
                <div>
                  <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                    Organized by
                  </p>
                  <p className="text-sm text-purple-300 mt-1">
                    {event.organizer}
                  </p>
                </div>
              </div>

              {/* Faculty Coordinator */}
              <div className="flex items-center gap-4 text-white">
                <User className="w-6 h-6 text-purple-300" />
                <div>
                  <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                    Faculty Coordinator
                  </p>
                  <p className="text-sm text-purple-300 mt-1">
                    {event.facultyCoordinator}
                  </p>
                </div>
              </div>

              {/* Student Coordinators */}
              {event.studentCoordinators &&
                event.studentCoordinators.map((coordinator, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 text-white"
                  >
                    <User className="w-6 h-6 text-purple-300" />
                    <div>
                      <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                        Student Coordinator &nbsp;
                        {event.studentCoordinators.length > 1 ? index + 1 : ""}
                      </p>
                      <p className="text-sm text-purple-300 mt-1">
                        {coordinator.name}
                      </p>
                      {coordinator.contact && (
                        <p className="text-sm text-purple-300 mt-1">
                          Contact:{" "}
                          <a
                            href={`https://wa.me/91${coordinator.contact}?text=Hi, I would like to know more about ${event.name}`}
                            className="hover:text-white transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {coordinator.contact}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Event and Rules Section */}
      <div className="max-w-6xl mx-auto space-y-6">
        {/* About Event Card */}
        <div
          className="w-full bg-purple-900/10 backdrop-blur-lg rounded-xl border border-purple-600/20 
                      shadow-[0_0_20px_rgba(128,0,255,0.2)]"
        >
          <div className="p-6">
            <h2
              className="text-xl font-medium text-white mb-6
                         [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff] tracking-widest"
            >
              About Event
            </h2>
            <h3
              className="text-2xl font-medium text-white mb-4
                         [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff]"
            >
              {event.name}
            </h3>

            <p className="text-white leading-relaxed [text-shadow:_0_0_2px_rgba(128,0,255,0.5)] tracking-widest">
              {event.description}
            </p>
          </div>
        </div>

        {/* Rules Card */}
        {event.rules && event.rules.length > 0 && (
          <div
            className="w-full bg-purple-900/10 backdrop-blur-lg rounded-xl border border-purple-600/20 
                        shadow-[0_0_20px_rgba(128,0,255,0.2)] "
          >
            <div className="p-6">
              <h2
                className="text-xl font-medium text-white mb-6
                           [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff] tracking-widest"
              >
                Rules & Guidelines
              </h2>
              <ul className="space-y-3">
                {event.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-600/30 text-white text-sm flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-white leading-relaxed [text-shadow:_0_0_2px_rgba(128,0,255,0.5)] tracking-widest">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventPage;