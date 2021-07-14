// Accept an objectof key value pairs in day: cases/deaths/recovered etc.
export const formatDays = (data) => {
  const days = Object.keys(data);
  days.shift();
  const newDays = days.map((day) => day.substring(0, day.length - 3));
  return newDays;
};

export const formatData = (data) => {
  const cases = Object.values(data);
  let newArray = [];
  for (var i = 1; i < cases.length; i++) {
    newArray.push(cases[i] - cases[i - 1]);
  }
  return newArray;
};
