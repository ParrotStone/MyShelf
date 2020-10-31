const generateArrFromNum = (num) => {
  const output = [];
  for (let i = 1; i <= num; i++) output[i - 1] = i;

  return output;
};

export default generateArrFromNum;
