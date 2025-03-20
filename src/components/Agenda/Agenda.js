import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import './agenda.css';
import { agenda } from '../../json/agenda';

const Agenda = () => {
    const [events, setEvents] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        setEvents(agenda);
        window.scrollTo(0, 0);
    }, []);


    const handleEventClick = (eventClickInfo) => {
        // Obtener información del evento
        setModalStatus(true);
        const eventTitle = eventClickInfo.event.title;
        const eventPlace = eventClickInfo.event.extendedProps.place;
        const eventDescription = eventClickInfo.event.extendedProps.description;
        
        setEventData([eventTitle, eventPlace, eventDescription]);
    };

    const calendarOptions = {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        weekends: true,
        events: events,
        eventClick: handleEventClick // Agregar manejador de eventos
    };

    return (
        <>
            <div id='calendar'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div>
                                <h3 className='title'>Agenda del Secretario</h3>
                                <hr className='hr-gob'/>
                            </div>
                            {
                                modalStatus ? 
                                <div id='modal-agenda'>
                                    <div className='close-icon'>
                                        <i className="fa-sharp fa-solid fa-xmark" onClick={() => {setModalStatus(false)}}/>
                                    </div>
                                    <p className='agenda-title'>{ eventData[0] }</p>
                                    <p className='agenda-location'><i className="fa-solid fa-location-dot"></i>{ eventData[1] }</p>
                                    <iframe className='twitter-embed' srcDoc={eventData[2]}></iframe>
                                </div> :null
                            }
                            <div className='container'>
                                <div className="agenda">
                                <FullCalendar 
                                    plugins={[dayGridPlugin]}
                                    locales={[esLocale]}
                                    locale='es'
                                    {...calendarOptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Agenda;
