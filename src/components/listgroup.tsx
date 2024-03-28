import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ListGroup() {
    const [accounts, setAccounts] = useState<any[]>([]); 

  useEffect(() => {
    fetch("http://localhost:8080/getUsers") 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAccounts(data);
      });
  }, []); 

  return (
    <div>
        <h1>Chọn tài khoản</h1>
        <ul className="list-group">
            {
                accounts.map((acc) => {
                    return(
                        <Link key={acc.Id} to={`/todo/${acc.Id}`}><li className="list-group-item">{acc.Name} - {acc.Email}</li></Link>
                    )
                } )
            }
        </ul>
    </div>
  );
}


export default ListGroup;
