import { ArrowLeft } from "lucide-react";
import { useEffect} from "react";
import Call from "../assets/call-logo.png";
import Mail from "../assets/mail-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contact.css";
import NEC from "../assets/NEC.mp4";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import ParticleBackground from "../components/Accommodations/ParticleBackground";
import { useNavigate } from "react-router-dom";


const Contact = () => {

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cardData = [
    {
      image1: Mail,
      image2: Call,
      Name: "Dr.S.Rajagopal",
      Sub: "Assistant Professor(SG)",
      Department: "Information Technology",
      Email: "rajatarget@nec.edu.in",
      Phone: "9629668167",
    },
    {
      image1: Mail,
      image2: Call,
      Name: "Dr.K.Thoufiq Mohammed",
      Sub: "Assistant Professor(SG)",
      Department: "Mechanical Engineering",
      Email: "ktmmech@nec.edu.in",
      Phone: "8122798849",
    },
    {
      image1: Mail,
      image2: Call,
      Name: "Mr.K.Rajkumar",
      Department: "Computer Science and Engineering",
      Sub: "Assistant Professor(SG)",
      Email: "rajkumar@nec.edu.in",
      Phone: "9789655284",
    },
  ];

  return (
    <>
    <Navbar />
   
    <div className="contact-form p-4 w-full bg-gradient-radial from-[#4e08f3] to-transparent">
      {/* <button
        onClick={() => navigate("/")}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300 mb-4 font-['Orbitron'] tracking-widest"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </button> */}
      <ParticleBackground />
      <h1 className="contact text-responsive" style={{ fontSize: "41px", marginTop: "80px" }} data-aos="fade-down">Contact</h1>
      <div
        className="w-full h-auto sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-[12px] mx-auto mb-[10px] md:mb-[50px] sm:mb-[30px] lg:mb-[80px]
    overflow-hidden shadow-[0_0_10px_rgba(105,218,255,0.8),0_0_20px_rgba(240,105,255,0.8),0_0_30px_rgba(253,5,228,0.8)]"
        data-aos="fade-up"
      >
        <video
          id="background-video"
          loop
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={`/images/NEC.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* bubbles */}
      <div className="content relative z-10">
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-10 sm:mt-16 md:mt-20">
          <h1 className="coordinator text-responsive text-center" style={{ fontSize: "41px", marginTop: "80px" }} data-aos="fade-down">Coordinator</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-4 sm:mt-6 md:mt-8 lg:mt-12 relative z-10">
            {cardData.map((data, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden text-center transition-transform transition-shadow duration-300 ease-in-out hover:-translate-y-2
            p-4 sm:p-6 md:p-8 w-full max-w-[300px] sm:max-w-[340px] md:max-w-[350px] h-auto mx-auto"
                style={{
                  background: 'linear-gradient(135deg,rgb(184, 49, 204),rgb(115, 0, 255))',
                  boxShadow: '0 0 10px rgba(105, 218, 255, 0.8), 0 0 20px rgba(240, 105, 255, 0.8), 0 0 30px rgba(253, 5, 228, 0.8)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(105, 218, 255, 1), 0 0 25px rgba(240, 105, 255, 1), 0 0 35px rgba(253, 5, 228, 1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(105, 218, 255, 0.8), 0 0 20px rgba(240, 105, 255, 0.8), 0 0 30px rgba(253, 5, 228, 0.8)';
                }}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="flex flex-col items-center gap-3">
                  <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold drop-shadow-md">
                    {data.Name}
                  </h2>
                  <p className="text-gray-200 text-sm sm:text-base md:text-lg italic">
                    {data.Department}
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base">{data.Sub}</p>

                  <p className="text-gray-300 flex items-center gap-2 text-xs sm:text-sm md:text-base">
                    <img
                      src={data.image1}
                      alt={data.title}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain rounded-full p-1 border border-white/50 transition-transform duration-300 hover:scale-110"
                      style={{ background: "linear-gradient(135deg,rgb(168, 7, 248),rgb(236, 9, 248),rgb(246, 245, 247))" }}
                      data-aos="zoom-in"
                    />
                    {data.Email}
                  </p>

                  <p className="text-gray-300 flex items-center gap-2 text-xs sm:text-sm md:text-base">
                    <img
                      src={data.image2}
                      alt={data.title}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain rounded-full p-1 border border-white/50 transition-transform duration-300 hover:scale-110"
                      style={{ background: "linear-gradient(135deg,rgb(168, 7, 248),rgb(236, 9, 248),rgb(246, 245, 247))" }}
                      data-aos="zoom-in"
                    />
                    {data.Phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Location Map */}
      <div className="map-container mt-12 text-center">
        <h1 class="location text-responsive" style={{ fontSize: "41px", marginTop: "80px" }} data-aos="fade-down">Location</h1>
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLEMAP_API_KEY}&q=National+Engineering+College,+KR+Nagar,+Kovilpatti`}
          width="100%"
          height="500"
          frameBorder="0"
          className="rounded-lg shadow-lg mx-auto"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          data-aos="fade-up"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default Contact;