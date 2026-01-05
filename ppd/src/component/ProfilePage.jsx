import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function ProfilePage() {
  const { user, updateUser } = useContext(UserContext); // get context + updater
  const [isEditing, setIsEditing] = useState(false);

  // Form component inside the page
  function EditProfileForm({ onCancel }) {
    const [formState, setFormState] = useState({
      username: user.username,
      email: user.email,
      avatar: user.avatar
    });

    // handle submit
    function handleSubmit(e) {
      e.preventDefault();       // prevent page reload
      updateUser(formState);    // update context + localStorage
      onCancel();               // close form
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Username</label>
          <input
            type="text"
            value={formState.username}
            onChange={e => setFormState(prev => ({ ...prev, username: e.target.value }))}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            value={formState.email}
            onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Avatar URL</label>
          <input
            type="text"
            value={formState.avatar}
            onChange={e => setFormState(prev => ({ ...prev, avatar: e.target.value }))}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex space-x-2">
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Profile</h1>

      {isEditing ? (
        <EditProfileForm onCancel={() => setIsEditing(false)} />
      ) : (
        <>
          <div className="flex items-center space-x-4">
            <img src={user.avatar} alt="avatar" className="w-24 h-24 rounded-full" />
            <div className="flex flex-col">
              <p className="font-semibold">{user.username}</p>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-gray-400 text-sm">Joined: {user.joinedDate}</p>
            </div>
          </div>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setIsEditing(true)} // toggle form
          >
            Edit Profile
          </button>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
