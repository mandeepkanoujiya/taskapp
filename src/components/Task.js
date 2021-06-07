import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "../App.css";
class Task extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://jsonplaceholder.typicode.com/todos").then((response) => {
      response.json().then((result) => {
        console.log(result);
        this.setState({ data: result });
      });
    });
  }

  delete(item) {
    const data = this.state.data.filter((i) => i.id !== item.id);
    this.setState({ data });
  }
  render() {
    return (
      <div className="table">
        {this.state.data ? (
          <Table bordered hover>
            <tbody>
              {this.state.data.map((item, i) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.completed}</td>
                  <td>
                    <div key={item.id}>
                      <button
                        onClick={this.delete.bind(this, item)}
                        className="delete"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>loading.....</p>
        )}
      </div>
    );
  }
}

export default Task;
