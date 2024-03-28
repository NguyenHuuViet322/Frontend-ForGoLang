import { ChangeEvent, FormEvent, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { useParams } from "react-router-dom";

function CreateForm() {
    const {idUser} = useParams();
    const [title, setTitle] = useState('') 
    const [content, setcontent] = useState('') 
    const [remindTime, setRemindTime] = useState('') 

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        fetch('http://localhost:8080/createTodo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "Title": title,
                    "Content": content,
                    "IdUser": idUser,
                    "RemindTime": remindTime
                }),
        })
        .then(response => console.log(response))
    }

    return (
        <form onSubmit={(e) => submit(e)}>
            <h1>Tạo nhắc việc</h1>
            <div className="form-group">
                <input type="hidden" value={idUser}/>
                <label>
                    Tiêu đề</label>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" id="Title" className="form-control"/>
                <label>
                    Nội dung:</label>
                    <textarea  onChange={(e) => setcontent(e.target.value)} className="form-control" id="Content"></textarea>
                <label>
                    Thời điểm:</label>
                <input type="datetime-local"  onChange={(e) => setRemindTime(e.target.value)} id="RemindTime" className="form-control"/>
                <input type="submit" value="Submit" />
            </div>
        </form>
      );
}

export default CreateForm;