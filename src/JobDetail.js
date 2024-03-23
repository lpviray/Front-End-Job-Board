import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  PRIMARY_GREEN,
  SECONDARY_NAVY,
  NavBar,
  NavSearch,
  NavTextContainer,
  NavText,
  JobDescription,
  LocationContainer,
  DetailContainer,
  DetailBoxLeft,
  DetailBoxRight,
  DetailJobTitle,
  DetailDataBox,
  DetailJobData,
  DetailDescriptionBox,
  DetailButtonsBox,
  ProposalButton,
  SaveButton,
  ClientInfoBox,
  DetailClientData,
  DetailPaymentData,
  JobLinkBox,
  JobLink,
  JobCopy,
} from "./StyledComponents";
import Icon from "@mui/material/Icon";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CopyToClipboard from "react-copy-to-clipboard";

export default function JobDetail(props) {
  const [proposalClicked, setProposalClicked] = useState(false);
  const [saveClicked, setSaveClicked] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const navigate = useNavigate();
  let { id } = useParams();

  const heartIcon = (
    <Icon
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="https://assets.codepen.io/6060109/heart-icon.png" alt="heart" />
    </Icon>
  );

  function getPlaceholder() {
    if (props.allJobs[id - 1].title === "Front End Software Developer")
      setPlaceholder(
        "https://www.indeed.com/jobs?q=front+end+software+developer&l=United+States&vjk=1b30741d00af9fd3",
      );
    else if (props.allJobs[id - 1].title === "React Developer")
      setPlaceholder(
        "https://www.indeed.com/jobs?q=react+developer&l=&vjk=f41a00c64f246ea2",
      );
    else if (props.allJobs[id - 1].title === "Graphic Designer")
      setPlaceholder(
        "https://www.indeed.com/jobs?q=graphic+designer&l=United+States&vjk=79aafe09a84194aa",
      );
    else if (props.allJobs[id - 1].title === "Shopify Developer")
      setPlaceholder(
        "https://www.indeed.com/jobs?q=shopify+developer&l=Philippines&vjk=bb5cf0258bef24b5",
      );
    else setPlaceholder("N/A");
  }
  // Obtain new job link placeholder every page load
  useEffect(getPlaceholder, [placeholder]);

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
            onClick={() => navigate("/jobs")}
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
      <DetailContainer>
        <DetailBoxLeft>
          <DetailJobTitle>{props.allJobs[id - 1].title}</DetailJobTitle>
          <DetailDataBox>
            <DetailJobData sx={{ color: PRIMARY_GREEN }}>
              {props.allJobs[id - 1].category}
            </DetailJobData>
            <DetailJobData sx={{ fontWeight: "normal" }}>
              Posted {props.allJobs[id - 1].postedTime}
            </DetailJobData>
            <DetailJobData>
              <LocationContainer>
                <img
                  src="https://assets.codepen.io/6060109/location-icon.png"
                  alt="location-icon"
                />
              </LocationContainer>
              {props.allJobs[id - 1].remote ? "Remote, " : ""}
              {props.allJobs[id - 1].location}
            </DetailJobData>
          </DetailDataBox>
          <DetailDescriptionBox>
            <JobDescription sx={{ padding: "0" }}>
              {props.allJobs[id - 1].description}
              {<br />}
              {<br />}
            </JobDescription>
            <JobDescription
              sx={{ padding: "0", color: PRIMARY_GREEN, fontWeight: "bold" }}
            >
              Salary: ${props.allJobs[id - 1].hourlyUSD} per hour
              {<br />}
              {<br />}
            </JobDescription>
            <JobDescription sx={{ padding: "0" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </JobDescription>
          </DetailDescriptionBox>
        </DetailBoxLeft>
        <DetailBoxRight>
          <DetailButtonsBox>
            <ProposalButton
              variant="contained"
              disableElevation="true"
              onClick={() => setProposalClicked(true)}
              sx={{
                backgroundColor: proposalClicked && SECONDARY_NAVY,
                border: proposalClicked && `1px solid ${SECONDARY_NAVY}`,
                color: proposalClicked && "white",
              }}
            >
              {proposalClicked ? "Proposal Submitted" : "Submit a Proposal"}
            </ProposalButton>
            <SaveButton
              variant="outlined"
              startIcon={heartIcon}
              disableElevation="true"
              onClick={() => setSaveClicked(true)}
              sx={{
                backgroundColor: saveClicked && SECONDARY_NAVY,
                border: saveClicked && `1px solid ${SECONDARY_NAVY}`,
                color: saveClicked && "white",
              }}
            >
              {saveClicked ? "Job Saved" : "Save Job"}
            </SaveButton>
          </DetailButtonsBox>
          <ClientInfoBox>
            <DetailClientData>About the client</DetailClientData>
            <DetailPaymentData>
              <LocationContainer>
                <img
                  src="https://assets.codepen.io/6060109/check-icon.png"
                  alt="location-icon"
                />
              </LocationContainer>
              {props.allJobs[id - 1].paymentVerified
                ? "Payment verified"
                : "Payment not verified"}
            </DetailPaymentData>
            <DetailClientData sx={{ fontWeight: "normal", paddingTop: "25px" }}>
              <LocationContainer sx={{ cursor: "pointer" }}>
                <a
                  href="https://maps.app.goo.gl/HMuVCQmsKtnTNGib6"
                  target="_blank"
                >
                  <img
                    src="https://assets.codepen.io/6060109/location-icon-alt.png"
                    alt="location-icon"
                  />
                </a>
              </LocationContainer>
              {props.allJobs[id - 1].location}
            </DetailClientData>
            <DetailClientData
              sx={{ fontWeight: "normal", paddingTop: "25px" }}
              onClick={() => {
                alert("Contact Information has been copied to clipboard");
              }}
            >
              <CopyToClipboard text="lvdodi@gmail.com">
                <LocationContainer sx={{ cursor: "pointer" }}>
                  <MailOutlineIcon
                    fontSize="small"
                    sx={{ color: PRIMARY_GREEN }}
                  />
                </LocationContainer>
              </CopyToClipboard>
              lvdodi@gmail.com
            </DetailClientData>
          </ClientInfoBox>
          <JobLinkBox>
            <DetailClientData>Job link</DetailClientData>
            <JobLink
              disabled={true}
              placeholder={placeholder}
              disableUnderline={true}
            ></JobLink>
            <CopyToClipboard text={placeholder}>
              <JobCopy
                onClick={() => {
                  setLinkClicked(true);
                }}
              >
                {linkClicked ? "Copied Link!" : "Copy Link"}
              </JobCopy>
            </CopyToClipboard>
          </JobLinkBox>
        </DetailBoxRight>
      </DetailContainer>
    </>
  );
}
