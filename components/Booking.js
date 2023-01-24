import Head from "next/head";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { auth, db } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { getAuth, updateProfile } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Booking() {
  const todayDate = new Date();

  //Setting up firebase and variables
  //required for name change
  const auth = getAuth();
  const [user, setUser] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [count, setCount] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

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
          <h1 className="text-white pb-10 font-sansSerif text-4xl ">
            Want To Reserve?
          </h1>
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
                    <div className="form-group">
                      <div className="form-input">
                        <label htmlFor="count">Date</label>
                        <input
                          type="text"
                          name="date"
                          id="date"
                          defaultValue={todayDate}
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
