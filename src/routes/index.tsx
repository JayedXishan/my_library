import App from "@/App";
import AddBook from "@/pages/Add Book/AddBook";
import Books from "@/pages/All Books/Books";
import BorrowSummary from "@/pages/Borrow Summary/BorrowSummary";
import UpdateBook from "@/pages/Update Book/UpdateBook";

import {
  createBrowserRouter
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
          { index: true,
            Component: Books
          },
          { path: "/books", 
            Component: Books 
          },
          { path: "/create-book", 
            Component: AddBook 
          },
          { path: "/borrow-summary", 
            Component: BorrowSummary
          },
          { path: "/edit-book/:id", 
            Component: UpdateBook
          },
        ],
  },
]);

export default router;