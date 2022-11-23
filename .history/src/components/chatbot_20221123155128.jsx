import { checkPropTypes } from "prop-types";
import { useEffect, useState } from "react";

function Review(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
  });

  useEffect(() => {
    const { steps } = props;
    const { name, gender, age } = steps;

    setFormData({ name, gender, age });
  });

  return (
    <div style={{ width: "100%" }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name.value}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{gender.value}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Review.propTypes = {
    steps: checkPropTypes.object,
  };
  
  Review.defaultProps = {
    steps: undefined,
  };
