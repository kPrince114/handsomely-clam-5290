
import header from "../components/header.js"

document.querySelector("#header1").innerHTML = header();



const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let addDateTime = () => {
  let containter = document.querySelector(".header12");
  const time = new Date();
  const date = time.getDate();
  const day = time.getDay();
  const month = time.getMonth();
  const year = time.getFullYear();
  const hour = time.getHours();
  const hour_format = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";

  let date_time = document.createElement("div");
  date_time.className = "date_time";

  let dis_day = document.createElement("p");
  dis_day.innerText = `${Days[day]}, ${
    months[month]
  } ${date}, ${year} | Last Update  : ${
    hour_format < 10 ? "0" + hour_format : hour_format
  }:${minutes < 10 ? "0" + minutes : minutes} ${ampm} IST`;

  date_time.append(dis_day);

  containter.append(date_time);
};
addDateTime();

