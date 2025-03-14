import React from "react";
import { IconCheck } from "@tabler/icons-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useNavigate } from "react-router-dom";

export default function PricingCards() {
  const navigate = useNavigate();

  const handleTechClick = () => {
    navigate("/events/technical");
  };

  const handleNonTechClick = () => {
    navigate("/events/non-tech");
  };

  return (
      <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3 px-4 relative z-10 place-items-center">
        {/* Basic Plan */}
        <Card className="w-full max-w-sm min-h-[450px] bg-black/40 backdrop-blur-sm border border-white/10 text-white transition-transform duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl hover:shadow-[#FF0080]/20 flex flex-col">
          <CardHeader className="pb-4 text-center">
            <CardTitle className="text-2xl font-bold">Basic</CardTitle>
            <CardDescription className="text-gray-400">Your 24-Hour All-Access Pass</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 py-2 text-left">
            <p className="text-4xl font-bold mb-4 text-center">
              ₹200<span className="text-xl font-normal text-gray-400">/pass</span>
            </p>
            <ul className="space-y-4 flex-grow">
              <li className="flex items-start">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />
                <span>Access any one day of your choice (Day 1 or Day 2)</span>
              </li>
              <li className="flex items-start">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />
                <span>Enjoy all events happening on your chosen day</span>
              </li>
              <li className="flex items-start">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />
                <span>
                  Participate in both{" "}
                  <span
                    className="text-[#FF0080] cursor-pointer"
                    onClick={handleTechClick}
                  >
                    tech
                  </span>{" "}
                  &{" "}
                  <span
                    className="text-[#FF0080] cursor-pointer"
                    onClick={handleNonTechClick}
                  >
                    non-tech
                  </span>{" "}
                  events
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Pro Plan - Enhanced */}
<div className="relative w-full max-w-sm min-h-[450px] group">
  {/* Background elements that need to be blurred */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900 animate-gradient-x"></div>
  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-500 via-transparent to-transparent blur-md"></div>
  
  {/* Card with backdrop blur */}
  <Card className="relative w-full h-full max-w-sm min-h-[450px] flex flex-col overflow-hidden bg-black/20 backdrop-blur-sm border-2 border-[#FF0080] rounded-lg z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-rotate-1 group-hover:shadow-2xl group-hover:shadow-[#FF0080]/50">
    {/* Animated border effect */}
    <div className="absolute inset-0 border-2 border-[#FF0080] rounded-lg z-0 animate-pulse"></div>
    
    {/* Shimmer effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#FF0080]/30 to-transparent skew-x-12 group-hover:animate-shimmer"></div>
    
    <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FF0080] to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-lg">
      POPULAR
    </div>
    
    <CardHeader className="pb-4 text-center relative z-20">
      <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-100 to-pink-300">Pro</CardTitle>
      <CardDescription className="text-gray-300">Ultimate 48-Hour Experience</CardDescription>
    </CardHeader>
    
    <CardContent className="flex-1 py-2 text-left text-white relative z-20">
      <div className="relative mb-6">
        <p className="text-4xl font-bold mb-1 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white">
          ₹300<span className="text-xl font-normal text-gray-300">/pass</span>
        </p>
        <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#FF0080] to-transparent"></div>
      </div>
      
      <ul className="space-y-6 flex-grow">
        <li className="flex items-start">
          <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" stroke={3} />
          <span>Full access for both days – no limits!</span>
        </li>
        <li className="flex items-start">
          <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" stroke={3} />
          <span>Enjoy all events on both days</span>
        </li>
        <li className="flex items-start">
          <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" stroke={3} />
          <span>
            Participate in{" "}
            <span
              className="text-[#FF0080] font-bold cursor-pointer hover:text-pink-300 transition-colors"
              onClick={handleTechClick}
            >
              tech
            </span>{" "}
            &{" "}
            <span
              className="text-[#FF0080] font-bold cursor-pointer hover:text-pink-300 transition-colors"
              onClick={handleNonTechClick}
            >
              non-tech
            </span>{" "}
            events
          </span>
        </li>
      </ul>
    </CardContent>
  </Card>
</div>


        {/* On-Spot Registration */}
        <Card className="w-full max-w-sm min-h-[450px] bg-black/40 backdrop-blur-sm border-2 border-[#FF0080]/20 text-white relative transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1 hover:shadow-xl hover:shadow-[#FF0080]/20 flex flex-col">
          <CardHeader className="pb-4 text-center">
            <CardTitle className="text-3xl font-bold">On-Spot Registration</CardTitle>
            <CardDescription className="text-gray-400">Join the Fun Instantly!</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 py-2 text-left">
            <ul className="space-y-6 flex-grow">
              <li className="flex items-start">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />
                <span>Immediate access to all events</span>
              </li>
              <li className="flex items-start">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />
                <span>Enjoy all events based on the plans </span>
              </li>
              <li className="flex items-start">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />
                <span>Rs.300 for both days </span>
              </li>
              <li className="flex items-start">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />
                <span>Rs.200 for any one of the day</span>
              </li>
              <li className="flex items-start">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />
                <span>
                  Participate in{" "}
                  <span
                    className="text-[#FF0080] cursor-pointer"
                    onClick={handleTechClick}
                  >
                    tech
                  </span>{" "}
                  &{" "}
                  <span
                    className="text-[#FF0080] cursor-pointer"
                    onClick={handleNonTechClick}
                  >
                    non-tech
                  </span>{" "}
                  events
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
  );
}

