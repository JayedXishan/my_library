
import { useGetBookByIdQuery } from '@/api/baseApi';

import { Link, useParams } from 'react-router';

const BookDetails = () => {
    
    const { id }  = useParams<{ id: string }>();
    
    const { data, isLoading, error } = useGetBookByIdQuery(String(id));

     if (isLoading) return <p>Loading...</p>;
     if (error) return <p>Error</p>;
    
    console.log(data);
    
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                    "url(https://i.ibb.co/nqCVQNMj/tate-lohmiller-04-Ul7i-MJj3-E-unsplash.jpg)",
                }}
                >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{ data !==undefined && data.book.title}</h1>
                    <p className="mb-5">
                        {data !== undefined && data.book.description}
                    </p>
                    <button className="btn bg-[#722323] text-white border-none">
                        <Link to="/books" className=''>Go back</Link>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;