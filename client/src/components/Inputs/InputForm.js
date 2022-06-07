import React, { useState } from 'react';

// trying the form hook
import { useForm } from 'react-hook-form';


export default function InputForm(props) {


    // option 1 - using react mini project as a guide

    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [category, setCategory] = useState('');
    const [eventType, setType] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setlng] = useState('');
    const [desc, setDesc] = useState('');

    const handleDateChange = (e) => {
        setEventDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setEventTime(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleLatChange = (e) => {
        setLat(e.target.value);
    };

    const handlelngChange = (e) => {
        setlng(e.target.value);
    };

    const handleDescChange = (e) => {
        setDesc(e.target.value);
    };


    const submitHandler = (e) => {

        e.preventDefault();

        let data = {
            date: eventDate,
            time: eventTime,
            category: category,
            type: eventType,
            latitude: lat,
            longitude: lng,
            description: desc,  
        }

        console.log(data);

        return data;
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Date"
                    value={eventDate}
                    name="date"
                    onChange={handleDateChange}
                ></input>
                <input
                    type="text"
                    placeholder="Time"
                    value={eventTime}
                    name="time"
                    onChange={handleTimeChange}
                ></input>
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    name="category"
                    onChange={handleCategoryChange}
                ></input>
                <input
                    type="text"
                    placeholder="Type"
                    value={eventType}
                    name="type"
                    onChange={handleTypeChange}
                ></input>
                <input
                    type="text"
                    placeholder="Latitude"
                    value={lat}
                    name="lat"
                    onChange={handleLatChange}
                ></input>
                <input
                    type="text"
                    placeholder="Longitude"
                    value={lng}
                    name="lng"
                    onChange={handlelngChange}
                ></input>
                <input
                    type="text"
                    placeholder="Description"
                    value={desc}
                    name="desc"
                    onChange={handleDescChange}
                ></input>
                <button>Add your event!</button>
            </form>
        </div>
    )


    // option 2
    const { register, handleSubmit } = useForm();

    // const eventSubmit = (e) => {
    //     e.preventDefault();

    //     props.onSubmit({
    //         date: e.eventDate,
    //         time: e.eventTime,
    //         category: e.category,
    //         type: e.eventType,
    //         lat: e.lat,
    //         long: e.long,
    //         desc: e.desc,
    //     })
    // }

//     return (
//         <div>
//             <form onSubmit={handleSubmit((data) => {
//                     console.log(data)
//                     props.onSubmit({
//                         date: data.eventDate,
//                         time: data.eventTime,
//                         category: data.category,
//                         type: data.eventType,
//                         lat: data.lat,
//                         long: data.long,
//                         desc: data.desc,
//                     })
//             })}
//             >
//                 <label>Date</label>
//                 <input {...register("eventDate", { required: true })} />
//                 <label>Time</label>
//                 <input {...register("eventTime")} />
//                 <label>Category</label>
//                 <input {...register("category", { required: true })} />
//                 <label>Type</label>
//                 <input {...register("eventType", { required: true })} />
//                 <label>Latitude</label>
//                 <input {...register("lat", { required: true })} />
//                 <label>Longitude</label>
//                 <input {...register("long", { required: true })} />
//                 <label>Description</label>
//                 <input {...register("desc")} placeholder="description" />
//                 <input type="submit" />
//             </form>
//         </div>
//     )
};