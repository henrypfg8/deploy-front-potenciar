import Styles from "./PostOptions.module.css";
//
import DeleteIcon from "../../../assets/DeleteIcon";
import { ModifyPostIcon } from "../../../assets/PostOptionsIcons";
//
import Swal from "sweetalert2";
//
import axios from 'axios';
//
import { configureHeaders } from '../../../Redux/auth/configureHeaders ';
//
import { useDispatch } from 'react-redux'
import { getPosts } from "../../../Redux/actions/postsActions";


export default function PostOptions({ id }) {
  const config = configureHeaders();
  const dispatch = useDispatch()
  //
  const deleteHandler = (e) => {
    console.log('el delete', e)
    e.preventDefault();
    Swal.fire({
      title: "¿Seguro que quieres eliminar la publicación?",
      icon: "warning",
      iconColor: "#005692",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://deploy-back-potenciar-3rzpu5z84-potenciarsolidarios-projects.vercel.app//posts/${id}`, config);
        setTimeout(() => {
          dispatch(getPosts());
        }, 0);
        // Swal.fire({
        //   title: "Publicación Eliminada",
        //   icon: "success",
        //   customClass: {
        //     confirmButton: "swallowOkButton",
        //   },
        // });
      }
    });

  };

  ////////////////////////////////////////

  return (
    <div className={Styles.Options}>
      <div className={Styles.Options__option} id={Styles.deleteOption}>
        <p>Eliminar</p>
        <DeleteIcon className={Styles.Option_icon} onClick={deleteHandler} />
      </div>
      <div className={Styles.Options__option}>
        <p>Modificar</p>
        <ModifyPostIcon className={Styles.Option_icon} />
      </div>
    </div>
  );
}
