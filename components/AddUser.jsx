import { useForm,SubmitHandler } from 'react-hook-form'




export default function AddUser({handleCreateFrom}) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const submitHandler = async (data) => {
        await fetch('/api/users',{
            method:'POST',
            body:JSON.stringify(data),
        }).then((res)=> {
            handleCreateFrom();
        });
        
    }


    return (
        <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold text-center">Add User</h1>
            <form className="w-full max-w-lg mx-auto my-5" onSubmit={handleSubmit(submitHandler)}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            User Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-name" type="text" placeholder="Jane" {...register('name')}/>
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            User Age
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-age" type="number" placeholder="12212" {...register('age')}/>
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                </div>

                <div className="flex">
                    <div className="px-3 mb-6 md:mb-0">
                        <button type='submit' className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>
                    <div className="px-3 mb-6 md:mb-0">
                        <button type='button' onClick={handleCreateFrom} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
