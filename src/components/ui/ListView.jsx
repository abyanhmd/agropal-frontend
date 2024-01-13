import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "image",
    headerName: "Image",
    renderHeader: () => (
      <p className="w-full text-secondary font-albert">
        {'Image'}
      </p>
    ),
    renderCell: (params) => <img src={params.value} />,
  },
  { field: "productName", headerName: "Product Name", flex: 3,
    renderHeader: () => (
    <p className="w-full text-secondary font-albert">
      {'Product Name'}
    </p>
  ) },
  { field: "pricePerItem", headerName: "Price Per Item", flex: 1,
  renderHeader: () => (
    <p className="w-full text-secondary font-albert">
      {'Price Per Item'}
    </p>
  ) },
  { field: "totalPrice", headerName: "Total Price", flex: 1,
  renderHeader: () => (
    <p className="w-full text-secondary font-albert">
      {'Total Price'}
    </p>
  ) },
  { field: "stockAmount", headerName: "Stock Amount", flex: 1,
  renderHeader: () => (
    <p className="w-full text-secondary font-albert">
      {'Stock Amount'}
    </p>
  ) },
  { field: "soldAmount", headerName: "Sold Amount", flex: 1,
  renderHeader: () => (
    <p className="w-full text-secondary font-albert">
      {'Sold Amount'}
    </p>
  ) },
];

function ListView(props) {
  console.log(props.data);
  return (
    // <div className="overflow-auto mx-[28px]">
    //   <table className="table border-separate border-spacing-y-1">
    //     <thead className="font-semibold text-secondary">
    //       <tr>
    //         <th className="rounded-tl-lg rounded-bl-lg w-[60px]">
    //           <label></label>
    //         </th>
    //         <th className="text-center text-md w-[100px]">Image</th>
    //         <th className="text-left text-md">Product Name</th>
    //         <th className="text-center text-md w-[200px]">Price per Item</th>
    //         <th className="text-center text-md w-[200px]">Total Price</th>
    //         <th className="text-center text-md w-[150px]">Stock</th>
    //         <th className="text-center text-md w-[150px]">Sold</th>
    //         <th className="rounded-tr-lg rounded-br-lg text-center text-md w-[85px]">
    //           Action
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {props.data.map((item, index) => (
    //         <tr key={index}>
    //           <th className="rounded-tl-lg rounded-bl-lg w-[60px]">
    //             <label></label>
    //           </th>
    //           <th className="flex justify-center max-w-full text-base font-normal text-center align-middle h-14 text-brokenWhite">
    //             <img
    //               src={item.image}
    //               alt={item.productName}
    //               className="min-w-fit"
    //             />
    //           </th>
    //           <th className="text-base font-normal text-left text-primary">
    //             {item.productName}
    //           </th>
    //           <th className="text-center text-base font-normal text-primary w-[200px]">
    //             {item.pricePerItem}
    //           </th>
    //           <th className="text-center text-base font-normal text-primary w-[200px]">
    //             {item.totalPrice}
    //           </th>
    //           <th className="text-center text-base font-normal text-primary w-[150px]">
    //             {item.stockAmount}
    //           </th>
    //           <th className="text-center text-base font-normal text-primary w-[150px]">
    //             {item.soldAmount}
    //           </th>
    //           <th className="rounded-tr-lg rounded-br-lg text-center w-[85px]">
    //             <div className="dropdown dropdown-left dropdown-end">
    //               <HiOutlineDotsHorizontal
    //                 tabIndex={0}
    //                 role="button"
    //                 className="w-6 h-6 p-1 mx-auto border rounded-lg text-primary border-grayPlaceholder"
    //               />
    //             </div>
    //           </th>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

    <div style={{ width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={props.data}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}      
        pageSizeOptions={[10, 25]}
        checkboxSelection
        className="text-base font-medium font-figtree text-primary mx-[30px] text-center border-none"
      />
    </div>
  );
}

ListView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      pricePerItem: PropTypes.number.isRequired,
      totalPrice: PropTypes.number.isRequired,
      stockAmount: PropTypes.number.isRequired,
      soldAmount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ListView;
