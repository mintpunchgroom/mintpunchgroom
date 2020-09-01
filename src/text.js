const text = {
  phone: "+38 012 345 67 89",
  header: {
    nav: {
      home: "Главная",
      galery: "Галерея",
      contact: "Контакты",
    },
  },
  footer: {},
  button: "Запись",

  sections: {
    main: {
      marketing: "Пэт грумминг - сделайте своего питомца счастливым!",
    },
    about: {
      heading: "Лучшее место для вашего питомца!",
      cards: [
        {
          title: "Технология",
          description: "Крутое описание технологии",
        },
        {
          title: "Качество",
          description: "Крутое описание качества",
        },
        {
          title: "Любовь",
          description: "Крутое описание любови",
        },
      ],
    },
    galery: {
      heading: "Галерея",
      link: "Посмотреть другие фото",
    },
    prices: {
      heading: "Цены",
      cards: [
        {
          title: "Базовый",
          text: ["Стрижка", "Любовь"],
          price: "300",
        },
        /* Эта карточка всегда будет большой  */
        {
          title: "Лучший",
          text: [
            "Стрижка",
            "Мойка",
            "Любовь",
            "Пара часов в прекрасной компании",
          ],
          price: "900",
        },
        {
          title: "Экстра",
          text: ["Стрижка", "Мойка", "Любовь"],
          price: "600",
        },
      ],
    },
    steps: {
      heading: "Как это работает",
      steps: [
        {
          title: "Шаг 1",
          description: "Самое понятное описание шага 1",
        },
        {
          title: "Шаг 2",
          description: "Самое понятное описание шага 2",
        },
        {
          title: "Шаг 3",
          description: "Самое понятное описание шага 3",
        },
      ],
    },
  },
  gallery: "Галерея",
  contacts: {
    heading: "Контакты",
    title: "Привет, меня зовут ХХХХХ",
    phone: "Контактный номер:",
    adress: "Адресс: ул. Уличная 1",
    insta: "insta_name",
  },
};

export default text;
