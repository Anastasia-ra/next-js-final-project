import { Category, Expense } from '../util/database';
import { getSharePerCategory, getSumExpensesCategory } from './sumPerCategory';
import { Context } from 'chartjs-plugin-datalabels';
import { getTotalBudgetProgress } from './budgetProgress';
import { getSumPerDay } from './sumPerDay';

export const colors = [
  'rgba(255, 99, 164, 0.8)',
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(86, 255, 86, 0.8)',
  'rgba(68, 7, 97, 0.8)',
  'rgba(224, 240, 10, 0.8)',
  'rgba(44, 46, 46, 0.8)',
];

export function getDoughnutCategories(
  categoriesArray: Category[],
  expensesArray: Expense[],
) {
  const categoriesWithSum = getSumExpensesCategory(
    categoriesArray,
    expensesArray,
  );
  const categoriesWithShares = getSharePerCategory(categoriesWithSum);
  const categoriesWithSharesFiltered = categoriesWithShares.filter(
    (e) => e.shareOfExpenses !== 0,
  );

  const categories = categoriesWithSharesFiltered.map((e) => e.name);

  const categoriesData = categoriesWithSharesFiltered.map(
    (e) => e.shareOfExpenses,
  );

  const dataDoughnutCategories = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses per category',
        data: categoriesData,
        backgroundColor: colors,
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          ' rgba(86, 255, 86, 1)',
          'rgba(68, 7, 97, 1)',
          'rgba(224, 240, 10, 1)',
          'rgba(44, 46, 46, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const optionsDoughnutCategories = {
    cutout: '75%',
    radius: 60,
    maintainAspectRatio: false,
    elements: {
      arc: {
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.45)',
          'rgba(54, 162, 235, 0.45)',
          'rgba(255, 206, 86, 0.45)',
          'rgba(75, 192, 192, 0.45)',
          'rgba(153, 102, 255,0.45)',
          'rgba(255, 159, 64, 0.45)',
          ' rgba(86, 255, 86, 0.45)',
          'rgba(68, 7, 97, 0.45)',
          'rgba(224, 240, 10, 0.45)',
          'rgba(44, 46, 46, 0.45)',
        ],
        hoverOffset: 3,
      },
    },
    layout: {
      // padding: 10,
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      title: {
        display: true,
        text: 'Categories',
        color: '#26325b',
        font: {
          size: 16,
          family: "'Gill Sans MT', 'Calibri', 'Arial', 'sans-serif'",
        },
      },
      legend: {
        position: 'bottom' as 'bottom',
        // align: 'start' as 'start',
        display: true,
        // maxHeight: 20,
        // maxWidth: 300,
        // fullSize: true,
        labels: {
          boxWidth: 7,
          usePointStyle: true,
          pointStyle: 'circle' as 'circle',
          color: '#26325b',
          padding: 5,
          font: {
            size: 12,
          },
        },
      },
      datalabels: {
        display: false,
        color: '#26325b',
        formatter: function (value: number, context: Context) {
          return (
            categories[context.dataIndex] + '\n' + Math.round(value * 100) + '%'
          );
        },
        align: 'end' as 'end',
        offset: 8,
        textAlign: 'center' as 'center',
      },
    },
  };
  return { data: dataDoughnutCategories, options: optionsDoughnutCategories };
}

