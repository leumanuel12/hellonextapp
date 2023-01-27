export default function User({ user }) {

  //I noticed that when running "npm run build" it will error pointing this page
  //probably becaused of an undefined values we passed on this component
  //I added this for checking if it has value and it fixed the problem.
  if(!user) return;

  return (
    <div className="mb-3">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>
        {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
}
