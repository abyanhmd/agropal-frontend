import {
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlinePlusSm,
} from "react-icons/hi";
import {
  TbCalendar,
  TbDroplet,
  TbEye,
  TbSun,
  TbTemperature,
  TbUmbrella,
  TbWind,
} from "react-icons/tb";
import weatherSampleData from "@data/WeatherSampleData";
import forecastSampleData from "@data/ForecastSampleData";
import WeatherIcon from "@utils/WeatherIcon";
import { Link } from "react-router-dom";

function weatherInformation(title, value, unit, icon) {
  return (
    <div className="col-span-2 px-4 py-2 mt-4 border-2 rounded-lg border-border">
      <div className="flex">
        {icon}
        <p className="text-base font-semibold text-primary">{title}</p>
      </div>

      <div className="flex items-end justify-center mt-2">
        <p className="text-4xl font-semibold me-2 text-primary">{value}</p>
        <p className="text-lg font-semibold h-fit text-secondary">{unit}</p>
      </div>
    </div>
  );
}

function Weather() {
  const location = "";
  return (
    <section className="mx-[20px]">
      {/* Location */}
      {location === "" ? (
        <div className="flex justify-between">
          <div className="flex w-1/3 px-4 py-2 border-2 rounded-lg border-border">
            <HiOutlineLocationMarker className="w-4 h-4 my-auto font-semibold text-primary me-2" />
            <p className="text-base font-semibold text-primary">
              {location === "" ? "There is no location specified" : location}
            </p>
          </div>
          <Link
            to="add"
            className="flex px-4 duration-300 rounded-lg cursor-pointer bg-button hover:bg-buttonHover"
          >
            <HiOutlinePlusSm className="my-auto me-2 text-buttonText" />
            <p className="my-auto text-buttonText">Add Location</p>
          </Link>
        </div>
      ) : (
        <>
          <div className="w-full pt-2 mt-4 border-2 rounded-lg border-border">
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

          <div className="grid grid-cols-12 gap-[20px]">
            {weatherInformation(
              "Wind",
              "26",
              "km/h",
              <TbWind className="w-5 h-5 my-auto font-semibold text-primary me-2" />,
            )}

            {weatherInformation(
              "Feels Like",
              "13°",
              "C",
              <TbTemperature className="w-5 h-5 my-auto font-semibold text-primary me-2" />,
            )}

            {weatherInformation(
              "Visibility",
              "5",
              "km",
              <TbEye className="w-5 h-5 my-auto font-semibold text-primary me-2" />,
            )}

            {weatherInformation(
              "Humidity",
              "92",
              "%",
              <TbDroplet className="w-5 h-5 my-auto font-semibold text-primary me-2" />,
            )}

            {weatherInformation(
              "Precipitation",
              "0.21",
              "mm",
              <TbUmbrella className="w-5 h-5 my-auto font-semibold text-primary me-2" />,
            )}

            {weatherInformation(
              "UV Index",
              "1.0",
              "",
              <TbSun className="w-5 h-5 my-auto font-semibold text-primary me-2" />,
            )}

            <div className="col-span-8 col-start-3 px-4 py-2 border-2 rounded-lg border-border">
              <div className="flex mb-2">
                <TbWind className="w-5 h-5 my-auto font-semibold text-primary me-2" />
                <p className="text-base font-semibold text-primary">
                  Air Quality
                </p>
              </div>
              <div className="grid grid-cols-4">
                <div className="flex items-end justify-center border-r-2 border-border">
                  <p className="text-2xl font-semibold h-fit text-secondary">
                    CO
                  </p>
                  <p className="mx-3 text-4xl font-semibold text-primary">
                    267.0
                  </p>
                  <p className="text-lg font-semibold h-fit text-secondary">
                    µg/m³
                  </p>
                </div>
                <div className="flex items-end justify-center border-r-2 border-border">
                  <p className="text-2xl font-semibold h-fit text-secondary">
                    NO²
                  </p>
                  <p className="mx-3 text-4xl font-semibold text-primary">
                    2.4
                  </p>
                  <p className="text-lg font-semibold h-fit text-secondary">
                    µg/m³
                  </p>
                </div>
                <div className="flex items-end justify-center border-r-2 border-border">
                  <p className="text-2xl font-semibold h-fit text-secondary">
                    O³
                  </p>
                  <p className="mx-3 text-4xl font-semibold text-primary">
                    49.4
                  </p>
                  <p className="text-lg font-semibold h-fit text-secondary">
                    µg/m³
                  </p>
                </div>
                <div className="flex items-end justify-center">
                  <p className="text-2xl font-semibold h-fit text-secondary">
                    NO²
                  </p>
                  <p className="mx-3 text-4xl font-semibold text-primary">
                    1.3
                  </p>
                  <p className="text-lg font-semibold h-fit text-secondary">
                    µg/m³
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="block w-full px-4 py-2 my-4 border-2 rounded-lg border-border">
            <div className="flex">
              <TbCalendar className="w-5 h-5 my-auto me-2 text-primary" />
              <p className="text-base font-semibold text-primary">Forecast</p>
            </div>

            {forecastSampleData.map((item, index) => (
              <div
                className="grid items-center grid-cols-8 px-4 py-2 mt-2 border-2 rounded-lg border-sidePanel"
                key={index}
              >
                <p className="h-8 my-auto text-lg font-medium border-r-2 text-primary border-sidePanel">
                  {item.day}
                </p>

                <div className="flex h-8 px-3 border-r-2 border-sidePanel">
                  <img
                    src={WeatherIcon(item.condition)}
                    alt={item.condition}
                    className="min-w-16 me-3"
                  />
                  <p className="my-auto text-lg font-medium text-primary">
                    {item.condition}
                  </p>
                </div>

                <div className="grid items-center grid-cols-4 px-3 font-medium border-r-2 border-sidePanel">
                  <TbTemperature className="w-5 h-5 font-semibold text-primary me-3" />
                  <p className="text-lg font-medium text-secondary">
                    {item.minTemperature}&deg;
                  </p>
                  <p className="px-2 text-primary">/</p>
                  <p className="text-lg font-medium text-primary">
                    {item.maxTemperature}&deg;
                  </p>
                </div>

                <div className="grid items-center grid-cols-3 px-3 font-medium text-center border-r-2 border-sidePanel">
                  <TbWind className="w-5 h-5 font-semibold text-primary me-3" />
                  <p className="text-lg font-medium text-primary me-2">
                    {item.windSpeed}
                  </p>
                  <p className="font-medium text-md text-secondary text-end">
                    km/h
                  </p>
                </div>

                <div className="grid items-center grid-cols-3 px-3 font-medium border-r-2 border-sidePanel">
                  <TbDroplet className="w-5 h-5 font-semibold text-primary me-3" />
                  <p className="text-lg font-medium text-primary me-2 text-end">
                    {item.humidity}
                  </p>
                  <p className="font-medium text-md text-secondary text-end">
                    %
                  </p>
                </div>

                <div className="grid items-center grid-cols-3 px-3 font-medium border-r-2 border-sidePanel">
                  <TbUmbrella className="w-5 h-5 font-semibold text-primary me-3" />
                  <p className="text-lg font-medium text-primary me-2">
                    {item.precipitation.toFixed(2)}
                  </p>
                  <p className="font-medium text-md text-secondary text-end">
                    µg/m³
                  </p>
                </div>
                <div className="grid items-center grid-cols-2 px-3 font-medium border-r-2 border-sidePanel">
                  <TbSun className="w-5 h-5 font-semibold text-primary me-3" />
                  <p className="text-lg font-medium text-primary me-2">
                    {item.uvIndex.toFixed(1)}
                  </p>
                </div>

                <div>
                  <p className="px-3 text-base font-medium text-center text-secondary">
                    See More
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Weather;
