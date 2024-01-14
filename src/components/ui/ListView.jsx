import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import columns from "@utils/InventoryColumnDataTable";
import useTheme from "../../hooks/useTheme";

function ListView(props) {
  const { theme } = useTheme();

  return (
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
        className="font-medium font-figtree text-primary mx-[30px] text-center border-none"
        sx={{
          "& .MuiTablePagination-root": {
            color: theme === "light" ? "#39404c" : "#fff",
          },
          "& .MuiButtonBase-root": {
            color: theme === "light" ? "#39404c" : "#fff",
          },
          "& .MuiSvgIcon-root": {
            color: theme === "light" ? "#39404c" : "#fff",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
          },
        }}
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
