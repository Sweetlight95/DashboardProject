import moment from "moment";
export const reformatDate = (dateStr) => {


  if (dateStr) {
    let newDate = moment(dateStr).format("MMMM Do YYYY");
    return newDate;
  }
 
  
};
