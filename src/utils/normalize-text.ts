import moment from "moment";

export const normalize = () => {
  const textSlice = (string: string, count: number = 65): string => {
    if (string.length < count) return string;
    return `${string.slice(0, count)}...`;
  };

  const convertedDate = (date: Date): string => {
    return moment(date).utc().format("DD-MM-YYYY");
  };

  return { textSlice, convertedDate };
};
