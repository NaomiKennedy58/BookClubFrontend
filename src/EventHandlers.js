const gotoDate = (date) => (evt) => {
    evt && evt.preventDefault();
    const { current } = dateState;
    !(current && isSameDay(date, current)) && addDateToState(date);
    onDateChanged(date);
  };

  const gotoPreviousMonth = () => {
    const { month, year } = dateState;
    const previousMonth = getPreviousMonth(month, year);
    setDateState({
      month: previousMonth.month,
      year: previousMonth.year,
      current: dateState.current,
    });
  };

  const gotoNextMonth = () => {
    const { month, year } = dateState;
    const nextMonth = getNextMonth(month, year);
    setDateState({
      month: nextMonth.month,
      year: nextMonth.year,
      current: dateState.current,
    });
  };

  const gotoPreviousYear = () => {
    const { year } = dateState;
    setDateState({
      month: dateState.month,
      year: year - 1,
      current: dateState.current,
    });
  };

  const gotoNextYear = () => {
    const { year } = dateState;
    setDateState({
      month: dateState.month,
      year: year + 1,
      current: dateState.current,
    });
  };

  const handlePressure = (fn) => {
    if (typeof fn === "function") {
      fn();
      pressureTimeout = setTimeout(() => {
        pressureTimer = setInterval(fn, 100);
      }, 500);
    }
  };

  const clearPressureTimer = () => {
    pressureTimer && clearInterval(pressureTimer);
    pressureTimeout && clearTimeout(pressureTimeout);
  };

  const handlePrevious = (evt) => {
    evt && evt.preventDefault();
    const fn = evt.shiftKey ? gotoPreviousYear : gotoPreviousMonth;
    handlePressure(fn);
  };
  
  const handleNext = (evt) => {
    evt && evt.preventDefault();
    const fn = evt.shiftKey ? gotoNextYear : gotoNextMonth;
    handlePressure(fn);
  };