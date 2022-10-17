import React, { useCallback, useState } from 'react'
import { MdAdd } from "react-icons/md";
import '../styles/Todoinsert.scss';

function Todoinsert({onInsert}) {
    const [value, setValue] = useState("");
    const onChange = useCallback((e)=>{
        setValue(e.target.value)
    },[])
    const onSubmit = useCallback((e)=>{
      onInsert(value);
      e.preventDefault();
      setValue("");
    },[value])
  return (
    <form className='Todoinsert' onSubmit={onSubmit}>
        <input value={value} onChange={onChange} placeholder='할일을 입력하세요' />
        <button type="submit"><MdAdd /></button>
    </form>
  )
}

export default  Todoinsert;
