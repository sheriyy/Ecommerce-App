import React, { useState } from "react";
import { Grid, TextField, Paper, Button } from "@mui/material";

const Register = ({
  title,
  editForm,
  handleChange,
  handleSubmit,
  handleClose,
  formValues,
  formErrors,
}) => {
  const maxWidth = title === "employee" ? "100%" : "";
  const marginLeft = title === "employee" ? "15%" : "";
  const margin = title === "employee" ? "0 auto" : "2% auto";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="form-control form-style"
        style={{
          maxWidth,
          border: "none",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin,
        }}
      >
        <Paper elevation={3}>
          <div style={{ backgroundColor: "lightblue" }}>
            <h3
              style={{
                color: "black",
                padding: "4%",
                fontWeight: 600,
                textAlign: "start",
              }}
            >
              {editForm !== "edit" ? "Register" : "Edit Form"}
            </h3>
          </div>
          <Grid container>
            <Grid item xs={12} style={{ padding: "0 10%", margin: "1% auto" }}>
              <TextField
                error={formErrors.email}
                id="standard-error-helper-text"
                label="Email"
                helperText={formErrors.email}
                variant="standard"
                type="text"
                name="email"
                fullWidth={true}
                value={formValues.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} style={{ padding: "0 10%", margin: "1% auto" }}>
              <TextField
                error={formErrors.name}
                id="standard-error-helper-text"
                label="Name"
                helperText={formErrors.name}
                variant="standard"
                type="text"
                name="name"
                fullWidth={true}
                value={formValues.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} style={{ padding: "0 10%", margin: "1% auto" }}>
              <TextField
                error={formErrors.address}
                id="standard-error-helper-text"
                label="Address"
                helperText={formErrors.address}
                variant="standard"
                type="text"
                name="address"
                fullWidth={true}
                value={formValues.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} style={{ padding: "0 10%", margin: "1% auto" }}>
              <TextField
                error={formErrors.contactNo}
                id="standard-error-helper-text"
                label="Contact No"
                helperText={formErrors.contactNo}
                variant="standard"
                type="number"
                name="contactNo"
                fullWidth={true}
                value={formValues.contactNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} style={{ padding: "0 10%", margin: "1% auto" }}>
              <TextField
                error={formErrors.department}
                id="standard-error-helper-text"
                label="Department"
                helperText={formErrors.department}
                variant="standard"
                type="text"
                name="department"
                fullWidth={true}
                value={formValues.department}
                onChange={handleChange}
              />
            </Grid>
            {editForm !== "edit" ? (
              <Grid
                item
                xs={12}
                style={{ padding: "0 10%", margin: "1% auto" }}
              >
                <TextField
                  error={formErrors.password}
                  id="standard-error-helper-text"
                  label="Password"
                  helperText={formErrors.password}
                  variant="standard"
                  type="password"
                  name="password"
                  fullWidth={true}
                  value={formValues.password}
                  onChange={handleChange}
                />
              </Grid>
            ) : (
              ""
            )}
            {editForm !== "edit" ? (
              <Grid
                item
                xs={12}
                style={{ padding: "0 10%", margin: "1% auto" }}
              >
                <TextField
                  error={formErrors.confirmPassword}
                  id="standard-error-helper-text"
                  label="Confirm Password"
                  helperText={formErrors.confirmPassword}
                  variant="standard"
                  type="text"
                  name="confirmPassword"
                  fullWidth={true}
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                />
              </Grid>
            ) : (
              ""
            )}
          </Grid>

          <Button
            variant="outlined"
            size="large"
            type="submit"
            style={{ margin: "6% 5% 6%", marginLeft }}
          >
            Register{" "}
          </Button>
          {title === "employee" ? (
            <Button
              variant="outlined"
              size="large"
              style={{ margin: "6% 0" }}
              onClick={handleClose}
            >
              Close
            </Button>
          ) : (
            ""
          )}
          <p style={{ paddingBottom: "2%" }}></p>
        </Paper>
      </form>
    </div>
  );
};

export default Register;
