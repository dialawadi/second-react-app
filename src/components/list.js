import React, { Component } from "react";

class List extends Component {
  state = {
    isEdit: false,
  };
  // render course item
  renderCourse = () => {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <button onClick={() => this.toggleState()}>Edit Course</button>
        <button
          onClick={() => {
            this.props.deleteCourse(this.props.index);
          }}
        >
          Delete Course
        </button>
      </li>
    );
  };

  // toggle state
  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({ isEdit: !isEdit });
  };
  // update Course Item
  updateCourseItem = (e) => {
    e.preventDefault();
    if (this.input.value !== "") {
      this.props.editCourse(this.props.index, this.input.value);
      this.toggleState();
    } else {
      alert("you can not update to empty value");
    }
  };

  // render update form
  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input
          type="text"
          ref={(v) => (this.input = v)}
          defaultValue={this.props.details.name}
        />
        <button>Update Course</button>
      </form>
    );
  };

  render() {
    let { isEdit } = this.state;
    return <>{isEdit ? this.renderUpdateForm() : this.renderCourse()}</>;
  }
}

export default List;
