import React from "react";

function useFormatDateLong(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
}

function useFormatDateNumeric(date) {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

function useShowRemainingDays(date) {
  const dateNow = new Date(useFormatDateNumeric(new Date()));
  const dateDue = new Date(date);
  const diffTime = dateDue.getTime() - dateNow.getTime();
  const diffDays = diffTime / (1000 * 3600 * 24);
  if (dateNow.getTime() >= dateDue.getTime()) {
    if (status !== "Completed") {
      return "Task Overdue";
    } else {
      return "Task Completed";
    }
  } else {
    if (diffDays === 1) {
      return "Today";
    } else {
      return `${diffDays} days`;
    }
  }
}

export { useFormatDateLong, useFormatDateNumeric, useShowRemainingDays };
