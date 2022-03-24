import { useState, useRef } from "react";
import Input from "./Input";
import List from "./List";

const App = () => {

  const [data, setData] = useState([]);
  const newId = useRef(0);

  const creatText = (content) => {
    const newData = {
      content,
      id: newId.current
    }
    newId.current += 1;
    setData([...data, newData])
  }

  const onDelete = (id) => {
    const newItem = data.filter((item)=> item.id !== id);
    setData(newItem);
  }

  const onEdit = (id, newContent) => {
    setData(data.map((item)=> item.id === id ? {...item , content: newContent} : id))
  }

  return (
    <div className="todo_wrap">
      <Input creatText={creatText} />
      <List data={data} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;