import NewMeetupForm from "../Components/layout/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";





function NewMeetupsPage(){
    const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
        fetch(
            "https://react-try-a8b12-default-rtdb.firebaseio.com/",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(()=>{
            navigate('/');
        })
    }

    return (
        <section>
                <h1>New Meetup Page</h1>
                <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupsPage;