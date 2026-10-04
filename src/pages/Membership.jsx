import { useState } from "react";
import {
  FaCheckCircle,
  FaHandsHelping,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import { submitMembershipForm } from "../services/membershipService";

const initialForm = {
  fullName: "",
  fatherName: "",
  cnic: "",
  dateOfBirth: "",
  gender: "",
  phone: "",
  email: "",
  district: "",
  address: "",
  occupation: "",
  membershipType: "",
  message: "",
  terms: false,
};

const Membership = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setSubmitError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    setSubmitted(false);
    setSubmitError("");

    try {
      await submitMembershipForm(formData);

      setSubmitted(true);
      setFormData(initialForm);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Membership submission failed:", error);

      setSubmitError(
        error?.message ||
          "Application submit nahi hui. Please dobara koshish karein."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-label">Join Our Alliance</span>
          <h1>Become a Member</h1>
          <p>
            Add your voice to a growing movement for rights, justice,
            community empowerment and environmental protection.
          </p>
        </div>
      </section>

      <section className="membership-page section-padding">
        <div className="container membership-page-grid">
          <aside className="membership-information">
            <SectionTitle
              label="Get Involved"
              title="Together, We Can Make a Difference"
              alignment="left"
            />

            <p>
              Membership gives you an opportunity to participate in community
              initiatives, awareness programs and environmental campaigns.
            </p>

            <div className="membership-benefit">
              <FaUsers />

              <div>
                <h3>Community Network</h3>
                <p>Connect with volunteers and community representatives.</p>
              </div>
            </div>

            <div className="membership-benefit">
              <FaHandsHelping />

              <div>
                <h3>Meaningful Participation</h3>
                <p>Support projects that create positive community change.</p>
              </div>
            </div>

            <div className="membership-benefit">
              <FaShieldAlt />

              <div>
                <h3>Rights Awareness</h3>
                <p>Learn about indigenous, social and environmental rights.</p>
              </div>
            </div>
          </aside>

          <div className="membership-form-wrapper">
            {submitted && (
              <div className="success-message" role="alert">
                <FaCheckCircle />

                <div>
                  <h3>Application received</h3>
                  <p>
                    Thank you for applying. Our team will contact you after
                    reviewing your information.
                  </p>
                </div>
              </div>
            )}

            {submitError && (
              <div className="error-message" role="alert">
                <strong>Application submit nahi hui.</strong>
                <p>{submitError}</p>
              </div>
            )}

            <form className="membership-form" onSubmit={handleSubmit}>
              <h2>Membership Application</h2>
              <p>Fields marked with * are required.</p>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName">Full name *</label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled={submitting}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fatherName">Father’s name *</label>

                  <input
                    id="fatherName"
                    name="fatherName"
                    type="text"
                    value={formData.fatherName}
                    onChange={handleChange}
                    disabled={submitting}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cnic">CNIC number *</label>

                  <input
                    id="cnic"
                    name="cnic"
                    type="text"
                    placeholder="42101-1234567-1"
                    value={formData.cnic}
                    onChange={handleChange}
                    pattern="[0-9]{5}-[0-9]{7}-[0-9]"
                    disabled={submitting}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of birth *</label>

                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    disabled={submitting}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender *</label>

                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    disabled={submitting}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">
                      Prefer not to say
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone/WhatsApp *</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={submitting}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email address</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={submitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="district">District *</label>

                  <input
                    id="district"
                    name="district"
                    type="text"
                    value={formData.district}
                    onChange={handleChange}
                    disabled={submitting}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="occupation">Occupation</label>

                  <input
                    id="occupation"
                    name="occupation"
                    type="text"
                    value={formData.occupation}
                    onChange={handleChange}
                    disabled={submitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="membershipType">Membership type *</label>

                  <select
                    id="membershipType"
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleChange}
                    disabled={submitting}
                    required
                  >
                    <option value="">Select membership</option>
                    <option value="General Member">General Member</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="Community Representative">
                      Community Representative
                    </option>
                    <option value="Supporter">Supporter</option>
                  </select>
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="address">Complete address *</label>

                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                    disabled={submitting}
                    required
                  />
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="message">
                    Why would you like to join?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={submitting}
                  />
                </div>
              </div>

              <label className="checkbox-group">
                <input
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleChange}
                  disabled={submitting}
                  required
                />

                <span>
                  I confirm that the information provided is correct and I
                  agree to the membership terms.
                </span>
              </label>

              <button
                type="submit"
                className="button button-primary"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Membership;