export function getDoughnutCategoriesAndExpensesData(
  categoriesArray: Category[],
  expensesArray: Expense[],
) {
  const categoriesWithSum = getSumExpensesCategory(
    categoriesArray,
    expensesArray,
  );
  const categoriesWithShares = getSharePerCategory(categoriesWithSum);
  const categoriesWithSharesFiltered = categoriesWithShares.filter(
    (e) => e.shareOfExpenses !== 0,
  );

  const categories = categoriesWithSharesFiltered.map((e) => e.name);

  const categoriesData = categoriesWithSharesFiltered.map(
    (e) => e.shareOfExpenses,
  );

  const dataDoughnutCategoriesExpenses = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses per category',
        data: categoriesData,
        backgroundColor: colors,
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          ' rgba(86, 255, 86, 1)',
          'rgba(68, 7, 97, 1)',
          'rgba(224, 240, 10, 1)',
          'rgba(44, 46, 46, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const optionsDoughnutCategoriesExpenses = {
    cutout: '75%',
    radius: 60,
    maintainAspectRatio: false,
    elements: {
      arc: {
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.45)',
          'rgba(54, 162, 235, 0.45)',
          'rgba(255, 206, 86, 0.45)',
          'rgba(75, 192, 192, 0.45)',
          'rgba(153, 102, 255,0.45)',
          'rgba(255, 159, 64, 0.45)',
          ' rgba(86, 255, 86, 0.45)',
          'rgba(68, 7, 97, 0.45)',
          'rgba(224, 240, 10, 0.45)',
          'rgba(44, 46, 46, 0.45)',
        ],
        hoverOffset: 3,
      },
    },
    layout: {
      // padding: 10,
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      title: {
        display: true,
        text: 'Categories with expenses this month',
        color: '#26325b',
        font: {
          size: 16,
          family: "'Gill Sans MT', 'Calibri', 'Arial', 'sans-serif'",
        },
      },
      legend: {
        position: 'bottom' as 'bottom',
        // align: 'start' as 'start',
        display: true,
        // maxHeight: 20,
        // maxWidth: 300,
        // fullSize: true,
        labels: {
          boxWidth: 7,
          usePointStyle: true,
          pointStyle: 'circle' as 'circle',
          color: '#26325b',
          padding: 5,
          font: {
            size: 12,
          },
        },
      },
      datalabels: {
        display: false,
        color: '#26325b',
        formatter: function (value: number, context: Context) {
          return (
            categories[context.dataIndex] + '\n' + Math.round(value * 100) + '%'
          );
        },
        align: 'end' as 'end',
        offset: 8,
        textAlign: 'center' as 'center',
      },
    },
  };
  return {
    data: dataDoughnutCategoriesExpenses,
    options: optionsDoughnutCategoriesExpenses,
  };
}

export function getProgressChartData(
  categoriesArray: Category[],
  expensesArray: Expense[],
) {
  const budgetProgress = getTotalBudgetProgress(
    categoriesArray,
    expensesArray,
  ).progress;

  const budgetLeft = budgetProgress > 1 ? 0 : 1 - budgetProgress;

  // let bgColorProgress = '#07b335';
  let bgColorProgress = '#01aca3';
  if (0.7 < budgetProgress && budgetProgress < 0.9) {
    bgColorProgress = '#f4ac40';
  }
  if (budgetProgress >= 0.9) {
    bgColorProgress = '#a81b0c';
  }

  const dataProgressCircle = {
    labels: ['Expenses', 'Budget left'],
    datasets: [
      {
        label: 'Budget',
        data: [budgetLeft, budgetProgress],
        backgroundColor: ['white', bgColorProgress],
        borderColor: [bgColorProgress, bgColorProgress],
        borderWidth: 1,
      },
    ],
  };

  const optionsProgressCircle = {
    cutout: '75%',
    radius: 60,
    rotation: 0,
    maintainAspectRatio: false,
    elements: {
      // arc: {
      //   hoverBackgroundColor: [
      //     'rgba(255, 99, 132, 0.7)',
      //     'rgba(54, 162, 235, 0.7)',
      //   ],
      // },
    },
    layout: {
      padding: 0,
    },
    plugins: {
      title: {
        display: true,
        text: 'Progress',
        color: '#26325b',
        font: {
          size: 16,
          family: "'Gill Sans MT', 'Calibri', 'Arial', 'sans-serif'",
        },
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        color: bgColorProgress,
        formatter: function (value: number) {
          return Math.round(value * 100) + '%';
        },
        display: [false, false],
        align: 'start' as 'start',
        offset: 80,
        textAlign: 'center' as 'center',
        font: {
          weight: 'bold' as 'bold',
          size: 16,
        },
      },
    },
  };

  return {
    data: dataProgressCircle,
    options: optionsProgressCircle,
    budgetProgress: budgetProgress,
    bgColor: bgColorProgress,
  };
}

