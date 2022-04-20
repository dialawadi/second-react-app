import React, { Component } from "react";
import Form from "./components/form";
import List from "./components/list";
class App extends Component {
  state = {
    courses: [],
    current: "",
  };
  // Update Course
  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };
  // Add Course
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if (current !== "") {
      courses.push({ name: current });
      this.setState({ courses, current: "" });
    } else {
      alert("You Must Enter a value");
    }
  };
  // Delete Course
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({ courses });
  };
  // Edit Course
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({ courses });
  };
  render() {
    const { courses } = this.state;
    let length = courses.length;
    const courseList = length ? (
      courses.map((course, index) => {
        return (
          <List
            details={course}
            key={index}
            deleteCourse={this.deleteCourse}
            index={index}
            editCourse={this.editCourse}
          />
        );
      })
    ) : (
      <p>No Courses To Show</p>
    );
    return (
      <section className="App">
        <h2>Add Courses</h2>
        <Form
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current={this.state.current}
        />
        <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
