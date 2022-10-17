import React, { useEffect, useState } from 'react'


function Info() {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const OnChangeName = (e) =>{
        setName(e.target.value)
    }
    const OnChangeNickName = (e) =>{
        setNickname(e.target.value)
    }

    useEffect(()=>{
        console.log("랜더링이 완료되었습니다.") //componentDidMount()
    },[name,nickname])//componentDidUpdate();
  return (
    <div>
        <div>
            <input value={name} onChange={OnChangeName} />
            <input value={nickname} onChange={OnChangeNickName} />
        </div>
        <div>
            <div><b>이름 : {name}</b></div>
            <div><b>닉네임 :{nickname}</b></div>
        </div>
    </div>
  )
}



export default Info;