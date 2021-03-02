// import React, {Component} from 'react' 
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// // import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import "@fullcalendar/core/main.css";
// // import "@fullcalendar/timegrid/main.css"

// const events =[{title: '', date: new Date()}]

// class Calendar extends Component{

// formatEvents =() => {
//     return this.props.appointments.map(appointment => {
//               const {title, end, start} = appointment
  
//               let startTime = new Date(start)
//               let endTime = new Date(end)
  
//               return {
//                 title, 
//                 start: startTime,
//                 end: endTime, 
//                 extendedProps: {...appointment}
//               }
//           })
//   }

// handleEventClick= ({event}) => {
//    this.props.openAppointment(event.extendedProps)
// }

// handleEventDrop = (info) => {
//         if(window.confirm("Are you sure you want to change the event date?")){
//             console.log('change confirmed')

//             this.props.updateAppointment({...info.event.extendedProps, start: info.event.start, end: info.event.end})

//         } else {
//             console.log('change aborted')
//         }
//    }
// handleDateClick = (arg) => {
//     console.log('hit')
// }


//    render(){
//     return(
        
//             <FullCalendar
//             defaultView="dayGridMonth" 
//             select ={this.handleDateClick}
//             selectable={true}
//             plugins={[dayGridPlugin, interactionPlugin]}
//             editable={true}
//             eventDrop={this.handleEventDrop}
//             eventClick={this.handleEventClick}
//             events={this.formatEvents()}
//             />
//     )
//    }
//   }
//   export default Calendar