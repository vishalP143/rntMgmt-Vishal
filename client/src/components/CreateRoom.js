import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const AddRoom = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    roomNumber: '',
    type: '',
    price: '',
    isAvailable: true,
    description: ''
  });

  const onChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/api/rooms', room)
      .then((res) => {
        setRoom({
          roomNumber: '',
          type: '',
          price: '',
          isAvailable: true,
          description: ''
        });

        toast.success('Room added successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });

        setTimeout(() => {
          navigate('/');
        }, 5000);

      })
      .catch((err) => {
        console.error('Error in AddRoom:', err);

        toast.error('Something went wrong, try again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      });
  };

  return (
    <div className='AddRoom'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />

      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-primary float-left'>
              Show Room List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Room</h1>
            <p className='lead text-center'>Create a new room</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Room Number'
                  name='roomNumber'
                  className='form-control'
                  value={room.roomNumber}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Room Type'
                  name='type'
                  className='form-control'
                  value={room.type}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Price per night'
                  name='price'
                  className='form-control'
                  value={room.price}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <textarea
                  placeholder='Room Description'
                  name='description'
                  className='form-control'
                  value={room.description}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <select
                  name='isAvailable'
                  className='form-control'
                  value={room.isAvailable}
                  onChange={onChange}
                >
                  <option value={true}>Available</option>
                  <option value={false}>Not Available</option>
                </select>
              </div>
              <br />

              <input
                type='submit'
                className='btn btn-outline-primary btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
