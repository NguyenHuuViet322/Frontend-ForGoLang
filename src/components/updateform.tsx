import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { useParams } from "react-router-dom";

function UpdateForm() {
    let {id} = useParams()
    const [data, setData] = useState("") 
    const [title, setTitle] = useState() 
    const [content, setcontent] = useState('') 
    const [idUser, setIdUser] = useState('') 

    useEffect(() => {
        fetch("http://localhost:8080/getTodo/"+id) 
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setData(data);
            setTitle(data.title);
            setcontent(data.content);
          });
      }, []); 
    

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        fetch('http://localhost:8080/updateTodo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "Id": Number(id),
                    "Title": title,
                    "Content": content,
                    "IdUser": Number(idUser),
                    "RemindTime": "0",
                }),
        })
        .then(response => console.log(response))
    }

    return (
        <form onSubmit={(e) => submit(e)}>
            <div className="form-group">
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

export default UpdateForm;