export function getLineData(
  monthsWithExpenses: Array<{
    totalExpenses: number;
    monthExpenses: Array<number>;
    monthId: number;
    month: string;
    year: number;
  }>,
) {
  const dataLine = {
    labels: monthsWithExpenses
      .map((month) => `${month.month} ${month.year.toString().slice(2)}`)
      .reverse(),
    datasets: [
      {
        label: 'Expenses',
        data: monthsWithExpenses
          .map((month) => month.totalExpenses / 100)
          .reverse(),
        borderColor: '#01aca3',
        backgroundColor: '#01aca3',
      },
    ],
  };

  const optionsLine = {
    // // responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: 'Your expenses this year',
        color: '#26325b',
        font: {
          size: 16,
          family: "'Gill Sans MT', 'Calibri', 'Arial', 'sans-serif'",
        },
      },
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0.2,
      },
    },
    scales: {
      xAxis: {
        ticks: {
          color: '#26325b',
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
      // yAxis: {
      //   ticks: {
      //     beginAtZero: true,
      //     color: '#26325b',
      //     font: {
      //       size: 12,
      //     },
      //     callback: (value: number | string) => {
      //       return value + ' €';
      //     },
      //   },
      //   grid: {
      //     display: false,
      //   },
      // },
      y: {
        beginAtZero: true,
        ticks: {
          beginAtZero: true,
          color: '#26325b',
          font: {
            size: 12,
          },
          callback: (value: number | string) => {
            return value + ' €';
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };
  return { data: dataLine, options: optionsLine };
}

export function getLineDataByDay(
  expensesCurrentMonth: Array<{
    id: number;
    userId: number;
    categoryId: number;
    name: string;
    price: number;
    date: string;
  }>,
) {
  const numberDaysCurrentMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
  ).getDate();

  const currentDay = new Date().getDate();

  const daysWithExpenses = getSumPerDay(expensesCurrentMonth, currentDay);

  function getDaysCurrentMonth() {
    const days = [];
    const currentMonth = new Date().getMonth();

    for (let i = 0; i < numberDaysCurrentMonth; i++) {
      if (currentMonth < 9) {
        days.push(`${i + 1}/0${currentMonth + 1}`);
      } else {
        days.push(`${i + 1}/${currentMonth + 1}`);
      }
    }
    return days;
  }

  const dataLine = {
    labels: getDaysCurrentMonth(),
    datasets: [
      {
        label: 'Expenses',
        data: daysWithExpenses.map((day) => day.totalExpenses / 100),
        borderColor: '#01aca3',
        backgroundColor: '#01aca3',
      },
    ],
  };

  const optionsLine = {
    // responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: 'Your expenses this month',
        color: '#26325b',
        // fullSize: false,
        font: {
          size: 16,
          family: "'Gill Sans MT', 'Calibri', 'Arial', 'sans-serif'",
        },
      },
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0.1,
      },
    },
    scales: {
      xAxis: {
        ticks: {
          color: '#26325b',
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          beginAtZero: true,
          color: '#26325b',
          font: {
            size: 12,
          },
          callback: (value: number | string) => {
            return value + ' €';
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };
  return { data: dataLine, options: optionsLine };
}

export function getDoughnutCategoriesBudgetData(categoriesArray: Category[]) {
  const dataDoughnutCategoriesBudget = {
    labels: categoriesArray.map((category) => category.name),
    datasets: [
      {
        label: 'Expenses per category',
        data: categoriesArray.map((category) => category.monthlyBudget),
        backgroundColor: colors,
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          ' rgba(86, 255, 86, 1)',
          'rgba(68, 7, 97, 1)',
          'rgba(224, 240, 10, 1)',
          'rgba(44, 46, 46, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const optionsDoughnutCategoriesBudget = {
    cutout: '60%',
    radius: 75,
    // spacing: '5%',
    maintainAspectRatio: false,
    elements: {
      arc: {
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.45)',
          'rgba(54, 162, 235, 0.45)',
          'rgba(255, 206, 86, 0.45)',
          'rgba(75, 192, 192, 0.45)',
          'rgba(153, 102, 255,0.45)',
          'rgba(255, 159, 64, 0.45)',
          ' rgba(86, 255, 86, 0.45)',
          'rgba(68, 7, 97, 0.45)',
          'rgba(224, 240, 10, 0.45)',
          'rgba(44, 46, 46, 0.45)',
        ],
        hoverOffset: 3,
      },
    },
    layout: {
      // padding: 10,
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        position: 'bottom' as 'bottom',
        // align: 'start' as 'start',
        display: false,
        // maxHeight: 20,
        // maxWidth: 300,
        // fullSize: true,
        labels: {
          boxWidth: 7,
          usePointStyle: true,
          pointStyle: 'circle' as 'circle',
          color: '#26325b',
          padding: 5,
          font: {
            size: 12,
          },
        },
      },
      datalabels: {
        display: false,
        color: '#26325b',
        formatter: function (value: number, context: Context) {
          return (
            categoriesArray.map((category) => category.name)[
              context.dataIndex
            ] +
            '\n' +
            Math.round(value * 100) +
            '%'
          );
        },
        align: 'end' as 'end',
        offset: 8,
        textAlign: 'center' as 'center',
      },
    },
  };
  return {
    data: dataDoughnutCategoriesBudget,
    options: optionsDoughnutCategoriesBudget,
  };
}
