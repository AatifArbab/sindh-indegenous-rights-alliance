import { useEffect, useState } from "react";
import { FaTrash, FaUsers } from "react-icons/fa";

import LoadingSpinner from "../../components/LoadingSpinner";
import {
  deleteMembershipApplication,
  getMembershipApplications,
  updateMembershipStatus,
} from "../../services/membershipService";

const MembershipApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

 useEffect(() => {
  let isMounted = true;

  const loadApplications = async () => {
    try {
      const result = await getMembershipApplications();

      if (isMounted) {
        setApplications(
          Array.isArray(result) ? result : []
        );
      }
    } catch (error) {
      console.error(error);

      if (isMounted) {
        setErrorMessage(
          "Membership applications load nahi ho sakin."
        );
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  };

  loadApplications();

  return () => {
    isMounted = false;
  };
}, []);
  const handleStatusChange = async (id, status) => {
    try {
      await updateMembershipStatus(id, status);

      setApplications((current) =>
        current.map((application) =>
          application.id === id
            ? { ...application, status }
            : application
        )
      );
    } catch (error) {
      console.error(error);
      alert("Application status update nahi ho saka.");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Kya aap ye membership application delete karna chahte hain?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteMembershipApplication(id);

      setApplications((current) =>
        current.filter(
          (application) => application.id !== id
        )
      );
    } catch (error) {
      console.error(error);
      alert("Application delete nahi ho saki.");
    }
  };

  if (loading) {
    return (
      <LoadingSpinner message="Loading memberships..." />
    );
  }

  return (
    <section className="admin-memberships-page">
      <div className="admin-page-heading">
        <div>
          <h2>Membership Applications</h2>
          <p>
            New applications review aur manage karein.
          </p>
        </div>
      </div>

      {errorMessage && (
        <div className="admin-alert admin-alert-error">
          {errorMessage}
        </div>
      )}

      {applications.length === 0 ? (
        <div className="admin-empty-state">
          <FaUsers />
          <h3>No membership applications found</h3>
        </div>
      ) : (
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Applicant</th>
                <th>Contact</th>
                <th>District</th>
                <th>Membership</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((application) => (
                <tr key={application.id}>
                  <td>
                    <strong>{application.full_name}</strong>
                    <small>
                      Father: {application.father_name}
                    </small>
                  </td>

                  <td>
                    <span>{application.phone}</span>
                    <small>
                      {application.email || "No email"}
                    </small>
                  </td>

                  <td>{application.district}</td>

                  <td>{application.membership_type}</td>

                  <td>
                    <select
                      value={application.status}
                      onChange={(event) =>
                        handleStatusChange(
                          application.id,
                          event.target.value
                        )
                      }
                    >
                      <option value="pending">
                        Pending
                      </option>
                      <option value="approved">
                        Approved
                      </option>
                      <option value="rejected">
                        Rejected
                      </option>
                    </select>
                  </td>

                  <td>
                    {new Date(
                      application.created_at
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <button
                      type="button"
                      className="admin-delete-button"
                      onClick={() =>
                        handleDelete(application.id)
                      }
                      aria-label={`Delete ${application.full_name}`}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default MembershipApplications;