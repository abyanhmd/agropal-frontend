import Icon_Sunny from "@/assets/icons-weather/Icon_Sunny.svg";
import Icon_Lightning from "@/assets/icons-weather/Icon_Lightning.svg";
import Icon_RainSunny from "@/assets/icons-weather/Icon_RainSunny.svg";
import Icon_CloudySnow from "@/assets/icons-weather/Icon_CloudySnow.svg";
import Icon_CloudySunny from "@/assets/icons-weather/Icon_CloudySunny.svg";
import Icon_Cloudy from "@/assets/icons-weather/Icon_Cloudy.svg";
import Icon_Rain from "@/assets/icons-weather/Icon_Rain.svg";

function WeatherIcon(iconName) {
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
}

export default WeatherIcon;
