import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router';
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEye, FaBook } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useAppDispatch, useAppSelector } from '@/app/hook';
import { deleteBook, selectBook } from '@/features/Books/bookSlice';


const Books = () => {

    const books = useAppSelector(selectBook);
    const dispatch=useAppDispatch();
    //console.log(books);
    return (
        <div className='mt-[50px]'>
            
            <Table >
                
                <TableHeader>
                    <TableRow >
                    <TableHead className='text-center'>Title</TableHead>
                    <TableHead className='text-center'>Author</TableHead>
                    <TableHead className='text-center'>Genre</TableHead>
                    <TableHead className='text-center'>ISBN</TableHead>
                    <TableHead className='text-center'>Copies</TableHead>
                    <TableHead className='text-center'>Availablities</TableHead>
                    <TableHead className='text-center'>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        books.map((book)=> (
                            <TableRow key={book.id}>
                                <TableCell className="font-medium">{book.title}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.genre}</TableCell>
                                <TableCell>{book.isbn}</TableCell>
                                <TableCell>{book.copies}</TableCell>
                                <TableCell>{book.available}</TableCell>
                                <TableCell >
                                    <TooltipProvider>
                                        <div className='flex space-x-4'>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                <Link to="/">
                                                    <FaEye  className="text-xl cursor-pointer"/>
                                                </Link>
                                                </TooltipTrigger>
                                                <TooltipContent >
                                                <p>View</p>
                                                </TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                <Link to={`/edit-book/${book.id}`}>
                                                    <MdEditSquare className="text-xl cursor-pointer" />
                                                </Link>
                                                </TooltipTrigger>
                                                <TooltipContent >
                                                <p>Edit</p>
                                                </TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                <Link to="/">
                                                    <FaBook className="text-[18px] cursor-pointer" />
                                                </Link>
                                                </TooltipTrigger>
                                                <TooltipContent >
                                                <p>Borrow</p>
                                                </TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                <Link to="/">
                                                    <RiDeleteBin5Fill onClick={()=>dispatch(deleteBook(book.id))} className="text-xl cursor-pointer" />
                                                </Link>
                                                </TooltipTrigger>
                                                <TooltipContent >
                                                <p>Delete</p>
                                                </TooltipContent>
                                            </Tooltip>
                                            
                                        </div>
                                    </TooltipProvider>
                                    
                                </TableCell>
                            </TableRow>
                            
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default Books;