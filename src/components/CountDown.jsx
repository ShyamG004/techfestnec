import React, { useEffect, useRef } from 'react';

const Countdown = () => {
  const clockRef = useRef(null);
  useEffect(() => {
    const els = {
      s: initElements("s"),
      m: initElements("m"),
      h: initElements("h"),
      d: initElements("d")
    };

    function initElements(type) {
      const els = [{}, {}];
      if (!["s", "m", "h", "d"].includes(type)) return els;

      const target = document.querySelector(`.flip-clock-${type}`);
      if (!target) return els;

      let el;
      el = els[0];
      el.digit = target.querySelector(".digit-left");
      el.card = el.digit.querySelector(".card");
      el.cardFaces = el.card.querySelectorAll(".card-face");
      el.cardFaceA = el.cardFaces[0];
      el.cardFaceB = el.cardFaces[1];

      el = els[1];
      el.digit = target.querySelector(".digit-right");
      el.card = el.digit.querySelector(".card");
      el.cardFaces = el.card.querySelectorAll(".card-face");
      el.cardFaceA = el.cardFaces[0];
      el.cardFaceB = el.cardFaces[1];

      return els;
    }

    function runClock() {
      const targetDate = new Date('2025-03-14T00:00:00+05:30');
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const timeObj = {
        d: days < 10 ? `0${days}` : `${days}`,
        h: hours < 10 ? `0${hours}` : `${hours}`,
        m: minutes < 10 ? `0${minutes}` : `${minutes}`,
        s: seconds < 10 ? `0${seconds}` : `${seconds}`
      };

      for (const t of Object.keys(els)) {
        for (const i of ["0", "1"]) {
          const curr = timeObj[t][i];
          let next = +curr - 1;

          if (t === "d") {
            if (i === "0") next = next >= 0 ? `${next}` : "9";
            if (i === "1") next = next >= 0 ? `${next}` : "9";
          }
          if (t === "h") {
            if (i === "0") next = next >= 0 ? `${next}` : "2";
            if (i === "1") next = next >= 0 ? `${next}` : "3";
          }
          if (t === "m" || t === "s") {
            if (i === "0") next = next >= 0 ? `${next}` : "5";
            if (i === "1") next = next >= 0 ? `${next}` : "9";
          }

          const el = els[t][i];
          if (el && el.digit) {
            if (!el.digit.dataset.digitBefore) {
              el.digit.dataset.digitBefore = curr;
              el.cardFaceA.textContent = el.digit.dataset.digitBefore;
              el.digit.dataset.digitAfter = next;
              el.cardFaceB.textContent = el.digit.dataset.digitAfter;
            } else if (el.digit.dataset.digitBefore !== curr) {
              el.card.addEventListener("transitionend", function () {
                el.digit.dataset.digitBefore = curr;
                el.cardFaceA.textContent = el.digit.dataset.digitBefore;

                const cardClone = el.card.cloneNode(true);
                cardClone.classList.remove("flipped");
                el.digit.replaceChild(cardClone, el.card);
                el.card = cardClone;
                el.cardFaces = el.card.querySelectorAll(".card-face");
                el.cardFaceA = el.cardFaces[0];
                el.cardFaceB = el.cardFaces[1];

                el.digit.dataset.digitAfter = next;
                el.cardFaceB.textContent = el.digit.dataset.digitAfter;
              }, { once: true });

              if (!el.card.classList.contains("flipped")) {
                el.card.classList.add("flipped");
              }
            }
          }
        }
      }

      setTimeout(runClock, 1000);
    }

    runClock();

    return () => {
      const highestId = window.setTimeout(() => { }, 0);
      for (let i = 0; i < highestId; i++) {
        window.clearTimeout(i);
      }
    };
  }, []);

  const TimeSection = ({ type, label }) => (

    <div className="flex flex-col items-center gap-2.5">
      <div className={`flip-clock flip-clock-${type} flex flex-row items-center gap-1 sm:gap-2 md:gap-4`}>
        <div className="digit digit-left relative w-[25px] h-[35px] md:w-[75px] md:h-[110px] bg-purple-900 rounded-lg perspective-[400px] m-0.5">
          <div className="card">
            <div className="card-face text-[1em] md:text-[3.5em] font-bold text-white bg-gradient-to-br from-[#a7465b] to-[#6f39cd] rounded-lg shadow-[0_4px_20px_rgba(139,92,246,0.3)]"></div>
            <div className="card-face card-face-back text-[1em] md:text-[3.5em] font-bold text-white bg-gradient-to-br from-[#a7465b] to-[#6f39cd] rounded-lg shadow-[0_4px_20px_rgba(139,92,246,0.3)]"></div>
          </div>
        </div>
        <div className="digit digit-right relative w-[25px] h-[35px] md:w-[75px] md:h-[110px] bg-purple-900 rounded-lg perspective-[400px] m-0.5">
          <div className="card">
            <div className="card-face text-[1em] md:text-[3.5em] font-bold text-white bg-gradient-to-br from-[#a7465b] to-[#6f39cd] rounded-lg shadow-[0_4px_20px_rgba(139,92,246,0.3)]"></div>
            <div className="card-face card-face-back text-[1em] md:text-[3.5em] font-bold text-white bg-gradient-to-br from-[#a7465b] to-[#6f39cd] rounded-lg shadow-[0_4px_20px_rgba(139,92,246,0.3)]"></div>
          </div>
        </div>
      </div>
      <div className="text-[0.7em] md:text-[1.5em] font-semibold uppercase tracking-[2px] md:tracking-[3px] text-purple-200 mt-2.5 drop-shadow-[0_0_8px_rgba(221,214,254,0.3)]">
        {label}
      </div>
    </div>
  );

  return (
    <div className="relative w-full flex justify-center">
      <div className="w-[95%] md:w-[90%] lg:w-[120%] my-5 p-4 md:p-[15px] bg-white/5 backdrop-blur-[10px] rounded-[25px] shadow-[0_8px_32px_rgba(31,38,135,0.15),0_0_20px_rgba(139,92,246,0.3),inset_0_0_15px_rgba(139,92,246,0.2)] animate-fadeInUp opacity-0 mb-[100px] lg:translate-x-[-8%] border border-purple-500/20">
        <div className="flex gap-1 md:gap-[35px] justify-center items-center p-3 md:p-10 bg-transparent rounded-[20px] shadow-[0_10px_30px_rgba(88,28,135,0.3)]">
          <TimeSection type="d" label="DAYS" />
          <div className="text-[1.2em] md:text-[4em] text-purple-400 font-bold flex items-center justify-center self-center h-full px-[2px] md:px-[5px] drop-shadow-[0_0_10px_rgba(167,139,250,0.5)] mt-[-15px] mb-[15px] md:mt-[-25px] md:mb-0">:</div>

          <TimeSection type="h" label="HOURS" />
          <div className="text-[1.2em] md:text-[4em] text-purple-400 font-bold flex items-center justify-center self-center h-full px-[2px] md:px-[5px] drop-shadow-[0_0_10px_rgba(167,139,250,0.5)] mt-[-15px] mb-[15px] md:mt-[-25px] md:mb-0">:</div>

          <TimeSection type="m" label="MINUTES" />
          <div className="text-[1.2em] md:text-[4em] text-purple-400 font-bold flex items-center justify-center self-center h-full px-[2px] md:px-[5px] drop-shadow-[0_0_10px_rgba(167,139,250,0.5)] mt-[-15px] mb-[15px] md:mt-[-25px] md:mb-0">:</div>

          <TimeSection type="s" label="SECONDS" />
        </div>
      </div>
    </div>
  );
};

export default Countdown;