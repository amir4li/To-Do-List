import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Task from "./components/Task";

function App() {

  const [listItems, setListItems] = React.useState([]);

  function addItem(newItem) {
    setListItems((prevItems)=> {
      return [...prevItems, newItem]
    });
  };

  function deleteTask(id) {
    setListItems((prevItems)=> {
      return prevItems.filter((task, index)=> {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <Header />
      <div className="app-body">
        <Form onAdd={addItem} />
        {
          listItems.map((item, index)=> {
            return (
              <Task key={index} id={index} task={item} onDelete={deleteTask} />
            )
          })
        }
      </div>
      <Footer />
    </div>
  );
};

export default App;
