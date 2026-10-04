import { Link } from "react-router-dom";
import { FaArrowRight, FaHandsHelping, FaUsers } from "react-icons/fa";

const MembershipCTA = () => {
  return (
    <section className="membership-cta">
      <div className="container membership-cta-content">
        <div className="membership-cta-icon">
          <FaHandsHelping aria-hidden="true" />
        </div>

        <div className="membership-cta-text">
          <span className="section-label">Join the Movement</span>

          <h2>Your Voice Can Help Create Meaningful Change</h2>

          <p>
            Become a member of the Sindh Indigenous Rights Alliance and stand
            with communities working for dignity, equality, cultural
            protection and environmental justice.
          </p>
        </div>

        <div className="membership-cta-actions">
          <Link to="/membership" className="button button-light">
            <FaUsers aria-hidden="true" />
            Become a Member
          </Link>

          <Link to="/contact" className="cta-text-link">
            Contact our team
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MembershipCTA;