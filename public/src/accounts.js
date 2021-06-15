function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) =>
    nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  const accountId = account.id;
  books.forEach((book) => {
    totalBorrows += book.borrows.filter(
      (element) => element.id === accountId
    ).length;
  });
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];

  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (!borrow.returned && borrow.id == account.id) {
        book.author = authors.find((author) => author.id == book.authorId);
        result.push(book);
      }
    });
  });

  return result;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
