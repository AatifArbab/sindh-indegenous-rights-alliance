import { useEffect, useState } from "react";
import { FaEnvelope, FaTrash } from "react-icons/fa";

import LoadingSpinner from "../../components/LoadingSpinner";
import {
  deleteContactMessage,
  getContactMessages,
  updateMessageStatus,
} from "../../services/contactService";

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadMessages = async () => {
      try {
        const result = await getContactMessages();

        if (isMounted) {
          setMessages(Array.isArray(result) ? result : []);
        }
      } catch (error) {
        console.error("Contact messages load error:", error);

        if (isMounted) {
          setErrorMessage("Messages load nahi ho sake.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadMessages();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateMessageStatus(id, status);

      setMessages((current) =>
        current.map((message) =>
          message.id === id
            ? { ...message, status }
            : message
        )
      );
    } catch (error) {
      console.error(error);
      alert("Status update nahi ho saka.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Kya aap ye message delete karna chahte hain?")) {
      return;
    }

    try {
      await deleteContactMessage(id);

      setMessages((current) =>
        current.filter((message) => message.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Message delete nahi ho saka.");
    }
  };

  if (loading) {
    return <LoadingSpinner message="Loading messages..." />;
  }

  return (
    <section className="admin-messages-page">
      <div className="admin-page-heading">
        <div>
          <h2>Contact Messages</h2>
          <p>Website se receive hone wale messages.</p>
        </div>
      </div>

      {errorMessage && (
        <div className="admin-alert admin-alert-error">
          {errorMessage}
        </div>
      )}

      {messages.length === 0 ? (
        <div className="admin-empty-state">
          <FaEnvelope />
          <h3>No messages found</h3>
        </div>
      ) : (
        <div className="admin-message-list">
          {messages.map((message) => (
            <article
              className="admin-message-card"
              key={message.id}
            >
              <div className="admin-message-heading">
                <div>
                  <h3>{message.subject}</h3>
                  <span>
                    {message.name} • {message.email}
                  </span>
                </div>

                <span
                  className={`admin-status ${message.status}`}
                >
                  {message.status}
                </span>
              </div>

              <p>{message.message}</p>

              <div className="admin-message-details">
                {message.phone && (
                  <a href={`tel:${message.phone}`}>
                    {message.phone}
                  </a>
                )}

                <time>
                  {new Date(
                    message.created_at
                  ).toLocaleString()}
                </time>
              </div>

              <div className="admin-message-actions">
                <select
                  value={message.status}
                  onChange={(event) =>
                    handleStatusChange(
                      message.id,
                      event.target.value
                    )
                  }
                >
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                  <option value="closed">Closed</option>
                </select>

                <button
                  type="button"
                  className="admin-delete-text-button"
                  onClick={() => handleDelete(message.id)}
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default ContactMessages;