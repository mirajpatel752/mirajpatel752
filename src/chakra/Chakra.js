import { Button, Result } from "antd";
import { useState } from "react";
import { getUserDetails } from "../common/commonActionCreators";
import { useDispatch, useSelector } from "react-redux";

const   Chakra = () => {
  console.log("come---Chakra");
  const [state, setState] = useState([]);
  const { userDetails } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(userDetails, "userDetails");

  const componentDidMount = () => {
    // getUserDetails(dispatch);

    // fetch("https://reqres.in/api/user").then((res) => {
    //   res.json().then((result) => {
    //     setState({ user: result.data });
    //   });
    // });
  };
  return (
    <>
      <Button onClick={() => componentDidMount}>BLOG</Button>
    </>
  );
};
export default Chakra;
