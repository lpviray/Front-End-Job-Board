import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

export const PRIMARY_GREEN = "#39B54A";
export const SECONDARY_NAVY = "#2B5468";

/* LOGIN PAGE STYLED MUI COMPONENTS */
export const LoginBox = styled(Box)(() => ({
  position: "absolute",
  width: "50%",
  minWidth: "275px",
  maxWidth: "550px",
  height: "50vh",
  minHeight: "350px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
}));

export const LoginHeader = styled(Typography)(() => ({
  fontSize: "32px",
  fontWeight: "bold",
  color: "#5c5c5c",
  margin: "-50px 0 40px 0",
}));

export const UsernameInput = styled(Input)(() => ({
  width: "70%",
  border: `1px solid ${PRIMARY_GREEN}`,
  borderRadius: "5px",
  color: "#5c5c5c",
}));

export const PasswordInput = styled(Input)(() => ({
  width: "70%",
  border: `1px solid ${PRIMARY_GREEN}`,
  borderRadius: "5px",
  color: "#5c5c5c",
  marginTop: "15px",
  paddingLeft: "10px",
}));

export const LoginError = styled(Typography)(() => ({
  width: "70%",
  color: "red",
  lineHeight: "1.2",
  marginTop: "20px",
  marginBottom: "-20px",
}));

export const LoginButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  width: "70%",
  marginTop: "40px",
  borderRadius: "20px",
}));

/* JOBS PAGE STYLED MUI COMPONENTS */
export const NavBar = styled(AppBar)(() => ({
  width: "100%",
  minWidth: "850px",
  height: "70px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

export const NavSearch = styled(Input)(() => ({
  width: "50%",
  minWidth: "200px",
  border: "1px solid white",
  background: "white",
  paddingLeft: "15px",
  color: "#717272",
  marginLeft: "100px",
}));

export const NavTextContainer = styled(Box)(() => ({
  width: "50%",
  minWidth: "475px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  paddingRight: "75px",
}));

export const NavText = styled(Typography)(() => ({
  color: "white",
  margin: "0 27.5px",
  cursor: "pointer",
}));

export const WorkContainer = styled(Box)(() => ({
  width: "100%",
  minWidth: "850px",
  height: "150vh",
  display: "flex",
  marginTop: "60px",
}));

export const CategoryBox = styled(Box)(() => ({
  width: "25%",
  minWidth: "200px",
  marginLeft: "100px",
  marginBottom: "60px",
}));

export const FindWork = styled(Typography)(() => ({
  fontSize: "32px",
  fontWeight: "bold",
  color: "#5D5D5C",
  textAlign: "left",
}));

export const Categories = styled(Typography)(() => ({
  fontSize: "27px",
  fontWeight: "bold",
  color: "#5D5D5C",
  textAlign: "left",
  marginTop: "50px",
  cursor: "pointer",
}));

export const Category = styled(Typography)(() => ({
  color: "#7C7B7C",
  textAlign: "left",
  marginTop: "10px",
  cursor: "pointer",
}));

export const DescriptionBox = styled(Box)(() => ({
  width: "75%",
  marginRight: "100px",
  marginBottom: "60px",
}));

export const SearchContainer = styled(Box)(() => ({
  width: "100%",
  height: "48px",
  display: "flex",
}));

export const JobSearch = styled(Input)(() => ({
  width: "100%",
  minWidth: "100px",
  border: "1px solid #FFFFFF",
  background: "#FFFFFF",
  paddingLeft: "15px",
  color: "#717272",
}));

export const GreenBox = styled(Box)(() => ({
  background: PRIMARY_GREEN,
  width: "48px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}));

export const ImageContainer = styled(Box)(() => ({
  width: "24px",
  height: "24px",
}));

export const JobContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  marginTop: "50px",
}));

export const JobBox = styled(Box)(() => ({
  width: "100%",
  minWidth: "450px",
  background: "white",
  marginBottom: "3px",
  cursor: "pointer",
}));

export const JobTitle = styled(Typography)(() => ({
  fontSize: "27px",
  fontWeight: "bold",
  color: "#5D5D5C",
  textAlign: "left",
  padding: "25px 0 15px 25px",
}));

export const JobData = styled(Typography)(() => ({
  display: "flex",
  fontWeight: "bold",
  color: "#7C7B7C",
  textAlign: "left",
  padding: "10px 0 0 25px",
}));

export const JobDescription = styled(Typography)(() => ({
  fontSize: "15px",
  color: "#7C7B7C",
  textAlign: "left",
  padding: "25px",
  lineHeight: "normal",
}));

export const LocationContainer = styled(Box)(() => ({
  width: "16px",
  height: "16px",
  paddingRight: "15px",
}));

/* DETAILS PAGE STYLED MUI COMPONENTS */

export const DetailContainer = styled(Box)(() => ({
  minWidth: "850px",
  display: "flex",
  width: "100%",
  height: "75vh",
  marginTop: "60px",
}));

export const DetailBoxLeft = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "100px",
  width: "65%",
  paddingRight: "42px",
}));

