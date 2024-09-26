import { useEffect, useState } from "react";
import axios from "axios";
import Notification from "./Notification.jsx";
import { auth, provider, signInWithPopup } from "./firebase.jsx";

const SignIn = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    // Clear local storage when the component mounts
    localStorage.clear();

    // Function to check if the window size is mobile
    const checkMobileSize = () => {
      const isMobile = window.innerWidth <= 768; // You can adjust the width as needed
      if (isMobile) {
        promptForCameraAccess();
      }
    };

    // Function to prompt for camera access
    const promptForCameraAccess = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        console.log("Camera access granted");
      } catch (err) {
        console.error("Camera access denied:", err);
      }
    };

    // Initial check
    checkMobileSize();

    // Add event listener to handle window resize
    window.addEventListener("resize", checkMobileSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkMobileSize);
    };
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
      console.log(err);
      if (err.status === 404) {
        setNotificationMessage("User Not Found");
        setShowNotification(true);
        setColor("red");
      } else {
        setNotificationMessage("Error: " + err.data.message);
        setNotificationMessage("Error: " + err.data.message);
        setShowNotification(true);
        setColor("red");
      }
      setNotificationMessage("Error during login");
      setShowNotification(true);
    }
  };
  const metamask = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
        localStorage.setItem("accID", accounts[0]);
      } catch (error) {
        console.log("MetaMask connection error:", error.message);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };

  return (
    <div className="LoginPage">
      <div className="loginbtns">
        <div className="loginTitle">
          <img src="./images/logo.png" className="loginlogo" />
          <h3>Welcome Back to Stegosaurus</h3>
        </div>
        <div className="loginButtons">
          <button className="loginbtn" onClick={handleSignUp}>
            <div className="insideButton">
              <img src="./images/google.png" className="glogo" />
              <p>Signup with Google</p>
            </div>
          </button>
          <button className="loginbtn" onClick={handleLogIn}>
            <div className="insideButton">
              <img src="./images/google.png" className="glogo" />
              <p>Login with Google</p>
            </div>
          </button>
        </div>
        <button onClick={metamask}>Connect to metamask</button>
      </div>

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
