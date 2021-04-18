import React, { useState } from 'react';
import classes from './styles.module.css';
import { idGenerator } from '../utils/idGenerator';

function EditableList() {
  const [list, setList] = useState([{ id: idGenerator(), text: '' }]);
  const [editingId, setEditingId ] = useState(null)
  const [editingText, setEditingText] = useState('');

  const onEdit = data => {
    setEditingText(data.text);
    setEditingId(data.id);
  };

  const handleSave = () => {
    const isTextExist = list.findIndex(listItem => listItem.id === editingId);
    if (isTextExist === -1) {
      const newList = list.pop();
      setList([...newList, { id: idGenerator(), text: editingText }]);
    } else {
      const newList = [...list];
      newList[isTextExist] = { id: editingId, text: editingText };
      setList(newList);
    }
    setEditingText('');
    setEditingId('');
  };

  const handleChange = event => {
    const editingDataId = list.findIndex(data => data.id === editingId);
    const newList = [...list];
    if (!event.target.value) {
      newList.splice(editingDataId, 1);
      setList(newList);
    }
    if (editingDataId === list.length - 1 && editingText === '') {
      newList.push({ id: idGenerator(), text: '' });
      setList(newList);
    }
    setEditingText(event.target.value);
  }

  const handleOnKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSave();
    }
  };

  return (<>
    <ol>
      {list.map(textData => {
        return (
          <li
            key={textData.id}
            onClick={() => onEdit(textData)}
            onBlur={handleSave}
            onKeyDown={handleOnKeyDown}
            className={classes.listLi}
          >
            {editingId && editingId === textData.id ? 
              <input
                type="text"
                value={editingText}
                style={{ border: 'none' }}
                onChange={handleChange} /> :
                textData.text
              }
          </li>
        )
      })}
    </ol>
  </>);
};

export default EditableList;