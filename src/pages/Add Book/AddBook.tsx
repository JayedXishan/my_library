import { useAppDispatch } from "@/app/hook"
import { addBook } from "@/features/Books/bookSlice"
import type { Ibook } from "@/types"
import { useForm } from "react-hook-form"


const AddBook = () => {

    const dispatch=useAppDispatch();

    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm<Ibook>()

    const onSubmit = (data: Ibook) => {
            console.log("Form submitted:", data)
            dispatch(addBook(data));
        }


    return (
        <div className="mt-[70px]">
            <h3 className="">Add Book</h3>
             <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4 max-w-md mx-auto">
                <div>
                    <label className="block text-left text-sm mb-1">Title</label>
                    <input
                    {...register("title", { required: "Title is required" })}
                    className="border p-2 rounded w-full"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                </div>
                <div>
                    <label className="block text-left text-sm mb-1">Author</label>
                    <input
                    {...register("author", { required: "Author is required" })}
                    className="border p-2 rounded w-full"
                    />
                    {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
                </div>
                <div>
                    <label className="block text-left text-sm mb-1">Genre</label>
                    <select
                    {...register("genre", { required: "Genre is required" })}
                    className="border p-2 rounded w-full"
                    >
                    <option value="">Select Genre</option>
                    <option value="FICTION">Fiction</option>
                    <option value="NON_FICTION">Non-fiction</option>
                    <option value="SCIENCE">Science</option>
                    <option value="HISTORY">History</option>
                    <option value="BIOGRAPHY">Biography</option>
                    <option value="FANTASY">Fantasy</option>
                    </select>
                    {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
                </div>
                <div>
                    <label className="block text-left text-sm mb-1">ISBN</label>
                    <input
                    {...register("isbn", { required: "ISBN is required" })}
                    className="border p-2 rounded w-full"
                    />
                    {errors.isbn && <p className="text-red-500 text-sm">{errors.isbn.message}</p>}
                </div>
                <div>
                    <label className="block text-left text-sm mb-1">Description</label>
                    <textarea
                    {...register("description")}
                    className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block text-left text-sm mb-1">Copies</label>
                    <input
                    type="number"
                    {...register("copies", {
                        required: "Copies are required",
                        min: { value: 1, message: "Must be 1 or more" },
                        valueAsNumber: true,
                    })}
                    className="border p-2 rounded w-full"
                    />
                    {errors.copies && <p className="text-red-500 text-sm">{errors.copies.message}</p>}
                </div>
                <div>
                    <label className="block text-left text-sm mb-1">Available</label>
                    <select
                    className="border p-2 rounded w-full"
                    {...register("available", { required: true })}
                    >
                    <option value="true">True</option>
                    <option value="false">False</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add Book
                </button>   
            </form>
        </div>
    );
};

export default AddBook;