import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SECONDARY_NAVY,
  NavBar,
  NavSearch,
  NavTextContainer,
  NavText,
  WorkContainer,
  CategoryBox,
  FindWork,
  Categories,
  Category,
  DescriptionBox,
  SearchContainer,
  JobSearch,
  GreenBox,
  ImageContainer,
  JobContainer,
  JobBox,
  JobTitle,
  JobData,
  JobDescription,
  LocationContainer,
} from "./StyledComponents";

function isUnique(value, array) {
  return !array.includes(value);
}

function checkUniqueValue(value, array) {
  if (isUnique(value, array)) {
    array.push(value);
    return true; // Value added successfully
  } else {
    return false; // Value already exists in the array
  }
}

export default function JobBoard(props) {
  const [activeCategory, setActiveCategory] = useState("");
  const navigate = useNavigate();
  let categoryArray = [];

  return (
    <>
      <NavBar position="static" style={{ background: SECONDARY_NAVY }}>
        <NavSearch
          placeholder="Search"
          // Remove placeholder text when accessing search bar
          onFocus={(e) => (e.target.placeholder = "")}
          // Return placeholder text when leaving search bar
          onBlur={(e) => (e.target.placeholder = "Search")}
          disableUnderline={true}
          inputProps={{
            sx: {
              "&::placeholder": {
                opacity: "1",
              },
            },
          }}
        />
        <NavTextContainer>
          <NavText
            // Reset webpage when clicking Find a Job
            onClick={() => window.location.reload()}
          >
            Find a Job
          </NavText>
          <NavText
            // Return to Login page when clicking Logout
            onClick={() => navigate("/login")}
          >
            Logout
          </NavText>
        </NavTextContainer>
      </NavBar>
      <WorkContainer>
        <CategoryBox>
          <FindWork>Find Work</FindWork>
          <Categories
            // Show all categories when clicking the respective text
            onClick={() => setActiveCategory("")}
          >
            Categories
          </Categories>
          {props.allJobs.map(
            (job) =>
              checkUniqueValue(job.category, categoryArray) === true && (
                <Category
                  key={job.id}
                  // Remove empty spaces in string to form valid className
                  className={job.category.replace(/ /g, "")}
                  // Choose active category by clicking on the respective text
                  onClick={() => setActiveCategory(job.category)}
                  style={{
                    color:
                      // Show active category to user
                      activeCategory === job.category ? "#39B54A" : "#7C7B7C",
                  }}
                >
                  {job.category}
                </Category>
              )
          )}
        </CategoryBox>
        <DescriptionBox>
          <SearchContainer>
            <JobSearch
              placeholder="Search"
              // Remove placeholder text when accessing search bar
              onFocus={(e) => (e.target.placeholder = "")}
              // Return placeholder text when leaving search bar
              onBlur={(e) => (e.target.placeholder = "Search")}
              disableUnderline={true}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    opacity: "1",
                  },
                },
              }}
            />
            <GreenBox>
              <ImageContainer>
                <img
                  src="https://assets.codepen.io/6060109/search-icon-white.png"
                  alt="search-icon"
                />
              </ImageContainer>
            </GreenBox>
          </SearchContainer>
          <JobContainer>
            {props.allJobs.map(
              (job) =>
                (activeCategory === job.category || activeCategory === "") && (
                  <JobBox key={job.id}>
                    <Link
                      to={`/job/${job.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <JobTitle>{job.title}</JobTitle>
                      <JobData>Hourly: ${job.hourlyUSD}.00</JobData>
                      <JobData>Posted {job.postedTime}</JobData>
                      <JobData>
                        <LocationContainer>
                          <img
                            src="https://assets.codepen.io/6060109/location-icon.png"
                            alt="location-icon"
                          />
                        </LocationContainer>
                        {job.remote ? "Remote," : ""} {job.location}
                      </JobData>
                      <JobDescription>{job.description}</JobDescription>
                    </Link>
                  </JobBox>
                )
            )}
          </JobContainer>
        </DescriptionBox>
      </WorkContainer>
    </>
  );
}
