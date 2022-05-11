import { Button, Card, Divider } from "antd";
import { Content } from "antd/lib/layout/layout";
import "./calculator.scss";
import { Form, Input } from "antd";
import { useState } from "react";

const Calcultate = () => {
  const [tanureCount, setTanureCount] = useState();
  const [totalInterest, setTotalInterest] = useState();
  const [percent, setPercent] = useState();
  const [amountInterest, setAmountInterest] = useState();
  const [sum, setSum] = useState();
  const [amountSum, setAmountSum] = useState();

  const onFinish = (values) => {
    console.log(typeof values, "values");
    const Amount = values.loanAmount;
    const Tenure = values.tenure;
    const InterestRate = values.interestRate;
    amountDevad(Tenure);
    setTotalInterest(Amount / tanureCount);
    Percentage(Amount, InterestRate);
    AmountWithInterest(percent, tanureCount);
    sump();
    sump(Amount);
  };

  const sump = (Amount) => {
    console.log(percent, Amount, "percent + Amount");
    setAmountSum(percent + Number(Amount));
    setSum(amountInterest + totalInterest);
  };

  const amountDevad = (Tenure) => {
    setTanureCount(Tenure * 12);
  };
  const Percentage = (Amount, InterestRate) => {
    setPercent((Amount * InterestRate) / 100);
  };
  const AmountWithInterest = (percent, Amount) => {
    setAmountInterest(percent / Amount);
  };

  return (
    <>
      <Content style={{ padding: "0 80px" }}>
        <Card>
          <div className="emi-root">
            <h2 className="emi-calculator" type="primary">
              Emi Calculator
            </h2>
            <h3 className="emi-title">Emi Calculator</h3>
            <Divider className="divider" />
            <p className="emi-subtitle">Calculate Your Emi per Month Quickly</p>
          </div>
          <Divider />
          <div className="form-emi">
            <div className="divider-vartical">
              <Form
                name="complex-form"
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                layout="vertical"
              >
                <Form.Item
                  label="Loan Amount :"
                  name="loanAmount"
                  rules={[
                    { required: true, message: "Loan Amount is required" },
                  ]}
                >
                  <Input
                    style={{ width: 483, height: "49px" }}
                    placeholder="Enter loan Amount ₹"
                  />
                </Form.Item>
                <div className="emi-form-wrapper">
                  <Form.Item
                    label="Tenure :"
                    name="tenure"
                    rules={[{ required: true, message: "Tenure is required" }]}
                  >
                    <Input
                      style={{
                        height: "49px",
                      }}
                      placeholder="Enter loan Amount ₹"
                    />
                  </Form.Item>
                  <Form.Item
                    name="interestRate"
                    label="Interest Rate :"
                    rules={[
                      { required: true, message: "Interest Rate is required" },
                    ]}
                  >
                    <Input
                      style={{
                        height: "49px",
                      }}
                      placeholder="Enter Rate of Interest % "
                    />
                  </Form.Item>
                </div>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="emi-submit-button"
                >
                  Calcultate
                </Button>
              </Form>
            </div>
            <div className="your-emi-par">
              <div className="your-emi-title">
                <h1 className="emi-title">Your EMI Per Month will be</h1>
                <p className="emi-month">₹{sum}</p>
                <div className="root-wrapper">
                  <div className="total-interest">
                    <p className="total-title">Total Interest</p>
                    <h5 className="mony-interest">₹{percent}</h5>
                  </div>
                  <div className="total-interest">
                    <p className="total-title">Amount With Interest</p>
                    <h5 className="mony-interest">₹{amountSum}</h5>
                  </div>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="emi-submit-button-Loan"
                >
                  Apply For Loan
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </Content>
    </>
  );
};
export default Calcultate;
