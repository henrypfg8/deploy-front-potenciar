import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardDashboard from '../CardDashboard'
import SearchDashBoard from '../SearchDashBoard';
import Styles from '../dashboard.module.css'
import { getPosts } from '../../../../Redux/actions/postsActions';
import axios from 'axios';
import { configureHeaders } from '../../../../Redux/auth/configureHeaders ';
import { Modal } from 'antd';

const PendingPosts = () => {
    const { posts } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    const [refreshData, setRefreshData] = useState(false);
    const [errorNoSeleted, setErrorNoSeleted] = useState(false);

    const [listSearchPost, setListSearchPost] = useState([]);
    //guardar los posts seleccionados para publicar
    const [selectedPosts, setSelectedPosts] = useState([]);

    const [isModalOpenPublish, setIsModalOpenPublish] = useState(false);
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
    //filtrar los posts que no estan publicados



    const postsPending = posts.filter((post) => { return post.status !== true; });

    useEffect(() => {

        dispatch(getPosts());

    }, [refreshData])


    const handleCheckboxChange = (item) => {
        if (selectedPosts.includes(item)) {
            setSelectedPosts(selectedPosts.filter(i => i !== item));
        } else {
            setSelectedPosts([...selectedPosts, item]);
        }
    }
    const handleSelectAllPost = () => {
        if (selectedPosts.length === postsPending.length) {
            setSelectedPosts([]);
        } else {
            setSelectedPosts(postsPending);
        }
    }

    //Areas de modales para publicar 
    const showModal = () => {
        setIsModalOpenPublish(true);

    };

    // Función para cerrar el modal
    const handleClose = () => {
        setIsModalOpenPublish(false);
    };
    // Función para abrir el modal


    const handlePulishPosts = async () => {//publicar los posts seleccionados
        if (selectedPosts.length === 0) {
            setErrorNoSeleted(true);
            return;
        }
        setErrorNoSeleted(false);
        setRefreshData(true);

        try {
            const config = configureHeaders(); //configurar los headers
            const updatePromises = selectedPosts.map(post =>
                axios.put(`https://potenciar-solidario.onrender.com/posts/${post.id}`,//actualizar el post
                    { ...post, status: '1' }, //cambiar el estado del post
                    config)
            );

            const results = await Promise.all(updatePromises); //esperar a que todas las peticiones se completen

            // Después de que todas las peticiones se han completado
            setSelectedPosts([]);
            setIsModalOpenPublish(false)
            setRefreshData(false);
            console.log(results);
        } catch (error) {
            console.log(error.response);
            // Manejar el error (por ejemplo, si alguna de las peticiones falla)
        }
    };
    //Areas de modales para eliminar

    const showModalDelete = () => {
        setIsModalOpenDelete(true);
    }
    const handleCloseDelete = () => {
        setIsModalOpenDelete(false);
    };
    const handleDeletePosts = async () => {
        try {

            const config = configureHeaders(); //configurar los headers
            const deletePromises = selectedPosts.map(post =>
                axios.delete(`https://potenciar-solidario.onrender.com/posts/${post.id}`, config)
            );
            const results = await Promise.all(deletePromises); //esperar a que todas las peticiones se completen
            // Después de que todas las peticiones se han completado
            setIsModalOpenDelete(false)
            setSelectedPosts([]);
            setRefreshData(false);
            console.log(results);
        }
        catch (error) {
            console.log(error.response)
        }
    }
    return (
        <div className={Styles.dashboard}>
            {postsPending.length === 0 && <p className={Styles.dashboard__post}>No hay publicaciones pendientes</p>}
            {postsPending.length > 0 && (
                <div>
                    <p className={Styles.dashboard__post}>Hay {postsPending.length} publicaciones pendientes</p>
                    <div className={Styles.button__flexDiv}>
                        <button className={Styles.button__selected} onClick={handleSelectAllPost}>  {selectedPosts.length === postsPending.length ? 'Deseleccionar Todo' : 'Seleccionar Todo'}</button>
                    </div>
                </div>
            )}
            <SearchDashBoard
                search={search}
                setSearch={setSearch}
                postsPending={postsPending}
                setListSearchPost={setListSearchPost}
            />
            {errorNoSeleted && <p className={Styles.dashboard__error}>No se seleccionó ninguna publicación</p>}


            <div className={Styles.dashboard__div}>

                <div className={Styles.dashboard__divCards}>

                    {listSearchPost.length > 0 ? listSearchPost.map((post) => {
                        return (
                            <CardDashboard
                                key={post.id}
                                post={post}
                                setRefreshData={setRefreshData}
                                refreshData={refreshData}
                                isCheked={selectedPosts.includes(post)}
                                onCheckboxChange={handleCheckboxChange}
                            />
                        )
                    }) : postsPending.map((post) => {
                        return (
                            <CardDashboard
                                key={post.id}
                                post={post}
                                setRefreshData={setRefreshData}
                                refreshData={refreshData}
                                isCheked={selectedPosts.includes(post)}
                                onCheckboxChange={handleCheckboxChange}

                            />
                        )
                    })}
                </div>
                {selectedPosts.length > 0 && (
                    <div className={Styles.dashboard__buttons}>
                        <button className={Styles.dashboard__btn}
                            onClick={showModal}
                        >Publicar</button>
                        <button className={Styles.dashboard__btn2}
                            onClick={showModalDelete}
                        >Eliminar</button>
                    </div>
                )}
                <div>
                    <Modal
                        title={`Deseas publicar estos ${selectedPosts.length} posts?`}
                        open={isModalOpenPublish}
                        onCancel={handleClose}
                        cancelText="Cancelar"
                        okText="Sí,Publicar"
                        onOk={handlePulishPosts}
                        cancelButtonProps={{
                            style: { backgroundColor: '#fff', color: '#005692', border: '1px solid #005692' }
                        }}

                    />
                    <Modal
                        title={`Deseas eliminar ${selectedPosts.length} posts?`}
                        open={isModalOpenDelete}
                        onCancel={handleCloseDelete}
                        cancelText="Cancelar"
                        okText="Sí,Eliminar"
                        onOk={handleDeletePosts}
                        cancelButtonProps={{
                            style: { backgroundColor: '#fff', color: '#005692', border: '1px solid #005692' }
                        }}
                        okButtonProps={{ danger: true }}
                    />
                </div>

            </div>

        </div>
    )
}


export default PendingPosts