export const DetailJobTitle = styled(Typography)(() => ({
  width: "100%",
  height: "20px",
  fontSize: "27px",
  fontWeight: "bold",
  color: "#5D5D5C",
  textAlign: "left",
  paddingBottom: "60px",
  borderBottom: "2px solid #DFE0E0",
}));

export const DetailDataBox = styled(Typography)(() => ({
  width: "100%",
  textAlign: "left",
  padding: "30px 0 45px 0",
  borderBottom: "2px solid #DFE0E0",
}));

export const DetailJobData = styled(Typography)(() => ({
  display: "flex",
  fontWeight: "bold",
  color: "#7C7B7C",
  textAlign: "left",
  paddingTop: "15px",
}));

export const DetailDescriptionBox = styled(Typography)(() => ({
  width: "100%",
  textAlign: "left",
  padding: "45px 0 45px 0",
  borderBottom: "2px solid #DFE0E0",
}));

export const DetailBoxRight = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "35%",
  maxHeight: "650px",
  background: "white",
  marginRight: "100px",
}));

export const DetailButtonsBox = styled(Box)(() => ({
  width: "98%",
  height: "160px",
  borderBottom: "2px solid #DFE0E0",
}));

export const ProposalButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  width: "80%",
  height: "40px",
  marginTop: "20px",
  borderRadius: "20px",
  textTransform: "none",
}));

export const SaveButton = styled(Button)(() => ({
  background: "white",
  color: PRIMARY_GREEN,
  border: `1px solid ${PRIMARY_GREEN}`,
  width: "80%",
  height: "40px",
  marginTop: "20px",
  borderRadius: "20px",
  textTransform: "none",
}));

export const ClientInfoBox = styled(Box)(() => ({
  width: "98%",
  height: "210px",
  paddingTop: "35px",
  borderBottom: "2px solid #DFE0E0",
}));

export const DetailClientData = styled(Typography)(() => ({
  display: "flex",
  fontWeight: "bold",
  color: "#7C7B7C",
  paddingLeft: "30px",
}));

export const DetailPaymentData = styled(Typography)(() => ({
  display: "flex",
  color: "#7C7B7C",
  padding: "25px 0 0 30px",
}));

export const JobLinkBox = styled(Box)(() => ({
  width: "98%",
  display: "flex",
  flexDirection: "column",
  paddingTop: "35px",
}));

export const JobLink = styled(Input)(() => ({
  width: "80%",
  margin: "20px 0 0 30px",
  paddingLeft: "10px",
  background: "#F2F2F2",
}));

export const JobCopy = styled(Typography)(() => ({
  display: "flex",
  fontWeight: "bold",
  color: PRIMARY_GREEN,
  marginTop: "20px",
  paddingLeft: "30px",
  cursor: "pointer",
}));
