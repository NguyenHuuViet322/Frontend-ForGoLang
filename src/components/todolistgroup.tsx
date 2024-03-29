import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListGroup from "./listgroup";
import { Avatar, FloatButton, List, Modal, Skeleton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CreateForm from "./createform";
import UpdateForm from "./updateform";

function TodoList() {
    const [todolist, setTodolist] = useState<any[]>([]); 
    const [IsCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [IsUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [idTodo, setIdTodo] = useState(""); 
    const [titleTodo, setTitleTodo] = useState(""); 
    const [contentTodo, setContentTodo] = useState(""); 

    const {id} = useParams();
    
    const showCreateModal = () => {
      setIsCreateModalOpen(true);
    };
    const handleCreateCancle = () => {
      setIsCreateModalOpen(false)
    }
    const showUpdateModal = () => {
      setIsUpdateModalOpen(true);
    };
    const handleUpdateCancle = () => {
      setIsUpdateModalOpen(false)
    }
  
    useEffect(() => {
      fetch("http://localhost:8080/getTodoByUser/"+id) 
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTodolist(data);
        });
    }, []); 
  
  return (
    <div>
        <h1>Danh sách việc cần làm</h1>
        <FloatButton onClick={showCreateModal} 
          type="primary"
          tooltip="Tạo mới"
          icon={<PlusOutlined />}/>
        <List
          className="list"
          itemLayout="horizontal"
          dataSource={todolist}
          renderItem={(item) => (
            <List.Item className="listitem"
              onClick={showUpdateModal}
              actions={[<a key="list-loadmore-edit" onClick={() => {
                
              }}>edit</a>]}
            >
              
              
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  title={item.title}
                  description={item.content}
                />
                <div>content</div>
              </Skeleton>
              
            </List.Item>
            
          )}
    />

        <Modal title="Tạo mới nhắc việc" open={IsCreateModalOpen}  onCancel={handleCreateCancle} footer={null}>
          <CreateForm idUser={id}></CreateForm>
        </Modal>
        
        <Modal title="Chỉnh sửa nhắc việc" open={IsUpdateModalOpen}  onCancel={handleUpdateCancle} footer={null}>
          <UpdateForm idUser={id} idTodo={idTodo} titleTodo={titleTodo} contentTodo={contentTodo}></UpdateForm>
        </Modal>
    </div>
  );
  }
  
  export default TodoList;