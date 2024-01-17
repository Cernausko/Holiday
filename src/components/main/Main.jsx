import { InputPicture } from "../inputPicture/inputPicture";
import { Modal } from "../modal/Modal";
import { ViewPhotos } from "../viewimage/viewimage";
import "./main.scss";
export const Main = () =>{
    return(
        <div className="container">
            <Modal>
                {<InputPicture/>}
            </Modal>
            <ViewPhotos/>
        </div>
    )
}