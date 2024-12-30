import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateRoomInfo() {
  const [room, setRoom] = useState({
    room_number: '',
    floor_number: '',
    building_name: '',
    room_type: '',
    rent: '',
    availability: false, // Assuming boolean for availability
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms/${id}`)
      .then((res) => {
        setRoom({
          room_number: res.data.room_number,
          floor_number: res.data.floor_number,
          building_name: res.data.building_name,
          room_type: res.data.room_type,
          rent: res.data.rent,
          availability: res.data.availability,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateRoomInfo GET request');
        console.log(err);
      });
  }, [id]);

  const onChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      room_number: room.room_number,
      floor_number: room.floor_number,
      building_name: room.building_name,
      room_type: room.room_type,
      rent: room.rent,
      availability: room.availability,
    };

    axios
      .put(`https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms/${id}`, data)
      .then((res) => {
        navigate(`/room-details/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateRoomInfo PUT request');
        console.log(err);
      });
  };

  return (
    <div className="UpdateRoomInfo">
      <div className="container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/room-list" className="btn btn-outline-warning float-left">
              Show Room List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Room</h1>
            <p className="lead text-center">Update Room's Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="room_number">Room Number</label>
              <input
                type="text"
                placeholder="Room number"
                name="room_number"
                className="form-control"
                value={room.room_number}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="floor_number">Floor Number</label>
              <input
                type="text"
                placeholder="Floor number"
                name="floor_number"
                className="form-control"
                value={room.floor_number}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="building_name">Building Name</label>
              <input
                type="text"
                placeholder="Building name"
                name="building_name"
                className="form-control"
                value={room.building_name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="room_type">Room Type</label>
              <input
                type="text"
                placeholder="Room type (e.g., Single, Double)"
                name="room_type"
                className="form-control"
                value={room.room_type}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="rent">Rent</label>
              <input
                type="number"
                placeholder="Rent amount"
                name="rent"
                className="form-control"
                value={room.rent}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="availability">Availability</label>
              <select
                name="availability"
                className="form-control"
                value={room.availability}
                onChange={onChange}
              >
                <option value={true}>Available</option>
                <option value={false}>Occupied</option>
              </select>
            </div>
            <br />

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">
              Update Room
            </button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateRoomInfo;
