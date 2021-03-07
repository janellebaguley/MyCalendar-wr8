import React, {Component} from "react";
import FullCalendar, {formatDate} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {INITIAL_EVENTS, createEventId} from "./event-utils";
import './MyCalendar.css'
import axios from "axios";

export default class MyCalendar extends Component {
  constructor(){
    super()
    this.state = {
    weekendsVisible: true,
    currentEvents: []
  };
  this.handleEventClick = this.handleEventClick.bind(this)
}
componentDidMount(){
   axios.get('/api/events')
  .then(events => {
    this.setState({currentEvents: events.data})
  })
    .catch(err => console.log(err))
}


  render() {
    return (
      <div className="demo-app">
        {this.renderSidebar()}
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} 
            select={this.handleDateSelect}
            eventContent={renderEventContent}
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents}
          />
        </div>
      </div>
    );
  }

  renderSidebar() {
    return (
      <div className="demo-app-sidebar">
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>{this.state.currentEvents?.map(renderSidebarEvent)}</ul>
        </div>
      </div>
    );
  }


  handleGetSessionUser = () => {
    axios.get('/auth/session-user')
    .then(res => {
      this.setState({user: res.data})
    })
  }

  handleDateSelect = (selectInfo) => {
    
    let title = prompt('Please enter a new title & location for your event');
    let calendarApi = selectInfo.view.calendar;
    // axios.post('/api/event', {id: createEventId()})
    calendarApi.unselect(); 

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  };

  handleEventClick = (clickInfo) => {
    console.log(clickInfo.event._def.title)
    axios.delete(`/api/event/${clickInfo.event._def.title}`) .catch(err => console.log(err))
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  
  };

  handleEvents = (events) => {
    console.log(JSON.stringify(events))
    
    axios.post('/api/event', events)
    .then (events =>
    this.setState({
      currentEvents: events.data
    }))
  .catch(err => console.log(err))
}
}
function renderEventContent (eventInfo){
  
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent (event) {
  return (
    <ul key={event.id}>
      <b>
        {formatDate(event.start, {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}
      </b>
      <i>{event.title}</i>
    </ul>
  );
}
