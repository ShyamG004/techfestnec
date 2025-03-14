import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Trophy, Users, Lightbulb, Target, DollarSign, X, ArrowLeft, Home, List, ChevronLeft, ChevronRight,IndianRupee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

export default function IdeathonPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navigating, setNavigating] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const prizes = [
    { title: "First Prize", amount: "₹10,000", icon: "🥇" },
    { title: "Second Prize", amount: "₹5,000", icon: "🥈" },
    { title: "Incubation Support", amount: "Up to ₹5 Lakhs", icon: "🚀" }
  ];

  const criteria = [
    { title: "Innovation & Uniqueness", description: "Novel and creative solutions", icon: <Lightbulb className="w-6 h-6" /> },
    { title: "Feasibility & Scalability", description: "Realistic implementation potential", icon: <Target className="w-6 h-6" /> },
    { title: "Sustainability Impact", description: "Environmental contribution", icon: <Users className="w-6 h-6" /> },
    { title: "Business Viability", description: "Startup potential", icon: <DollarSign className="w-6 h-6" /> }
  ];



  const handleBack = () => {
    setNavigating(true);
    window.history.back();
  };



  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles.keyframes;
    document.head.appendChild(styleSheet);
    window.scrollTo(0, 0); // Scroll to top when event is loaded
    return () => document.head.removeChild(styleSheet);
  }, []);

  if (navigating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a0033] to-[#0c0019] flex items-center justify-center">
        <div
          className="text-white text-xl"
          style={styles.fadeOut}
        ></div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#1a0033] to-[#0c0019] p-5 font-['Orbitron'] tracking-widest"
      style={styles.fadeIn}
    >
      {/* Modal */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
              className="absolute -top-8 right-0 text-white hover:text-purple-300"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src="/images/Ideathon.jpg"
              alt="Ideathon 2025 Poster"
              className="w-full rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.src = "/api/placeholder/800/800";
                e.target.onerror = null;
              }}
            />
          </div>
        </div>
      )} */}

      {/* Navigation Buttons */}
      <div className="fixed top-4 right-4 z-50 flex gap-4">
        <button
          onClick={() => navigate('/events/non-tech')}
          className="p-2 rounded-full bg-purple-600/50 hover:bg-purple-600 transition-colors duration-300 text-white"
          title="View All Events"
        >
          <List className="w-6 h-6" />
        </button>
        <button
          onClick={() => navigate('/')}
          className="p-2 rounded-full bg-purple-600/50 hover:bg-purple-600 transition-colors duration-300 text-white"
          title="Go to Home"
        >
          <Home className="w-6 h-6" />
        </button>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300 mb-4"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </button>

      {/* Header */}
      <header className="text-center py-5 mb-10">
        <h1
          className="text-4xl md:text-5xl font-bold uppercase text-white animate-pulse 
                     [text-shadow:_0_0_5px_#fff,_0_0_10px_#fff,_0_0_20px_#8000ff,_0_0_30px_#8000ff,_0_0_40px_#8000ff]"
        >
          Ideathon 2025
        </h1>
        <h2
          className="text-2xl font-medium text-white mt-2
                     [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff]"
        >
          Transforming Waste into Wealth
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
            <div
              className="rounded-lg overflow-hidden border border-purple-600/30 aspect-square relative "
            >
              <img
                src="/nectechfest2k25/images/Ideathon.jpg"
                alt="Ideathon 2025 Poster"
                className="absolute inset-0 w-full h-full object-fill"
                onError={(e) => {
                  e.target.src = "/api/placeholder/800/800";
                  e.target.onerror = null;
                }}
              />
            </div>
            <p className="text-center mt-2 text-purple-300 text-sm">Click to expand</p>
          </div>
        </div>

        {/* Right Side - Schedule */}
        <div
          className="flex-1 bg-purple-900/10 backdrop-blur-lg rounded-xl border border-purple-600/20 
                     shadow-[0_0_20px_rgba(128,0,255,0.2)]"
        >
          <div className="absolute top-2 right-2 z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.3)] border border-purple-400/30 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 animate-pulse">
            Virtual Access
          </div>
          <div className="p-6">
            <h2
              className="text-xl font-medium text-white mb-6
                         [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff]"
            >
              Schedule & Details
            </h2>


            <div className="flex flex-col gap-6">
              {/* Participant Fee */}
              <div className="flex items-center gap-4 text-white">
                <IndianRupee className="w-6 h-6 text-purple-300" />
                <div>
                  <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                    Participant Fee
                  </p>
                  <p className="text-sm text-purple-300 mt-1">300 Rs Per Participant</p>
                </div>
              </div>

              {/* Date and Time */}
              <div className="flex items-center gap-4 text-white">
                <Calendar className="w-6 h-6 text-purple-300" />
                <div>
                  <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                    March 14<sup>th</sup> & 15<sup>th</sup>, 2025
                  </p>
                  <p className="text-sm text-purple-300 mt-1">2 Days - 9:00 AM to 5:00 PM</p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-center gap-4 text-white">
                <MapPin className="w-6 h-6 text-purple-300" />
                <div>
                  <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                    Venue
                  </p>
                  <p className="text-sm text-purple-300 mt-1">Innovation Hub (offline) | (Online Access Avalable)</p>
                </div>
              </div>

              {/* Prize */}
              <div className="flex items-center gap-4 text-white">
                <Trophy className="w-6 h-6 text-purple-300" />
                <div>
                  <p className="font-medium [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">
                    Main Prize
                  </p>
                  <p className="text-sm text-purple-300 mt-1">
                    ₹10,000 First Prize
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-6xl mx-auto mt-6 mb-4">
        <div className="flex flex-wrap justify-center gap-4">
          {['overview', 'structure', 'prizes', 'criteria'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-base transition-all duration-300 ${activeTab === tab
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-purple-900/30 hover:bg-purple-800/50 text-white'
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto space-y-6">
        <div
          className="w-full bg-purple-900/10 backdrop-blur-lg rounded-xl border border-purple-600/20 
                    shadow-[0_0_20px_rgba(128,0,255,0.2)]"
        >
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2
                  className="text-xl font-medium text-white mb-6
                           [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff] tracking-widest"
                >
                  About the Event
                </h2>
                <p className="text-white leading-relaxed [text-shadow:_0_0_2px_rgba(128,0,255,0.5)] tracking-widest">
                  The Ideathon – Transforming Waste into Wealth is a dynamic two-day innovation challenge designed to inspire creative solutions that turn waste materials into valuable resources. This event brings together passionate innovators, entrepreneurs, and students who aim to develop sustainable and impactful ideas for waste management and resource recovery.
                </p>
                <p className="text-white leading-relaxed [text-shadow:_0_0_2px_rgba(128,0,255,0.5)] tracking-widest">
                  With increasing environmental concerns and the pressing need for circular economy solutions, this Ideathon provides a platform for participants to present groundbreaking ideas that address waste-related challenges in innovative ways.
                </p>
              </div>
            )}

            {activeTab === 'structure' && (
              <div className="space-y-8">
                <h2
                  className="text-xl font-medium text-white mb-6
                           [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff] tracking-widest"
                >
                  Event Structure
                </h2>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-medium text-white mb-3 [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">Day 1 – Idea Pitching Round</h4>
                  <ul className="space-y-2 text-white [text-shadow:_0_0_2px_rgba(128,0,255,0.5)] tracking-widest">
                    <li>• Present initial ideas to expert panel (5-10 minutes)</li>
                    <li>• Expert feedback and evaluation</li>
                    <li>• Teams can have a maximum of three members or register individually</li>
                    <li>• Teams shortlisted for final round</li>
                  </ul>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <h4 className="text-xl font-medium text-white mb-3 [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">Day 2 – Final Presentation & Awards</h4>
                  <ul className="space-y-2 text-white [text-shadow:_0_0_2px_rgba(128,0,255,0.5)] tracking-widest">
                    <li>• Refined presentations with prototypes</li>
                    <li>• Detailed implementation plans</li>
                    <li>• Winner selection and awards ceremony</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'prizes' && (
              <div>
                <h2
                  className="text-xl font-medium text-white mb-6
                           [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff] tracking-widest"
                >
                  Prizes & Rewards
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {prizes.map((prize) => (
                    <div key={prize.title} className="bg-purple-900/30 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
                      <div className="text-4xl mb-4">{prize.icon}</div>
                      <h4 className="text-xl font-medium text-white mb-2 [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">{prize.title}</h4>
                      <p className="text-2xl font-bold text-white [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">{prize.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'criteria' && (
              <div>
                <h2
                  className="text-xl font-medium text-white mb-6
                           [text-shadow:_0_0_5px_#fff,_0_0_10px_#8000ff] tracking-widest"
                >
                  Judging Criteria
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {criteria.map((item) => (
                    <div key={item.title} className="flex items-start space-x-4 bg-purple-900/30 rounded-lg p-6">
                      <div className="text-purple-400">{item.icon}</div>
                      <div>
                        <h4 className="text-xl font-medium text-white mb-2 [text-shadow:_0_0_5px_rgba(128,0,255,0.5)]">{item.title}</h4>
                        <p className="text-white [text-shadow:_0_0_2px_rgba(128,0,255,0.5)] tracking-widest">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}


          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 mb-8">
        <p className="mt-4 text-purple-300 [text-shadow:_0_0_2px_rgba(128,0,255,0.5)] tracking-widest">
          Join us in creating sustainable solutions for a better tomorrow
        </p>
      </div>
    </div>
  );
}