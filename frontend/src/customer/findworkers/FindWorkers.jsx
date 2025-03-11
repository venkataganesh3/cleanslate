import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FindWorkers.css";

const Search = () => {
  const navigate = useNavigate();
  const [workers, setWorkers] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [filters, setFilters] = useState({
    jobType: "All",
    selectedTasks: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/workers")
      .then((res) => {
        setWorkers(res.data);
      })
      .catch((err) => console.error("Error fetching workers:", err));
  }, []);

  const updateFilter = (category, value) => {
    setFilters((prev) => {
      if (category === "jobType") {
        return { ...prev, jobType: value };
      } else {
        const updatedList = prev[category].includes(value)
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value];
        return { ...prev, [category]: updatedList };
      }
    });
  };

  const filteredWorkers = workers.filter((worker) => {
    const jobTypeMatch =
      filters.jobType === "All" || worker.employmentType === filters.jobType;
    const taskMatch =
      filters.selectedTasks.length === 0 ||
      filters.selectedTasks.every((task) => worker.selectedTasks.includes(task));

    const locationMatch =
      searchLocation.trim() === "" ||
      worker.location.toLowerCase().includes(searchLocation.toLowerCase());

    return jobTypeMatch && taskMatch && locationMatch;
  });

  return (
    <div className="search-container">
      <div className="search-worker">
        <h2>Search Worker</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter Location"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          <button>Search</button>
        </div>
      </div>

      <div className="filter-section">
        <h3>Filter</h3>

        <div>
          <h4>Job Type</h4>
          {["All", "Full-Time", "Part-Time"].map((type) => (
            <label key={type}>
              <input
                type="radio"
                name="jobType"
                checked={filters.jobType === type}
                onChange={() => updateFilter("jobType", type)}
              />
              {type}
            </label>
          ))}
        </div>

        <div>
          <h4>Job Functions</h4>
          {["Laundry", "Dishwashing", "Cleaning", "Help in Arranging","Packers"].map(
            (task) => (
              <label key={task}>
                <input
                  type="checkbox"
                  checked={filters.selectedTasks.includes(task)}
                  onChange={() => updateFilter("selectedTasks", task)}
                />
                {task}
              </label>
            )
          )}
        </div>
      </div>

      <div className="search-content">
        <h2>Available Workers ({filteredWorkers.length})</h2>
        <div className="job-grid">
          {filteredWorkers.map((worker) => (
            <div key={worker._id} className="job-card">
              <h4>{worker.name}</h4>
              <p>Job Type: {worker.employmentType}</p>
              <p>Phone : {worker.phoneNumber}</p>
              <div className="job-location">
                <FaMapMarkerAlt />
                <span>{worker.location}</span>
              </div>
              <div className="job-actions">
                <button
                  className="details-btn"
                  onClick={() =>
                    navigate(`/viewdetails/${worker._id}`, {
                      state: { worker },
                    })
                  }
                >
                  View Details
                </button>

                <button
                  className="book-btn"
                  onClick={() =>
                    navigate(`/book/${worker._id}`, {
                      state: { worker },
                    })
                  }
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
          {filteredWorkers.length === 0 && <p>No Workers Found 😕</p>}
        </div>
      </div>
    </div>
  );
};

export default Search;
