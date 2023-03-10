import { Injectable } from '@nestjs/common';
import { Book, Prisma } from '@prisma/client';
import { DBService } from './db.service';
@Injectable()
export class BookService {
  constructor(private dbService: DBService) {}
  async getBookList(): Promise<Array<Book>> {
    return this.dbService.book.findMany();
  }

  async getBook(id: Prisma.BookWhereUniqueInput): Promise<Book> {
    return this.dbService.book.findUnique({
      where: id,
    });
  }
  async createBook(data: Prisma.BookCreateInput): Promise<any> {
    return this.dbService.book.create({
      data,
    });
  }
  async updateBook(params: {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.BookUpdateInput;
  }): Promise<any> {
    const { where, data } = params;
    return this.dbService.book.update({
      data,
      where,
    });
  }
  async deleteBook(where: Prisma.BookWhereUniqueInput): Promise<any> {
    return this.dbService.book.delete({
      where,
    });
  }
}
