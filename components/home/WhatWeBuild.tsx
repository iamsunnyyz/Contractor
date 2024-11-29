"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const WhatWeBuild = () => {
  const projects = [
    {
      name: "Construction of High Level Bridge across Shivnath River On Durg-Rajnandgaon (OLD NH -06) (Chhattisgarh)",
      value: "₹21,00,00,000",
      status: "Complete",
      image: "/31.jpg",
      department: "N.H. (OLD -06) DURG",
      amount: "21 Cr",
      location: "Durg, Chhattisgarh",
    },
    {
      name: "Const. of i/c aprroaches across Karra River in Km. 85/10 on Rajnandgaon-Kawardha-Poandi Road on S.H. -05 (Chhattisgarh)",
      value: "₹4,21,00,000",
      status: "Completed",
      image: "/49.jpg",
      department: "P.W.D. DURG",
      amount: "4.21 Cr",
      location: "Rajnandgaon, Chhattisgarh",
    },
    {
        name: "Const. of Rail Under Bridge (Limited Height Subway) across Hawrah - Mumbai Rail Line (Nehru Nagar Crossing) at km 862/9-11 (Chhattisgarh)",
        value: "₹5,58,00,000",
        status: "Completed",
        image: "/67.jpg",
        department: "P.W.D. DURG",
        amount: "5.58 Cr",
        location: "Durg, Chhattisgarh",
      },
      {
        name: "Const. of Overpass at Farhad Chowk (CH-9500) Rajnandgaon Bypass (Chhattisgarh)",
        value: "₹25,50,00,000",
        status: "Completed",
        image: "/69.jpg",
        department: "P.W.D. DURG",
        amount: "25.50 Cr",
        location: "Rajnandgaon, Chhattisgarh",
      },
      {
        name: "Const. of Major Bridge across Bandiya River in Km. 6/900 On Halewara-Kothi-Regadandi-Pipari Burrgi Road (VR -174, 183, 104) Block Ettapalli-Bhamragar Dist. -Gadchiroli (Maharashtra)",
        value: "₹7,98,47,000",
        status: "Completed-Extra Work",
        image: "/32.jpg",
        department: "P.W.D. MAHARASTRA",
        amount: "7.9847 Cr",
        location: "Gadchiroli, Maharashtra",
      },
      {
        name: "Const. of Halver-Koti-Maraknar-Hiker-Hindur-Dodhur Road LR - 07 in Block Bhamragarh, Dist -Gadchiroli (Maharashtra)",
        value: "₹7,32,76,000",
        status: "Completed",
        image: "/33.jpg",
        department: "P.W.D. MAHARASTRA",
        amount: "7.3276 Cr",
        location: "Gadchiroli, Maharashtra",
      },
      {
        name: "Const. of Major bridge on Perimili River at Design Chainage km 178+240 to km 179+415 (Existing chainage 27+500) On NH 130D staring from its junction with NH -30 near Kondagaon connecting Narayanpur- Kutul in the State of Chhattisgarh connecting Binagunda -Laheri- Dhondraj -Bhamragarh-Hemalkasa and terminating at its Junction with NH -353C Near Allapalli Dist. Gadchiroli in the State of Maharashtra.",
        value: "₹28,50,00,000",
        status: "Completed-Extra Work",
        image: "/44.jpg",
        department: "N.H. -353C MAHARASTRA",
        amount: "28.50 Cr",
        location: "Gadchiroli, Maharashtra",
      },
      {
        name: "UP of SH - 364 Tosda to Petha Bande Road Ta. Etapalli Package No. GAD -107.",
        value: "₹4,70,84,000",
        status: "Completed",
        image: "/60.jpg",
        department: "PMGSY MAHARASTRA",
        amount: "15 Cr",
        location: "Gadchiroli, Maharashtra",
      },
      {
        name: "UP of SH - 364 at Langi to Tadpalli Road Ta. Etapalli Package No. GAD -109.",
        value: "₹3,40,68,000",
        status: "Completed",
        image: "/61.jpg",
        department: "PMGSY MAHARASTRA",
        amount: "3.4068 Cr",
        location: "Gadchiroli, Maharashtra",
      },
      {
        name: "Construction of Seven Minor Bridges on |Allapalli -Bhamragard-Laheri -Binagunda Narayanpur National Highway (NH) 130D (Section Allapalli to Bhamragad) at chainage 2+400 km, 9+200 km, 14+200 km, 32+600 km, 34+200 km, 43+400 km and 46+400 km (TotalL-1.645 Km with Approaches) in Gadchiroli District in the state of Maharashtra.",
        value: "₹18,75,00,000",
        status: "Work In Progress",
        image: "/73.jpg",
        department: "N.H. -130D MAHARASTRA",
        amount: "18.75 Cr",
        location: "Gadchiroli, Maharashtra",
      },
      {
        name: "Const. of H.L. Bridge i/c approaches across Shivnarh River on Durg -Nagpura -Karela Road.",
        value: "₹12,57,00,000",
        status: "Work In Progress",
        image: "/67.jpg",
        department: "P.W.D. DURG",
        amount: "12.57 Cr",
        location: "Durg, Chhattisgarh",
      },
      {
        name: "Const. H.L. Bridge at Kosanalla in km 306.00 and construction (Repairing ) of H.L. Bridge at Kharun River in km 283/400 of NH -53in the State of Chhattisgarh.",
        value: "₹16,53,00,000",
        status: "Work In Progress",
        image: "/49.jpg",
        department: "N.H. -53 DURG",
        amount: "16.53 Cr",
        location: "Raipur, Chhattisgarh",
      },
    // Add more projects as needed...
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Auto-scroll logic
  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [paused, projects.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const toggleExpand = (index: number) => { 
    setExpandedIndex(index === expandedIndex ? null : index);
};

  return (
    <section
      id="what-we-build"
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage: `url('/71.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-green-600 text-center my-4">
          Our Projects
        </h2>
        <hr className="border-t-4 border-white mx-auto w-24 mb-4" />
        <h6 className="text-lg font-medium mb-8 text-green-600 text-center">
          We have successfully delivered a range of roads & highways projects.
        </h6>

        <div className="flex items-center justify-between relative gap-1">
  {/* Left Arrow Button */}
  <button
    onClick={handlePrev}
    className="text-white bg-white bg-opacity-50 px-3 py-2 rounded-full hover:bg-opacity-70 transition z-10"
  >
    {"<"}
  </button>

  {/* Carousel Wrapper */}
  <div className="flex gap-4 overflow-hidden w-full justify-center relative">
    {[0, 1, 2].map((i) => {
      const index = (activeIndex + i) % projects.length;
      return (
        <div
          key={index}
          className="relative w-full max-w-[90%] md:max-w-[30%] bg-white rounded-lg overflow-hidden shadow-lg flex-shrink-0 transition-transform duration-500"
        >
          {/* Card Image */}
          <div className="relative group">
            <Image
              src={projects[index].image}
              alt="Project"
              className="object-cover w-full h-48 group-hover:blur-sm transition duration-500"
              width={500}
              height={300}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg font-semibold">
                {projects[index].department}
              </p>
            </div>
          </div>

          {/* Card Details */}
          <div className="bg-white p-2">
            <h3 className="text-lg font-semibold text-black">
              {expandedIndex === index
                ? projects[index].name
                : `${projects[index].name.substring(0, 50)}...`}
              <button
                className="text-gray-800 ml-2 underline"
                onClick={() => toggleExpand(index)}
              >
                {expandedIndex === index ? "less" : "more"}
              </button>
            </h3>
            <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="-82 0 512 512" width="14">
                  <path d="m347.453125 0h-347.453125v98.019531h71.496094c25.730468 0 49.78125 12.351563 65.113281 32.226563h-136.609375v98.023437h137.914062c-15.21875 20.890625-39.816406 33.917969-66.417968 33.917969h-49.011719v79.378906l187.800781 170.433594 65.875-72.585938-114.171875-103.613281c40.574219-23.605469 70.480469-62.152343 83.066407-107.53125h102.398437v-98.023437h-102.882813c-3.207031-11.167969-7.476562-21.929688-12.777343-32.226563h115.660156zm-29.953125 68.070312h-141.949219l17.347657 23.796876c12.414062 17.023437 20.945312 36.039062 25.367187 56.515624l2.550781 11.8125h96.683594v38.121094h-96.453125l-2.453125 11.972656c-9.910156 48.367188-43.0625 88.792969-88.6875 108.136719l-21.554688 9.140625 125.5 113.898438-25.617187 28.226562-155.800781-141.390625v-36.167969h19.0625c46.875 0 89.183594-29.621093 105.277344-73.707031l7.339843-20.109375h-154.164062v-38.121094h153.960937l-7.875-20.371093c-8.066406-20.875-22.0625-38.710938-40.476562-51.589844-18.867188-13.191406-41.019532-20.164063-64.0625-20.164063h-41.546875v-38.121093h287.554687v38.121093zm0 0"></path>
              </svg> 
              {projects[index].amount}
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" height="14" viewBox="0 0 512 512" width="14">
	                <path d="m346.1559 178.0316c0-49.7124-40.4436-90.156-90.1559-90.156-49.728 0-90.1843 40.4436-90.1843 90.156 0 49.7279 40.4563 90.1842 90.1843 90.1842 49.7123 0 90.1559-40.4563 90.1559-90.1842zm-148.3396 0c0-32.067 26.1011-58.1554 58.1837-58.1554 32.067 0 58.1553 26.0884 58.1553 58.1554 0 32.0825-26.0884 58.1836-58.1553 58.1836-32.0826 0-58.1837-26.1011-58.1837-58.1836zm230.7537 200.4177c-19.6844-8.6414-44.7126-15.5863-73.4486-20.447 8.6227-10.3267 16.9889-21.0322 24.8207-32.0964 36.3967-51.4189 54.0894-99.7889 54.0894-147.8743 0-98.1669-79.8647-178.0316-178.0315-178.0316-98.1825 0-178.0598 79.8647-178.0598 178.0316 0 48.0775 17.6917 96.4397 54.0859 147.8513 7.8383 11.0725 16.212 21.7859 24.8425 32.1198-28.7394 4.8605-53.7679 11.8054-73.4498 20.4471-39.8356 17.4905-48.1976 38.2618-48.1976 52.6068 0 17.6127 12.3416 42.5219 71.138 61.17 40.2018 12.7513 93.3454 19.7734 149.6408 19.7734 56.2852 0 109.4248-7.0221 149.6296-19.7728 58.8058-18.6497 71.1492-43.5588 71.1492-61.1705.0001-14.3445-8.3638-35.1149-48.2088-52.6074zm-318.6293-200.4177c0-80.522 65.5222-146.031 146.0593-146.031 80.522 0 146.0309 65.509 146.0309 146.031 0 94.2273-82.9356 175.8098-143.4924 235.3787-.8516.8374-1.6978 1.67-2.5386 2.4977-.8531-.8394-1.711-1.6832-2.5743-2.5323-60.5537-59.5626-143.4849-141.1358-143.4849-235.3441zm286.015 283.6922c-37.1604 11.7854-86.8644 18.2756-139.9557 18.2756-53.1016 0-102.809-6.4902-139.9659-18.2756-35.8132-11.3586-48.8124-24.563-48.8124-30.6671 0-10.733 33.8438-34.2372 114.9462-44.439 16.8647 18.134 33.748 34.7489 48.818 49.5719 4.7496 4.6719 9.3444 9.1917 13.7317 13.5544l11.2824 11.2195 11.2824-11.2195c4.3765-4.3521 8.9597-8.8606 13.697-13.5203 15.0784-14.8324 31.9726-31.4587 48.8472-49.6064 81.1065 10.2046 114.9517 33.7075 114.9517 44.4393.0001 6.1032-13.0021 19.307-48.8226 30.6672z"></path>
                </svg>
              {projects[index].location}
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="12" height="12" viewBox="0 0 122.315 122.88" enableBackground="new 0 0 122.315 122.88" xmlSpace="preserve">
                  <g><path fillRule="evenodd" clipRule="evenodd" d="M94.754,14.534c8.844,0,16.014,7.17,16.014,16.012 c0,8.844-7.17,16.015-16.014,16.015c-8.843,0-16.013-7.17-16.013-16.015C78.741,21.704,85.911,14.534,94.754,14.534L94.754,14.534z M109.265,52.121c-7.205,0-13.049,5.844-13.049,13.048c0,7.207,5.844,13.049,13.049,13.051c7.207,0,13.051-5.844,13.051-13.051 C122.315,57.965,116.472,52.121,109.265,52.121L109.265,52.121z M94.135,89.903c-5.032,0-9.114,4.082-9.114,9.113 c0,5.032,4.082,9.114,9.114,9.114c5.031,0,9.113-4.082,9.113-9.114C103.248,93.985,99.166,89.903,94.135,89.903L94.135,89.903z M59.275,104.65c-5.032,0-9.114,4.081-9.114,9.113c0,5.034,4.082,9.116,9.114,9.116s9.113-4.082,9.113-9.116 C68.389,108.731,64.308,104.65,59.275,104.65L59.275,104.65z M23.652,90.86c-4.717,0-8.54,3.823-8.54,8.54 c0,4.715,3.823,8.54,8.54,8.54c4.714,0,8.538-3.825,8.538-8.54C32.19,94.684,28.366,90.86,23.652,90.86L23.652,90.86z M9.096,54.872C4.072,54.872,0,58.944,0,63.968c0,5.021,4.072,9.093,9.096,9.093c5.021,0,9.093-4.072,9.093-9.093 C18.189,58.944,14.116,54.872,9.096,54.872L9.096,54.872z M23.652,17.026c-6.354,0-11.508,5.155-11.508,11.509 s5.154,11.506,11.508,11.506s11.506-5.152,11.506-11.506S30.006,17.026,23.652,17.026L23.652,17.026z M59.341,0 c-7.651,0-13.858,6.205-13.858,13.855c0,7.651,6.207,13.856,13.858,13.856s13.856-6.205,13.856-13.856 C73.197,6.205,66.992,0,59.341,0L59.341,0z"/>
                </g></svg>
               {projects[index].status} 
            </p>
          </div>
        </div>
      );
    })}
  </div>

  {/* Right Arrow Button */}
  <button
    onClick={handleNext}
    className="text-white bg-white bg-opacity-50 px-3 py-2 rounded-full hover:bg-opacity-70 transition z-10"
  >
    {">"}
  </button>
</div>


      </div>
    </section>
  );
};

export default WhatWeBuild;