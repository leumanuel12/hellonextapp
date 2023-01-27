import axios from "axios";


export async function getServerSideProps(){

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
                    <div
                        className="mb-3" 
                        key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                    </div>
                )
            } )}

        </div>
    );
}
