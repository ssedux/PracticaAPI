import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useFetchData from '../hooks/useFetchData';
import useSaveData from '../hooks/useSaveData';
import useUpdateData from '../hooks/useUpdateData';
import useDeleteData from '../hooks/useDeleteData';
import Title from '../components/Title';
import Card from '../components/Card';
import Button from '../components/Button';
import Message from '../components/Message';
import '../styles/dashboard.css';

const API_URL = 'https://retoolapi.dev/9mznW9/videojuegos'; // API de catálogo de videojuegos

const HomePage = () => {
  const [reload, setReload] = useState(0);
  const { data, loading, error } = useFetchData(API_URL + '?_=' + reload);
  const { saveData } = useSaveData(API_URL);
  const { updateData } = useUpdateData(API_URL);
  const { deleteData } = useDeleteData(API_URL);
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm();
  const [editId, setEditId] = useState(null);

  const onSubmit = async (formData) => {
    if (editId) {
      const updated = await updateData(editId, formData);
      if (updated) {
        Swal.fire('Actualizado', 'El registro fue actualizado correctamente', 'success');
        setEditId(null);
        reset();
        setReload(r => r + 1);
      } else {
        Swal.fire('Error', 'No se pudo actualizar el registro', 'error');
      }
    } else {
      const created = await saveData(formData);
      if (created) {
        Swal.fire('Creado', 'El registro fue creado correctamente', 'success');
        reset();
        setReload(r => r + 1);
      } else {
        Swal.fire('Error', 'No se pudo crear el registro', 'error');
      }
    }
  };

  const handleEdit = (juego) => {
    setEditId(juego.id);
    setValue('juego', juego.juego);
    setValue('genero', juego.genero);
    setValue('dificultad', juego.dificultad);
    setValue('plataforma', juego.plataforma);
    setValue('lanzamiento', juego.lanzamiento);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: '¿Eliminar?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
    });
    if (result.isConfirmed) {
      const deleted = await deleteData(id);
      if (deleted) {
        Swal.fire('Eliminado', 'El registro fue eliminado', 'success');
        setReload(r => r + 1);
      } else {
        Swal.fire('Error', 'No se pudo eliminar el registro', 'error');
      }
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="crud-title">Dashboard CRUD</h1>
      <div className="crud-card">
        <form className="crud-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="juego">Título</label>
            <input id="juego" placeholder="Título del videojuego" {...register('juego', { required: 'El título es obligatorio' })} />
          </div>
          {errors.juego && <Message type="error">{errors.juego.message}</Message>}
          <div className="form-group">
            <label htmlFor="genero">Género</label>
            <input id="genero" placeholder="Género" {...register('genero', { required: 'El género es obligatorio' })} />
          </div>
          {errors.genero && <Message type="error">{errors.genero.message}</Message>}
          <div className="form-group">
            <label htmlFor="dificultad">Dificultad</label>
            <input id="dificultad" placeholder="Dificultad" {...register('dificultad', { required: 'La dificultad es obligatoria' })} />
          </div>
          {errors.dificultad && <Message type="error">{errors.dificultad.message}</Message>}
          <div className="form-group">
            <label htmlFor="plataforma">Plataforma</label>
            <input id="plataforma" placeholder="Plataforma" {...register('plataforma', { required: 'La plataforma es obligatoria' })} />
          </div>
          {errors.plataforma && <Message type="error">{errors.plataforma.message}</Message>}
          <div className="form-group">
            <label htmlFor="lanzamiento">Año</label>
            <input id="lanzamiento" type="number" placeholder="Año de lanzamiento" {...register('lanzamiento', { required: 'El año es obligatorio', min: { value: 1970, message: 'Año no válido' } })} />
          </div>
          {errors.lanzamiento && <Message type="error">{errors.lanzamiento.message}</Message>}
          <Button type="submit" disabled={isSubmitting}>{editId ? 'Actualizar' : 'Crear'}</Button>
          {editId && <Button type="button" onClick={() => { setEditId(null); reset(); }}>Cancelar edición</Button>}
        </form>
      </div>
      <div className="crud-card">
        {loading && <Message>Cargando...</Message>}
        {error && <Message type="error">{error}</Message>}
        <table className="crud-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Género</th>
              <th>Dificultad</th>
              <th>Plataforma</th>
              <th>Año</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? data.map((juego) => (
              <tr key={juego.id}>
                <td>{juego.juego}</td>
                <td>{juego.genero}</td>
                <td>{juego.dificultad}</td>
                <td>{juego.plataforma}</td>
                <td>{juego.lanzamiento}</td>
                <td className="crud-btns">
                  <Button onClick={() => handleEdit(juego)}>Editar</Button>
                  <Button onClick={() => handleDelete(juego.id)} style={{ background: '#ef4444' }}>Eliminar</Button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="6">No hay registros</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
