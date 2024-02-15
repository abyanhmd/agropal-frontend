import { DataGrid } from "@mui/x-data-grid";
import inventorySampleData from "@data/InventorySampleData.js";
import weatherSampleData from "@data/WeatherSampleData.js";
import WeatherIcon from "@utils/WeatherIcon.js";
import { HiOutlineClock, HiOutlineLocationMarker } from "react-icons/hi";
import columns from "@utils/InventoryColumnDataTable";
import useTheme from "../../hooks/useTheme";
import { Link } from "react-router-dom";
import { usePageName } from "../../hooks/usePageName.jsx";

function Dashboard() {
  const { theme } = useTheme();
  const { changePageName } = usePageName();

  return (
    <div className="mx-[20px]">
      {/* Inventory Management */}
      <div className="w-full px-4 py-2 border-2 rounded-lg border-border">
        <Link
          to="/inventory"
          onClick={() => changePageName("Inventory Management")}
          className="flex justify-between pb-2 font-medium border-b-2 border-sidePanel "
        >
          <p className="text-lg text-primary">Inventory Management</p>
          <p className="my-auto cursor-pointer text-secondary">See More</p>
        </Link>

        <div>
          <div style={{ width: "100%" }}>
            <DataGrid
              columns={columns}
              rows={inventorySampleData}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              checkboxSelection
              className="py-2 text-base font-medium text-center border-none font-figtree text-primary"
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
        </div>
      </div>

      {/* Weather */}
      <div className="w-full px-4 py-2 mt-4 border-2 rounded-lg border-border">
        <Link
          to="/weather"
          onClick={() => changePageName("Weather")}
          className="flex justify-between pb-2 font-medium border-b-2 border-sidePanel "
        >
          <p className="text-lg text-primary">Weather</p>
          <p className="my-auto cursor-pointer text-secondary">See More</p>
        </Link>

        {/* Location */}
        <div className="flex justify-between mt-4">
          <div className="flex w-1/3 px-4 py-2 border-2 rounded-lg border-sidePanel">
            <HiOutlineLocationMarker className="w-4 h-4 my-auto font-semibold text-primary me-2" />
            <p className="text-base font-semibold text-primary">
              Tomsk, Russia
            </p>
          </div>
        </div>

        {/* Today's Forecast */}
        <div className="w-full pt-2 mt-4 border-2 rounded-lg border-sidePanel">
          <div className="flex px-4 ">
            <HiOutlineClock className="w-4 h-4 my-auto font-semibold text-primary me-2" />
            <p className="text-base font-semibold text-primary">
              Today&apos;s Forecast
            </p>
          </div>
          <p className="px-4 mt-2 text-base font-medium text-secondary">
            From the optimal planting conditions to potential rainfall,
            Today&apos;s Forecast keeps you informed, empowering you to make
            decisions that matter.
          </p>

          <div className="flex justify-between w-full py-4 overflow-auto">
            {weatherSampleData.map((item, index) => (
              <div
                className={`object-fill h-full min-w-20 mx-2 ${
                  index !== weatherSampleData.length - 1
                    ? "border-r-2 border-border"
                    : ""
                }`}
                key={index}
              >
                <p className="text-base font-semibold text-center text-secondary">
                  {item.time}
                </p>
                <img
                  src={WeatherIcon(item.type)}
                  alt={item.type}
                  className="h-16 py-2 m-auto"
                />
                <p className="text-lg font-semibold text-center text-primary">
                  {item.temperature}&deg;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
