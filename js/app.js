// script.js
document.addEventListener('DOMContentLoaded', () => {
  const calendarDays = document.getElementById('calendar-days');
  const monthYear = document.getElementById('month-year');
  const prevMonthButton = document.getElementById('prev-month');
  const nextMonthButton = document.getElementById('next-month');

  let currentDate = new Date();

  const renderCalendar = (date) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = `${date.toLocaleString('default', { month: 'long'})} ${year}`;

    calendarDays.innerHTML = '';
    for (let i = 0; i < firstDayOfMonth; i++) {
      const emptyCell = document.createElement('div');
      calendarDays.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayCell = document.createElement('div');
      dayCell.textContent = day;
      if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
        dayCell.classList.add('current-day');
      }
      calendarDays.appendChild(dayCell);
    }
  };

  prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  renderCalendar(currentDate);
});