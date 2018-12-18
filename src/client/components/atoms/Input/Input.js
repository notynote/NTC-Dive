import React from "react";

import PropTypes from "prop-types";

import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import customInputStyle from "../../../assets/jss/inputStyles";

class CustomInput extends React.PureComponent {
  render() {
    const {
      classes,
      formControlProps,
      labelText,
      id,
      required,
      labelProps,
      inputProps,
      error,
      value,
      white,
      onChange,
      inputRef,
      inputRootCustomClasses,
      success
    } = this.props;
  
    const labelClasses = classNames({
      [" " + classes.labelRootError]: error,
      [" " + classes.labelRootSuccess]: success && !error
    });
    const underlineClasses = classNames({
      [classes.underlineError]: error,
      [classes.underlineSuccess]: success && !error,
      [classes.underline]: true,
      [classes.whiteUnderline]: white
    });
    const marginTop = classNames({
      [inputRootCustomClasses]: inputRootCustomClasses !== undefined
    });
    const inputClasses = classNames({
      [classes.input]: true,
      [classes.whiteInput]: white
    });
    var formControlClasses;
    if (formControlProps !== undefined) {
      formControlClasses = classNames(
        formControlProps.className,
        classes.formControl
      );
    } else {
      formControlClasses = classes.formControl;
    }
    return (
      <FormControl {...formControlProps} className={formControlClasses}>
        {labelText !== undefined ? (
          <InputLabel
            className={classes.labelRoot + " " + labelClasses}
            htmlFor={id}
            {...labelProps}
          >
            {labelText}
          </InputLabel>
        ) : null}
        <Input
          classes={{
            input: inputClasses,
            root: marginTop,
            disabled: classes.disabled,
            underline: underlineClasses
          }}
          id={id}
          {...inputProps}
          inputRef={inputRef}
          onChange={onChange}
          value={value}
          required={required}

        />  
      </FormControl>
    );
  }
}

CustomInput.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
  inputRef: PropTypes.object,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.any
};

export default withStyles(customInputStyle)(CustomInput);
