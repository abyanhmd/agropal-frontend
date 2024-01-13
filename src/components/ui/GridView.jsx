import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Pagination from "./Pagination";
import { data } from "autoprefixer";

function GridView(props) {
  return (
    <>
      <div className="grid grid-cols-12 m-[20px] gap-[20px] font-figtree">
        {props.data.map((item, index) => (
          <Card
            key={index}
            className="col-span-3 border-2 rounded-lg shadow-none bg-background border-sidePanel"
          >
            <CardMedia
              image={item.image}
              title={item.productName}
              className="object-cover w-full h-48"
            />
            <CardContent>
              <div>
                <p className="w-full mb-4 text-xl font-semibold text-center text-primary">
                  {item.productName}
                </p>
                <div className="inline-grid w-full grid-cols-2 p-0 m-0 gap-x-3 gap-y-2">
                  <p className="w-full my-auto text-right text-md text-secondary">
                    Price per Item
                  </p>
                  <p className="w-full text-base font-medium text-left text-primary">
                    {item.pricePerItem}
                  </p>

                  <p className="w-full my-auto text-right text-md text-secondary">
                    Total Price
                  </p>
                  <p className="w-full text-base font-medium text-left text-primary">
                    {item.totalPrice}
                  </p>

                  <p className="w-full my-auto text-right text-md text-secondary">
                    Stock Amount
                  </p>
                  <p className="w-full text-base font-medium text-left text-primary">
                    {item.stockAmount}
                  </p>

                  <p className="w-full my-auto text-right text-md text-secondary">
                    Sold Amount
                  </p>
                  <p className="w-full text-base font-medium text-left text-primary">
                    {item.soldAmount}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Pagination data={data} />
    </>
  );
}

GridView.propTypes = {
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

export default GridView;
