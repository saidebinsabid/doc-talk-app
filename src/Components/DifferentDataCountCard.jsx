import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import totalDoctor from "../assets/success-doctor.png";
import totalReview from "../assets/success-review.png";
import totalPatients from "../assets/success-patients.png";
import totalStuffs from "../assets/success-staffs.png";
const DifferentDataCountCard = () => {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.3 });
  return (
    <>
      {/* Card 1 */}
      <div ref={ref1} className="p-8 bg-white rounded-2xl space-y-6">
        <img src={totalDoctor} alt="total-doctor-icon" />
        {inView1 && (
          <span className="text-5xl font-black">
            <CountUp start={0} end={199} duration={2} />+
          </span>
        )}
        <p className="pt-4 text-gray-500">Total Doctors</p>
      </div>

      {/* Card 2 */}
      <div ref={ref2} className="p-8 bg-white rounded-2xl space-y-6">
        <img src={totalReview} alt="total-review-icon" />
        {inView2 && (
          <span className="text-5xl font-black">
            <CountUp start={0} end={467} duration={2} />+
          </span>
        )}
        <p className="pt-4 text-gray-500">Total Reviews</p>
      </div>

      {/* Card 3 */}
      <div ref={ref3} className="p-8 bg-white rounded-2xl space-y-6">
        <img src={totalPatients} alt="patients-icon" />
        {inView3 && (
          <span className="text-5xl font-black">
            <CountUp start={0} end={1900} duration={2} separator="" />+
          </span>
        )}
        <p className="pt-4 text-gray-500">Patients</p>
      </div>

      {/* Card 4 */}
      <div ref={ref4} className="p-8 bg-white rounded-2xl space-y-6">
        <img src={totalStuffs} alt="stuffs-icon" />
        {inView4 && (
          <span className="text-5xl font-black">
            <CountUp start={0} end={300} duration={2} />+
          </span>
        )}
        <p className="pt-4 text-gray-500">Total Stuffs</p>
      </div>
    </>
  );
};

export default DifferentDataCountCard;
