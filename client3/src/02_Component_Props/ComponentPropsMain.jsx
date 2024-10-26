import React from "react";
import SingleProps from "./AllProps/SingleProps";
import MultipleProps from "./AllProps/MultipleProps";
import ValueProps from "./AllProps/ValueProps";
import PropsPass from "./AllProps/PropsPass";
import OptionalProps from "./AllProps/OptionalProps";
import PropsSpread from "./AllProps/PropsSpread";
const ComponentPropsMain = () => {
  const name = "Debasish";
  const age = 36;

  const arr = { a: "React", b: "Angular" };

  return (
    <div>
      <SingleProps name="Debasish" />
      <br />
      <MultipleProps name="Debasish" title="Sahoo" />
      <br />
      <ValueProps
        str="This is String Value"
        num={23}
        bool={true}
        obj={{ name: "Debasish", title: "Sahoo" }}
        arr={["a", "b", "c"]}
        temp={`Hello i am ${name}, my age is ${age}`}
        jsx={5 + 6 + 7 - (2 * 5) / 7}
      />
      <br />
      <PropsPass students={["Saheli", "Srabani", "Anit", "Debasish"]} />
      <br />
      <OptionalProps student="Anit" />
      <br />
      <OptionalProps />
      <br />
      <PropsSpread a={arr.a} b={arr.b}/>
      <br />
      <PropsSpread {...arr}/>

    </div>
  );
};

export default ComponentPropsMain;
