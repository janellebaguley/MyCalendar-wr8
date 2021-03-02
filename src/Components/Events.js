import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from 'axios'

class Events extends Component{
    constructor(){
        super()
            this.state = {
                data: []
            }
         }
componentDidMount(){
    axios.get('/api/events')
    .then(res => {
        this.setState({data: res.data})
    })
}
render(){
    return(
        <div>
            <h1>Events</h1>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events = {[this.state.data]}
        />
        </div>
    )
 }
}
export default Events;