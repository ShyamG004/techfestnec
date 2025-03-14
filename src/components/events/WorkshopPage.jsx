import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useEvents } from "../../utils/eventData";
import {
  Calendar,
  User,
  Users,
  ArrowLeft,
  MapPin,
  Book,
  Play,
  Pause,
  ExternalLink,
} from "lucide-react";


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
  progressBar: `
    @keyframes fillProgressBar {
      from { width: 0%; }
      to { width: 100%; }
    }
    `,
};

const WorkshopPage = () => {
  const { title } = useParams();
  const { getWorkshopByTitle } = useEvents();
  const [workshop, setWorkshop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [navigating, setNavigating] = useState(false);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles.keyframes;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  useEffect(() => {
    let isMounted = true;

    if (!title) {
      setLoading(false);
      return;
    }

    if (isMounted) {
      try {
        const fetchedWorkshop = getWorkshopByTitle(title);
        if (fetchedWorkshop) {
          setWorkshop({
            ...fetchedWorkshop,
            image: fetchedWorkshop.image || "/api/placeholder/800/800",
            subtitle: fetchedWorkshop.subtitle || "Workshop",
            startingTime: fetchedWorkshop.startingTime || "10:00 AM - 5:00 PM",
            organizer: fetchedWorkshop.organizer || "TBD",
            facultyCoordinator: fetchedWorkshop.facultyCoordinator || "TBD",
            studentCoordinators: fetchedWorkshop.studentCoordinators || "TBD",
            resourcePerson: {
              name: fetchedWorkshop.resourcePerson?.name || "TBD",
              image: fetchedWorkshop?.resourcePerson?.image !== "" ? fetchedWorkshop?.resourcePerson?.image : "https://vidwan.indiascienceandtechnology.gov.in/favicon.ico",
              designation:
                fetchedWorkshop.resourcePerson?.designation || "Expert",
              organization:
                fetchedWorkshop.resourcePerson?.organization || "TBD",
              bio:
                fetchedWorkshop.resourcePerson?.bio ||
                "",
              expertise: fetchedWorkshop.resourcePerson?.expertise || [],
              vidwanLink: fetchedWorkshop.resourcePerson?.link || null,
            },
            video: fetchedWorkshop.video || null,
          });
        }
      } catch (error) {
        console.error("Error fetching workshop:", error);
      } finally {
        setLoading(false);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [title]);
  const handleBack = () => {
    setNavigating(true);
    window.history.back();
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const progressBar = e.target;
      const rect = progressBar.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const percentage = (offsetX / rect.width) * 100;
      const seekTime = (percentage / 100) * videoRef.current.duration;

      videoRef.current.currentTime = seekTime;
      setVideoProgress(percentage);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleTimeUpdate = () => {
      const progress = (videoElement.currentTime / videoElement.duration) * 100;
      setVideoProgress(progress);
    };

    const handleVideoEnded = () => {
      videoElement.currentTime = 0;
      videoElement.play(); // Automatically restart
      setIsVideoPlaying(true);
      setVideoProgress(0);
    };

    videoElement.addEventListener("timeupdate", handleTimeUpdate);
    videoElement.addEventListener("ended", handleVideoEnded);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      videoElement.removeEventListener("ended", handleVideoEnded);
    };
  }, [workshop?.video]);

  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
            setIsVideoPlaying(true);
          } else {
            videoRef.current.pause();
            setIsVideoPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentVideoRef = videoRef.current;
    observer.observe(currentVideoRef);

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, [workshop?.video]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  if (loading || navigating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a0033] to-[#0c0019] flex items-center justify-center">
        <div
          className="text-white text-xl"
          style={navigating ? styles.fadeOut : {}}
        >
          {/* {navigating ? "Returning to workshops..." : "Loading..."} */}
        </div>
      </div>
    );
  }

  if (!workshop) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a0033] to-[#0c0019] flex items-center justify-center">
        <div className="text-white text-xl">Workshop not found</div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#1a0033] to-[#0c0019] p-3 font-['Orbitron']"
      style={navigating ? styles.fadeOut : styles.fadeIn}
    >
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300 mb-3"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Workshops</span>
      </button>

      {/* Header */}
      <header className="text-center py-3 mb-6">
        <h1
          className="text-3xl md:text-4xl font-bold uppercase text-white animate-pulse 
                     [text-shadow:_0_0_5px_#fff,_0_0_10px_#fff,_0_0_20px_#8000ff,_0_0_30px_#8000ff,_0_0_40px_#8000ff]"
        >
          {workshop.title}
        </h1>
        <h2
          className="text-xl font-medium text-white mt-2
                     [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff]"
        >
          {workshop.subtitle}
        </h2>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mb-6 flex flex-col md:flex-row gap-4">
        {/* Left Side - Workshop Image */}
        <div
          className="md:w-[45%] bg-purple-900/10 backdrop-blur-lg rounded-xl border border-purple-600/20 
                shadow-[0_0_20px_rgba(128,0,255,0.2)]"
        >
          <div className="p-4">
            <div className="rounded-lg overflow-hidden border border-purple-600/30 relative">
              <div className="min-h-[200px] max-h-[600px] h-auto flex items-center justify-center bg-black/20">

                <img
                  src={workshop.poster}
                  alt={workshop.name}
                  className="w-auto h-auto max-w-full max-h-[600px] object-contain"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/800/800";
                    e.target.onerror = null;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right Side - Schedule */}
        <div
          className="md:w-[55%] bg-purple-900/10 backdrop-blur-lg rounded-xl border border-purple-600/20 
                      shadow-[0_0_20px_rgba(128,0,255,0.2)]"
        >
          <div className="p-4">
            <h2
              className="text-lg font-medium text-white mb-4
                         [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff]"
            >
              Schedule & Details
            </h2>

            <div className="flex flex-col gap-4">
              {/* Date and Time */}
              <div className="flex items-center gap-3 text-white">
                <Calendar className="w-5 h-5 text-purple-300" />
                <div>
                  <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                    {workshop.date}
                  </p>
                  <p className="text-sm text-purple-300 mt-0.5">
                    {workshop.startingTime}
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-center gap-3 text-white">
                <MapPin className="w-5 h-5 text-purple-300" />
                <div>
                  <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                    Venue
                  </p>
                  <p className="text-sm text-purple-300 mt-0.5">
                    {workshop.venue}
                  </p>
                </div>
              </div>

              {/* Organizer */}
              <div className="flex items-center gap-3 text-white">
                <Users className="w-5 h-5 text-purple-300" />
                <div>
                  <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                    Organized by
                  </p>
                  <p className="text-sm text-purple-300 mt-0.5">
                    {workshop.organizer}
                  </p>
                </div>
              </div>

              {/* Faculty Coordinator */}
              <div className="flex items-center gap-3 text-white">
                <User className="w-5 h-5 text-purple-300" />
                <div>
                  <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                    Faculty Coordinator
                  </p>
                  <p className="text-sm text-purple-300 mt-0.5">
                    {workshop.facultyCoordinator}
                  </p>
                </div>
              </div>
              {/* Student Coordinators */}
              {workshop.studentCoordinators && workshop.studentCoordinators.map((coordinator, index) => (
                <div key={index} className="flex items-center gap-4 text-white">
                  <User className="w-6 h-6 text-purple-300" />
                  <div>
                    <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                      Student Coordinator {index + 1}
                    </p>
                    <p className="text-sm text-purple-300 mt-1">
                      {coordinator.name}
                    </p>
                    {coordinator.contact && (
                      <p className="text-sm text-purple-300 mt-1">
                        Contact:{" "}
                        <a
                          href={`https://wa.me/91${coordinator.contact}?text=Hi, I would like to know more about ${workshop.name}`}
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
              {/* Resource Person Vidwan Link */}
              {workshop.resourcePerson.vidwanLink && (
                <div className="flex items-center gap-3 text-white">
                  <ExternalLink className="w-5 h-5 text-purple-300" />
                  <div>
                    <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                      About Resource Person
                    </p>
                    <a
                      href={`https://${workshop.resourcePerson.vidwanLink}`}
                      className="text-sm text-purple-300 hover:text-white transition-colors duration-300 mt-0.5 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Vidwan Profile
                      {/* <img
                        src={workshop.resourcePerson.image}
                        width={20}
                        className="w-5 h-5 inline-block object-contain ml-2"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />  */}
                    </a>
                  </div>
                </div>
              )}

              {/* Register Button */}
              <div>
                {/* <button
                  onClick={handleRegister}
                  className="w-full bg-[#8000ff] text-white py-2.5 px-5 text-base font-semibold rounded-lg 
                          cursor-pointer shadow-[0_0_15px_rgba(128,0,255,0.5)] 
                          hover:bg-[#6600cc] hover:shadow-[0_0_25px_rgba(128,0,255,0.7)]
                          transition-all duration-300"
                >
                  Register Now
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Person Section */}
      <div className="max-w-5xl mx-auto mb-6">
        <div
          className="w-full bg-purple-900/10 backdrop-blur-lg rounded-xl border border-purple-600/20 
                      shadow-[0_0_20px_rgba(128,0,255,0.2)]"
        >
          <div className="p-4">
            <h2
              className="text-lg font-medium text-white mb-4
                         [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff]"
            >
              Resource Person
            </h2>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Resource Person Image */}
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden border border-purple-600/30">
                  {workshop.resourcePerson.vidwanLink ? <a href={`https://${workshop.resourcePerson.vidwanLink}`} target="_blank">
                    <img
                      src={workshop.resourcePerson.image}
                      alt={workshop.resourcePerson.name}
                      className="w-full h-auto object-cover"

                    /></a>
                    : <img
                      src={workshop.resourcePerson.image}
                      alt={workshop.resourcePerson.name}
                      className="w-full h-auto object-cover"

                    />
                  }

                </div>
              </div>

              {/* Resource Person Details */}
              <div className="md:w-2/3">
                <h3
                  className="text-xl font-medium text-white mb-2
                             [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff]"
                >
                  {workshop.resourcePerson.name}
                </h3>
                <p className="text-purple-300 mb-4">
                  {workshop.resourcePerson.designation} at{" "}
                  {workshop.resourcePerson.organization}
                </p>

                {workshop.resourcePerson.expertise.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {workshop.resourcePerson.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-white leading-relaxed [text-shadow:_0_0_2px_rgba(128,0,255,0.5)]">
                  {workshop.resourcePerson.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Workshop Section */}
      <div className="max-w-5xl mx-auto">
        <div
          className="w-full bg-purple-900/10 backdrop-blur-lg rounded-xl border border-purple-600/20 
                      shadow-[0_0_20px_rgba(128,0,255,0.2)]"
        >
          <div className="p-4">
            <h2
              className="text-lg font-medium text-white mb-4
                         [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff]"
            >
              About Workshop
            </h2>

            <p className="text-white leading-relaxed [text-shadow:_0_0_2px_rgba(128,0,255,0.5)]">
              {workshop.description}
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default WorkshopPage;