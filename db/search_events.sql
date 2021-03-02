select * from ce.event_id, ce.event_title, ce.event_location, 
join users u on ce.user_id = u.user_id where lower(ce.cal_event_title) = $1 order by ce.event_title;