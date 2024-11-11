import express from 'express';
import { bookRouter } from '../modules/Book/book.route';
import { memberRouter } from '../modules/Member/member.route';
import { borrowRecordRouter } from '../modules/BorrowRecord/borrowRecord.route';
import { returnRouter } from '../modules/ReturnBook/returnBook.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/books',
    route: bookRouter,
  },
  {
    path: '/members',
    route: memberRouter,
  },
  {
    path: '/borrow',
    route: borrowRecordRouter,
  },
  {
    path: '/return',
    route: returnRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
