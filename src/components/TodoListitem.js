import React from 'react'
import { MdRemoveCircleOutline,MdCheckBoxOutlineBlank,MdCheckBox } from "react-icons/md";
import classNames from 'classnames'; // 조건부 스타일링
import '../styles/TodoListitem.scss';

function TodoListitem({todo,onRemove,onToggle}) {
    const {id,text,checked} = todo;
  return (
    <div className='TodoListitem'>
        <div className={classNames('Checkbox',{checked})} onClick={()=>onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div  className='text'>{text}</div>
        </div>
        <div className='remove' onClick={()=>onRemove(id)}><MdRemoveCircleOutline /></div>
    </div>
  )
}


export default  TodoListitem;
