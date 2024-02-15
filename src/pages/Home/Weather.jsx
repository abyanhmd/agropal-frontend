import {
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlinePlusSm,
} from "react-icons/hi";
import {
  TbDroplet,
  TbEye,
  TbSun,
  TbTemperature,
  TbUmbrella,
  TbWind,
} from "react-icons/tb";

import Icon_Sunny from "../../assets/icons-weather/Icon_Sunny.svg";
import Icon_Lightning from "../../assets/icons-weather/Icon_Lightning.svg";
import Icon_RainSunny from "../../assets/icons-weather/Icon_RainSunny.svg";
import Icon_CloudySnow from "../../assets/icons-weather/Icon_CloudySnow.svg";
import Icon_CloudySunny from "../../assets/icons-weather/Icon_CloudySunny.svg";
import Icon_Cloudy from "../../assets/icons-weather/Icon_Cloudy.svg";
import Icon_Rain from "../../assets/icons-weather/Icon_Rain.svg";
import weatherSampleData from "./../../data/WeatherSampleData";

function weatherInformation(title, value, unit, icon) {
  return (
    <div className="col-span-2 px-4 py-2 mt-4 border-2 rounded-lg border-border">
      <div className="flex">
        {icon}
        <p className="text-base font-semibold text-primary">{title}</p>
      </div>

      <div className="flex items-end justify-center">
        <p className="text-4xl font-semibold me-2 text-primary">{value}</p>
        <p className="text-lg font-semibold h-fit text-secondary">{unit}</p>
      </div>
    </div>
  );
}

function Weather() {
  const iconSelector = (iconName) => {
    switch (iconName) {
      case "Sunny":
        return Icon_Sunny;
      case "Lightning":
        return Icon_Lightning;
      case "Rain Sunny":
        return Icon_RainSunny;
      case "Cloudy Snow":
        return Icon_CloudySnow;
      case "Cloudy Sunny":
        return Icon_CloudySunny;
      case "Cloudy":
        return Icon_Cloudy;
      case "Rain":
        return Icon_Rain;
    }
  };

  return (
    <section className="mx-[20px]">
      {/* Location */}
      <div className="flex justify-between">
        <div className="flex w-1/3 px-4 py-2 border-2 rounded-lg border-border">
          <HiOutlineLocationMarker className="w-4 h-4 my-auto font-semibold text-primary me-2" />
          <p className="text-base font-semibold text-primary">Tomsk, Russia</p>
        </div>
        <div className="flex px-4 duration-200 transform rounded-lg cursor-pointer bg-button hover:bg-buttonHover">
          <HiOutlinePlusSm className="my-auto me-2 text-buttonText" />
          <p className="my-auto text-buttonText">Add Location</p>
        </div>
      </div>

      {/* Today's Forecast */}
      <div className="w-full py-2 mt-4 border-2 rounded-lg border-border">
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
                src={iconSelector(item.type)}
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

      {/* Other Components */}
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
          <div className="flex">
            <TbWind className="w-5 h-5 my-auto font-semibold text-primary me-2" />
            <p className="text-base font-semibold text-primary">Air Quality</p>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex items-end justify-center border-r-2 border-border">
              <p className="text-2xl font-semibold h-fit text-secondary">CO</p>
              <p className="mx-3 text-4xl font-semibold text-primary">267.0</p>
              <p className="text-lg font-semibold h-fit text-secondary">
                µg/m³
              </p>
            </div>
            <div className="flex items-end justify-center border-r-2 border-border">
              <p className="text-2xl font-semibold h-fit text-secondary">NO²</p>
              <p className="mx-3 text-4xl font-semibold text-primary">2.4</p>
              <p className="text-lg font-semibold h-fit text-secondary">
                µg/m³
              </p>
            </div>
            <div className="flex items-end justify-center border-r-2 border-border">
              <p className="text-2xl font-semibold h-fit text-secondary">O³</p>
              <p className="mx-3 text-4xl font-semibold text-primary">49.4</p>
              <p className="text-lg font-semibold h-fit text-secondary">
                µg/m³
              </p>
            </div>
            <div className="flex items-end justify-center">
              <p className="text-2xl font-semibold h-fit text-secondary">NO²</p>
              <p className="mx-3 text-4xl font-semibold text-primary">1.3</p>
              <p className="text-lg font-semibold h-fit text-secondary">
                µg/m³
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;
