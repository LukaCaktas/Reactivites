import {useEffect, useState } from "react"
import { List, ListItem, Typography } from "@mui/material";
import axios from "axios";

function App() {
  const [activities, setactivities] = useState<Activity[]>([]);

  useEffect(() =>{
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response => setactivities(response.data))
  },[])

  return (
    <>
    <Typography variant="h3" >Reactivites</Typography>
    <List>{activities.map((activity)=>
      (<ListItem key={activity.id}>{activity.title}</ListItem>))}</List>
    </>
  )
}

export default App
