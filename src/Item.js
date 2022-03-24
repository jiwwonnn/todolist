import React, { useState } from 'react'

const Item = ({ content, onDelete, id , onEdit}) => { // newData = content

    const [edit, setEdit] = useState(false)
    const [newContent, setNewContent] = useState(content);


    // 삭제
    const handleDelete = () => {
        onDelete(id);
    }

    // 수정
    const handleEdit = () => {
        setEdit(!edit);
    }

    // 수정취소
    const handleCancel = () => {
        setEdit(!edit);
        setNewContent(content)
    }

    // 수정완료
    const handleEditFinish = () => {
        onEdit(id, newContent);
        setEdit(!edit);
    }

  return (
      <>    
            {
                edit ? 
                <div>
                    <input type="text" value={newContent} onChange={(e)=> setNewContent(e.target.value)}/>
                    </div>
                :
                <p>{content}</p>

            }
            {
                edit ? 
                <>
                    <button onClick={handleCancel}>수정취소</button>
                    <button onClick={handleEditFinish}>수정완료</button>
                </> 
                : 
                <>
                    <button onClick={handleDelete}>삭제</button>
                    <button onClick={handleEdit}>수정</button>
                </>
            }
        </>
  )
}

export default Item