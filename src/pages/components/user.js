export default function User({ user }) {

  //I noticed that when running "npm run build" it will error pointing this page
  //probably becaused of an undefined values we passed on this component
  //I added this for checking if it has value and it fixed the problem.
  if(!user) return;

  return (
    <div className="my-3 py-2 px-5 border border-gray-300 rounded-md hover:bg-blue-100 hover:duration-1000">
      <p className="font-medium text-lg">{user.name}</p>
      <p className="text-gray-700 px-3">{user.email}</p>
      <p className="text-gray-700 px-3">{user.phone}</p>
      <p className="text-gray-700 px-3">
        {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
}
