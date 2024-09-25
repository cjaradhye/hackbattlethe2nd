import { useEffect, useState } from "react";
import axios from "axios";
import Notification from "./Notification.jsx";
import { auth, provider, signInWithPopup } from "./firebase.jsx";

const SignIn = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    localStorage.clear();
  }, []);
  const handleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken1 = await result.user.getIdToken();
      console.log(idToken1);
      const response = await axios.post(
        "http://localhost:5500/signup",
        {},
        {
          headers: {
            Authorization: `Bearer ${idToken1}`,
          },
        }
      );
      if (response.status === 200) {
        setNotificationMessage("Signup successful");
        setShowNotification(true);
      }
    } catch (error) {
      if (error.status === 403) {
        setNotificationMessage("User already exists");
        setShowNotification(true);
        setColor("red");
      } else {
        setNotificationMessage("Error: " + error.data.message);
        setShowNotification(true);
        setColor("red");
      }
    }
  };

  const handleLogIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken1 = await result.user.getIdToken();

      const response = await axios.post(
        "http://localhost:5500/login",
        {},
        {
          headers: {
            Authorization: `Bearer ${idToken1}`,
          },
        }
      );
      if (response.status === 200) {
        localStorage.setItem("tokenISTE", response.data);
        setNotificationMessage("Login successful");
        setColor("green");
        setShowNotification(true);
        window.location.href = "/admin/1007/dashboard";
      }
    } catch (err) {
      console.log(err);
      if (err.status === 404) {
        setNotificationMessage("User Not Found");
        setShowNotification(true);
        setColor("red");
      } else {
        setNotificationMessage("Error: " + err.data.message);
        setShowNotification(true);
        setColor("red");
      }
      setNotificationMessage("Error during login");
      setShowNotification(true);
    }
  };

  return (
    <div>
      <button className="" onClick={handleSignUp}>
        Signup with Google
      </button>
      <button className="" onClick={handleLogIn}>
        Login with Google
      </button>
      {/* Notification Component */}
      <Notification
        message={notificationMessage}
        show={showNotification}
        color={color}
        className=""
        closeNotification={() => setShowNotification(false)}
      />
    </div>
  );
};

export default SignIn;
