const createColumn = (field, headerName, flex) => ({
  field,
  headerName,
  flex,
  renderHeader: () => (
    <p className="w-full text-secondary font-albert">{headerName}</p>
  ),
});

const columns = [
  createColumn("image", "Image", 0.5, "Image"),
  createColumn("productName", "Product Name", 3),
  createColumn("pricePerItem", "Price Per Item", 1),
  createColumn("totalPrice", "Total Price", 1),
  createColumn("stockAmount", "Stock Amount", 1),
  createColumn("soldAmount", "Sold Amount", 1),
];

columns[0].renderCell = (params) => <img src={params.value} />;

export default columns;
