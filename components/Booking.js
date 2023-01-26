import Head from "next/head";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { auth, db } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { getAuth, updateProfile } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 }, x: 0 },
  hidden: { opacity: 0, scale: 1, x: -200 },
};

export default function Booking() {
  //animation
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //Date for default in form
  const todayDate = new Date();
  console.log(todayDate.toLocaleString().substring(0, 16));

  //Setting up firebase and variables
  //required for name change
  const auth = getAuth();
  const [user, setUser] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const updateDatabase = (data) => {
    //Update Name and Phone on database side

    setDoc(
      doc(
        db,
        "reservations",
        user
          ? "Member: " + data.phone + " " + data.date
          : data.phone + " " + data.date
      ),
      {
        name: data.name,
        phoneNumber: data.phone,
        count: data.count,
        date: data.date,
        message: data.message,
      }
    );
    alert(
      "Successfully added to list, your reservation will be confirmed by a text message"
    );
    console.log("Added to database!");
  };

  //Retrieves from database(for Phone Number and Name)
  const readDatabase = async () => {
    if (user) {
      const docRef = doc(db, "users", user.email);
      const docSnap = await getDoc(docRef);
      if (!docSnap.data().phoneNumber) {
        Router.replace("/Profile");
      } else {
        setName(docSnap.data().name);
        setPhone(docSnap.data().phoneNumber.slice(3));
      }
    }
  };
  useEffect(() => {
    readDatabase();
  }, [user]);

  return (
    <>
      <div
        id="booking"
        className="w-full flex items-center text-sm text-[#222] font-sansSerif m-0 py-12 bg-[#282828] font-medium leading-7 "
      >
        <div className="main w-full text-center">
          <motion.h1
            className="text-center text-5xl lg:text-7xl py-12 lg:py-16 font-sansSerif font-semibold text-white"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
          >
            Want To Reserve?
          </motion.h1>
          <div className="container">
            <div className="signup-content">
              <div className="signup-form xl:mx-auto">
                <form
                  className="register-form"
                  id="register-form"
                  onSubmit={handleSubmit(updateDatabase)}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <div className="form-input">
                        <label htmlFor="first_name" className="required">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="full_name"
                          defaultValue={user ? name : ""}
                          {...register("name", { required: true })}
                        />
                      </div>
                      <div className="form-input">
                        <label htmlFor="phone_number" className="required">
                          Phone number
                        </label>
                        <input
                          type="text"
                          id="phone_number"
                          defaultValue={user && phone ? phone : ""}
                          {...register("phone", {
                            required: true,
                            minLength: 10,
                            maxLength: 10,
                          })}
                        />
                      </div>
                      <div className="form-input">
                        <label htmlFor="date" className="required">
                          No. of People
                        </label>
                        <input
                          type="text"
                          id="date"
                          defaultValue={"1"}
                          {...register("count", { required: true })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-input">
                        <label htmlFor="count" className="required">
                          Date
                        </label>
                        <input
                          type="text"
                          name="date"
                          id="date"
                          defaultValue={todayDate.toLocaleDateString()}
                          {...register("date", { required: true })}
                        ></input>
                      </div>

                      <div className="form-input">
                        <label htmlFor="message">Message</label>
                        <input
                          type="text"
                          id="message"
                          className="py-16"
                          {...register("message", { required: false })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-submit">
                    <input
                      type="submit"
                      value="Submit"
                      className="submit"
                      id="submit"
                      name="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
