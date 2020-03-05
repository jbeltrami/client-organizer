export const sortByDate = (a, b) => {
  const aInitialDate = a[1].date.split('/');
  const setA = new Date(aInitialDate[2], aInitialDate[0], aInitialDate[1]);

  const bInitialDate = b[1].date.split('/');
  const setB = new Date(bInitialDate[2], bInitialDate[0], bInitialDate[1]);

  return setB - setA;
};
