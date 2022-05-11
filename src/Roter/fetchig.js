import { Button, Card, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import axios from "axios";
import {  useState } from "react";

const Fetchig = () => {
  const [data, setData] = useState([]);

  let url = {
    1: "https://jsonplaceholder.typicode.com/albums/1/photos",
    2: "https://jsonplaceholder.typicode.com/albums",
    3: "https://jsonplaceholder.typicode.com/comments",
    4: "https://jsonplaceholder.typicode.com/photos",
  };

  const onFetching = (step) => {
    axios
      .get(url[step])
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("come");
      });
  };
  console.log(data,"data")

  return (
    <>
      <div style={{ margin: "10px" }}>
        <Button style={{ margin: "10px" }} type="primary" onClick={() => onFetching(1)}>
          FETCHING--0
        </Button>
        <Button  type="primary" onClick={() => onFetching(2)}>
          FETCHING--1
        </Button>
        <Button style={{ margin: "10px" }} type="primary" onClick={() => onFetching(3)}>
          FETCHING--2
        </Button>
        <Button type="primary" onClick={() => onFetching(4)}>
          FETCHING--3
        </Button>
      </div>
      <Row >
        {data.map((item) => (
          <>
            <Row>
              <Card
                hoverable
                style={{ width: 240, margin: "10px", borderRadius: "10px" }}
                cover={<img alt={item.id} src={item.thumbnailUrl} />}
              >
                <Meta title={item.title} description={item.email} />
              </Card>
            </Row>
          </>
        ))}
      </Row>
    </>
  );
};
export default Fetchig;
