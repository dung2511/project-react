import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ sumProduct, limit, setPages }) => {
  const pageCount = Math.ceil(sumProduct / limit);

  const handlePageClick = (event) => {
    if (isNaN(parseFloat(event.selected)) || event.selected === 0) {
      setPages(event.selected);
    } else {
      setPages(event.selected + 1);
    }
  };
  return (
    <ReactPaginate
      nextLabel="→" //Dán nhãn cho nút tiếp theo.
      onPageChange={handlePageClick} //Phương thức gọi khi một trang được thay đổi. Hiển thị đối tượng trang hiện tại như một đối số.
      pageRangeDisplayed={3} //Phạm vi các trang được hiển thị.
      marginPagesDisplayed={2} //Só lượng trang đẻ hiển thị cho lề
      pageCount={pageCount} //Tổng số trang   *****
      previousLabel="←" //Dán nhãn cho nút trước đó.
      pageClassName="page-item" // Tên lớp trên thẻ li của mỗi phần tử trang.
      pageLinkClassName="page-link" //Tên lớp trên thẻ a của mỗi phần tử trang.
      previousClassName="page-item" // Tên lớp trên thẻ li của nút trước đó.
      previousLinkClassName="page-link" //Tên lớp trên thẻ a của nút trước đó.
      nextClassName="page-item" //Tên lớp trên thẻ li của nút tiếp theo.
      nextLinkClassName="page-link" //Tên lớp trên thẻ a của nút tiếp theo.
      breakLabel="..." //Nhãn cho dấu chấm lửng.
      breakClassName="page-item" //Tên lớp trên thẻ li của phần tử dấu chấm lửng.
      breakLinkClassName="page-link" //Tên lớp trên thẻ a của phần tử dấu chấm lửng.
      containerClassName="pagination" //Tên lớp của vùng chứa phân trang.
      activeClassName="active" //Tên lớp cho trang đang hoạt động.
      renderOnZeroPageCount={null} //Một hàm kết xuất được gọi khi pageCount bằng 0. Để các nút Trước / Tiếp theo được hiển thị theo mặc định (không xác định). Không hiển thị gì khi null được cung cấp.
    />
  );
};

export default Pagination;
