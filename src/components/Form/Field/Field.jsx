import React from "react";
import Input from "../../commons/fields/Input";
import Date from "../../commons/fields/Date";
import Select from "../../commons/fields/Select";
import Textarea from "../../commons/fields/Textarea";
import Checkbox from "../../commons/fields/Checkbox";
import "./Field.css";

const Field = (props) => {
  const getField = () => {
    switch (props.type) {
      case "text":
        return <Input {...props} />;
      case "date":
        return <Date {...props} />;
      case "select":
        return <Select {...props} />;
      case "textarea":
        return <Textarea {...props} />;
      case "checkbox":
        return <Checkbox {...props} />;
      default:
        return null;
    }
  };
  return <>{getField()}</>;
};

export default Field;
