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
    availability: true, // Default to true
    tenant_name: '',
    tenant_email: '',
    tenant_phone: '',
    lease_start: '',
    lease_end: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms/${id}`)
      .then((res) => {
        setRoom(res.data);
      })
      .catch((err) => {
        console.error('Error fetching room details:', err);
      });
  }, [id]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms/${id}`, room)
      .then((res) => {
        navigate(`/rooms/${id}`);
      })
      .catch((err) => {
        console.error('Error updating room details:', err);
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

            <div className="form-group">
              <label htmlFor="tenant_name">Tenant Name</label>
              <input
                type="text"
                name="tenant_name"
                className="form-control"
                value={room.tenant_name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="tenant_email">Tenant Email</label>
              <input
                type="email"
                name="tenant_email"
                className="form-control"
                value={room.tenant_email}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="tenant_phone">Tenant Phone</label>
              <input
                type="text"
                name="tenant_phone"
                className="form-control"
                value={room.tenant_phone}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="lease_start">Lease Start Date</label>
              <input
                type="date"
                name="lease_start"
                className="form-control"
                value={room.lease_start}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="lease_end">Lease End Date</label>
              <input
                type="date"
                name="lease_end"
                className="form-control"
                value={room.lease_end}
                onChange={onChange}
              />
            </div>
            <br />

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">
              Update Room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateRoomInfo;
