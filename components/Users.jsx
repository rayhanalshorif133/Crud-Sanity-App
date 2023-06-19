import React from 'react'

export default function Users({users}) {

    const handleDelete = () => {
        console.log('delete');
    };

    return (
        <div className="mx-auto justify-center max-w-7xl sm:grid-none grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
            {users &&
                users.length > 0 &&
                users.map((user) => (
                    <div className="card" key={user._id}>
                        <h1 className="">{user.name}
                            <button onClick={handleDelete} className="float-right">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </h1>
                        <p className="card-body">
                            {user.name} is {user.age} years old.
                        </p>
                    </div>
                ))}
        </div>
    )
}
