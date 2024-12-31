import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateRoom = () => {
    const navigate = useNavigate();

    const [room, setRoom] = useState({
        room_number: '',
        floor_number: '',
        building_name: '',
        room_type: 'Single', // Default room type
        rent: '',
        availability: true, // Default availability to true (Vacant)
        tenant_name: '',
        tenant_email: '',
        tenant_phone: '',
        lease_start_date: '',
        lease_end_date: '',
    });

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setRoom({
            ...room,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(room)
        axios
            .post('https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms', room)
            .then((res) => {
                console.log(res);
                alert('Room created successfully!');
                setRoom({
                    room_number: '',
                    floor_number: '',
                    building_name: '',
                    room_type: 'Single',
                    rent: '',
                    availability: true,
                    tenant_name: '',
                    tenant_email: '',
                    tenant_phone: '',
                    lease_start_date: '',
                    lease_end_date: '',
                });
                navigate('/rooms'); // Redirect to room list
            })
            .catch((err) => {
                console.error('Error creating room:', err);
                alert('Failed to create room. Please try again.');
            });
    };

    return (
        <div className="CreateRoom container">
            <h1 className="text-center my-4">Create New Room</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="room_number" className="form-label">Room Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="room_number"
                        name="room_number"
                        value={room.room_number}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="floor_number" className="form-label">Floor Number</label>
                    <input
                        type="number"
                        className="form-control"
                        id="floor_number"
                        name="floor_number"
                        value={room.floor_number}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="building_name" className="form-label">Building Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="building_name"
                        name="building_name"
                        value={room.building_name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="room_type" className="form-label">Room Type</label>
                    <select
                        className="form-select"
                        id="room_type"
                        name="room_type"
                        value={room.room_type}
                        onChange={onChange}
                        required
                    >
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Shared">Shared</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="rent" className="form-label">Rent</label>
                    <input
                        type="number"
                        className="form-control"
                        id="rent"
                        name="rent"
                        value={room.rent}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="availability"
                        name="availability"
                        checked={room.availability}
                        onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor="availability">
                        Available
                    </label>
                </div>
                <h5 className="my-3">Optional Tenant Details</h5>
                <div className="mb-3">
                    <label htmlFor="tenant_name" className="form-label">Tenant Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tenant_name"
                        name="tenant_name"
                        value={room.tenant_name}
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tenant_email" className="form-label">Tenant Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="tenant_email"
                        name="tenant_email"
                        value={room.tenant_email}
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tenant_phone" className="form-label">Tenant Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tenant_phone"
                        name="tenant_phone"
                        value={room.tenant_phone}
                        onChange={onChange}
                    />
                </div>
                <h5 className="my-3">Lease Dates</h5>
                <div className="mb-3">
                    <label htmlFor="lease_start_date" className="form-label">Lease Start Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="lease_start_date"
                        name="lease_start_date"
                        value={room.lease_start_date}
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lease_end_date" className="form-label">Lease End Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="lease_end_date"
                        name="lease_end_date"
                        value={room.lease_end_date}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary me-2">Create Room</button>
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/rooms')}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default CreateRoom;
