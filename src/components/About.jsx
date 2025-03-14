import { TimelineCard } from "./TimelineCards";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity, FaChalkboardTeacher, FaUsers, FaHandsHelping, FaRegLightbulb } from 'react-icons/fa';

function About() {
    const timeline = [
        {
          id: 1,
          title: "Inception of Sympo",
          description: "Fostering innovation, hands-on learning, and technological excellence across all domains.",
          
          icon: <FaUniversity size={30} color="white" />
        },
        {
          id: 5,
          title: "Ideathon",
          description: "Join our Ideathon to brainstorm and develop innovative solutions. Collaborate with peers, get expert mentorship, and compete for exciting prizes!",
       
          icon: <FaRegLightbulb size={30} color="white" />
        },
        {
          id: 2,
          title: "Workshops & Sessions",
          description: "20+ expert-led workshops covering the latest trends and hands-on skills, designed to boost your knowledge and spark innovation.",
       
          icon: <FaChalkboardTeacher size={30} color="white" />
        },
        {
          id: 3,
          title: "Technical Events",
          description: "Explore 110+ technical events featuring expert talks, hackathons, coding challenges, and panel discussions",
          
          icon: <FaUsers size={30} color="white" />
        },
        {
          id: 4,
          title: "Leisure Activities",
          description: "Enjoy 25+ leisure activities and a vibrant students' bazaar, offering fun-filled events, games, shopping, and entertainment",
       
          icon: <FaHandsHelping size={30} color="white" />
        },
   
      ];
  
    return (
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-center font-orbitron font-bold mb-4 sm:mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text animate-pulse"> About </span>
            <span className="bg-gradient-to-r from-[#f112ba] via-[#ff00ea] to-[#ff00d9] text-transparent bg-clip-text animate-gradient">NEC</span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text animate-pulse"> TechFest 2025</span>
          </h1>

          <p className="text-base sm:text-xl text-center font-space-grotesk text-purple-200/90 mb-8 sm:mb-16 max-w-3xl mx-auto leading-relaxed">
            Welcome to the annual College Symposium, where innovation, learning, and creativity come together. Here's a look at the milestones in our journey.
          </p>
  
          <div className="relative">
            <VerticalTimeline 
              animate={true} 
              lineColor={'rgba(139, 92, 246, 0.4)'}
              className="vertical-timeline-custom-line"
            >
              {timeline.map((element) => (
                <VerticalTimelineElement
                  key={element.id}
                  date={element.date}
                  dateClassName="text-purple-300 font-space-grotesk text-sm sm:text-base"
                  iconStyle={{ 
                    background: 'rgb(30, 41, 59)',
                    fontSize: '1rem',
                    width: '40px',
                    height: '40px',
                    marginLeft: '-20px',
                    '@media (min-width: 640px)': {
                      width: '60px',
                      height: '60px',
                      marginLeft: '-30px'
                    }
                  }}
                  icon={element.icon}
                  contentStyle={{
                    background: 'transparent',
                    boxShadow: 'none',
                    padding: '0 1rem',
                    '@media (max-width: 640px)': {
                      padding: '0 0.5rem'
                    }
                  }}
                >
                  <TimelineCard
                    title={element.title}
                    description={element.description}
                    icon={element.icon}
                  />
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;