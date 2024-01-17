import { useState } from "react";
import * as service from "../../services/TimesCrudServices";
import './Image.scss'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Photo = (props) => {
  const [modalTargetName, setModalTargetName] = useState("modalImg-"+props.id);
  const dd = "#";
  const {id} = useParams();
  const navigate = useNavigate();
  const deleteHandler = ()=>{
    service.deleteWork(props.id);
    navigate('/main');
}
  return (
    <div className="card col-6" >
      <img src={props.picture} name="picture" className="card-img-top" alt={props.title} data-bs-toggle="modal" data-bs-target={dd+modalTargetName} />
      <Link  className='btn' onClick={deleteHandler}><svg xmlns="http://www.w3.org/2000/svg" width="23" height="30" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
      </svg></Link>
      <div className='modal fade' id={modalTargetName} tabIndex='-1' aria-hidden="true">
        <div className="modal-dialog" >
          <div className="modal-content">
            <div className="modal-body">
              <img src={props.picture}  alt={props.title} />
              <button type="button" className='btn-close' data-bs-dismiss="modal" aria-label='Close'></button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Photo;
