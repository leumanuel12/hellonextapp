import axios from "axios";
import User from "./components/user";


export async function getStaticProps(){

    const data = await axios.get('https://jsonplaceholder.typicode.com/users')
                .then( response => response.data )

    console.log(data)

    return {
        props:{
            users: data,
        }
    }
}



export default function Users({ users }) {
    return (
        <div className="m-4">
            <h2 className="mb-5">Users Page</h2>

            {users.map( user => {
                return (
                    <User user={user}/>
                )
            } )}

        </div>
    );
}
