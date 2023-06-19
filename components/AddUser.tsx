import { useForm,SubmitHandler } from 'react-hook-form'


type Inputs = {
    firstName: string,
    lastName: string,
}

export default function AddUser() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch("example")) 

    return (
        <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold text-center">Add User</h1>
            <form className="w-full max-w-lg mx-auto my-5">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-first-name" type="text" placeholder="Jane" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                </div>
            </form>
        </div>
    )
}
