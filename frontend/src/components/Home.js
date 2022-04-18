import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";


const Home = () => {
  // if(localStorage.getItem("active")){
  //   console.log("active");
  //   console.log(localStorage.getItem("name"));
  //   console.log(localStorage.getItem("email"));
  //   console.log(localStorage.getItem("photo"));
  // }
  // else{
  //   window.location.replace("/signIn");   
  // }
  const logout = () => {
    localStorage.setItem("active", 0);
    console.log("logOut");
    console.log(localStorage.getItem("active"));
    window.location.replace("/");   
  };
  return (
    <div className="">
      <NavBar />
      <div className="flex p-10">
        <div className="w-2/5 mt-32 ml-32">
          <h3 className="text-white text-4xl ">
            Providing Students With All The <span className="yell">Help</span>{" "}
            They Need
          </h3>
          <div className="flex mt-10">
            {localStorage.getItem("active") == 1 && (
              <>
                <button
                  onClick={logout}
                  className="bg-yell rounded-2xl pl-5 pr-5 pt-2 pb-2 font-normal mr-10"
                >
                  Log Out
                </button>
                
               
              </>
            )}
            {localStorage.getItem("active") == 0 && (
              <>
                <Link
                  to="signIn"
                  className="bg-yell rounded-2xl pl-5 pr-5 pt-2 pb-2 font-normal mr-10"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
        <img src="home.png" className="w-2/5"></img>
      </div>
    </div>
  );
};

export default Home;
