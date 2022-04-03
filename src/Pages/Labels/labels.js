// import React from 'react'
// import Sidebar from '../../Components/Sidebar/sidebar'
// import './labels.css'

// const Labels = () => {
//   return (
//     <div className='label-container'>
//         <Sidebar />
//         <h1>Label</h1>
//     </div>
//   )
// }

// export default Labels

import "./labels.css";
import { useEffect, useState } from "react";
import { useNotes } from "../../Context/noteContext";
import { useAuth } from "../../Context/authContext";
import Sidebar from "../../Components/Sidebar/sidebar";
import { LabelCard } from "../../Components/LabelCard/LabelCard";
// import { Sidebar, LabelCard, DisplayCardEmpty } from "../../Components";
// import { useNotes, useAuth } from "../../Context";
// import { useScrollToTop, useDocumentTitle } from "../../Utils";

const Labels = () => {
  // useDocumentTitle();
  // useScrollToTop();

  const { getNotes } = useNotes();
  const { authState } = useAuth();
  const { notes } = authState;

  const tags = ["all", "Home", "Work", "Personal"];
  const order = { Low: 1, Medium: 2, High: 3 };

  const [labels, setLabels] = useState({
    all: true,
    Home: false,
    Work: false,
    Personal: false,
    LowToHigh: false,
    HighToLow: false,
  });

  const [filteredNotes, setFilteredNotes] = useState([notes]);

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    (function () {
      let newData = [...notes];
      if (labels.LowToHigh) {
        newData.sort((a, b) => order[a.priority] - order[b.priority]);
      }
      if (labels.HighToLow) {
        newData.sort((a, b) => order[b.priority] - order[a.priority]);
      }
      if (labels.all) {
        setFilteredNotes(newData);
      } else {
        const selectedTags = tags.filter((item) => labels[item]);
        newData = newData.filter((item) => selectedTags.includes(item.tag));
        setFilteredNotes(newData);
      }
    })();
  }, [labels]);

  return (
    <div className="label-main-container">
      <Sidebar />
      <main className="label-main m-3">
        <div>
          <div>
            <div className="spacer-1"></div>
            <h4 style={{ marginLeft: "9rem", marginTop: "-2rem" }}>Labels</h4>
            <div className="spacer-1"></div>

            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                marginLeft: "9rem",
                marginTop: "2rem",
              }}
            >
              <button
                className={`${labels.all ? "selected" : ""} btn-label`}
                onClick={() => {
                  setLabels({
                    ...labels,
                    all: !labels.all,
                    Home: false,
                    Work: false,
                    Personal: false,
                  });
                }}
              >
                All
              </button>
              <button
                className={`${
                  labels.Home ? "selected" : ""
                } btn-label font-bold`}
                onClick={() => {
                  setLabels({ ...labels, all: false, Home: !labels.Home });
                }}
              >
                Home
              </button>
              <button
                className={`${
                  labels.Work ? "selected" : ""
                } btn-label font-bold`}
                onClick={() => {
                  setLabels({ ...labels, all: false, Work: !labels.Work });
                }}
              >
                Work
              </button>
              <button
                className={`${
                  labels.Personal ? "selected" : ""
                } btn-label font-bold`}
                onClick={() => {
                  setLabels({
                    ...labels,
                    all: false,
                    Personal: !labels.Personal,
                  });
                }}
              >
                Personal
              </button>
            </div>

            <div className="spacer-3"></div>

            <h4 style={{ marginLeft: "9rem", marginTop: "2rem" }}>Priority</h4>
            <div className="spacer-1"></div>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginLeft: "9rem",
                marginTop: "2rem",
              }}
            >
              <label
                htmlFor="low-to-high"
                className="text-base font-bold"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <input
                  type="radio"
                  name="priority"
                  className="btn-priority"
                  id="low-to-high"
                  onClick={() =>
                    setLabels({ ...labels, HighToLow: false, LowToHigh: true })
                  }
                />
                Low to High
              </label>
              <label
                htmlFor="high-to-low"
                className="text-base font-bold"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <input
                  type="radio"
                  name="priority"
                  className="btn-priority"
                  id="high-to-low"
                  onClick={() =>
                    setLabels({ ...labels, LowToHigh: false, HighToLow: true })
                  }
                />
                High to Low
              </label>
            </div>

            <div className="spacer-3"></div>
            <div className="label-card-container">
              {filteredNotes.length !== 0 ? (
                filteredNotes.map((item) => {
                  return <LabelCard item={item} key={item._id} />;
                })
              ) : (
                <h1 style={{ marginTop: "-35rem", marginLeft: "40rem" }}>
                  No Labels
                </h1>
              )}
            </div>
          </div>
          <div className="spacer-2"></div>
        </div>
      </main>
    </div>
  );
};

export default Labels;
