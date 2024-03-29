import { Avatar, List } from "antd";
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
        <List
          className="list"
          itemLayout="horizontal"
          dataSource={accounts}
          renderItem={(item, index) => (
            <List.Item>

                    <List.Item.Meta className="listitem"
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                    title={<a href={`/todo/${item.Id}`}>{item.Name}</a>}
                    description={item.Email}
                  />
                 
              
            </List.Item>
          )}
        />
    </div>
  );
}


export default ListGroup;
