import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Logout = () => {
  const history = useNavigate();

  const logout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (res.status === 401 || !res) {
        window.alert("pls logout later");
      } else {
        history.push("/");
        window.alert("logged out");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    logout();
  }, []);

  return (
    <div>
      <Link to="/logout">logout</Link>
    </div>
  );
};

export default Logout;
