import client from "./assets/icons/running.svg";
import happyClient from "./assets/icons/cat.svg";
import groom from "./assets/icons/groom.svg";

const text = {
  phone: "+38 095 056 46 63",
  header: {
    nav: {
      home: "Главная",
      galery: "Галерея",
      price: "Цены",
      contact: "Контакты",
    },
  },
  button: "Запись",
  sections: {
    main: {
      heading: `Делаю ваших любимцев красивыми и ухоженными!`,
      subheading: `Шеpсть будет сиять, а хвостик - вилять`,
    },
    about: {
      heading: "Лучшее место для вашего питомца!",
      cards: [
        {
          title: "Стрижка",
          description:
            "Выбор стрижки согласно пожеланиям владельца. Если нужен совет - грумер всегда подскажет.",
        },
        {
          title: "Качество",
          description:
            "Использую профессиональную косметику, далее добавляю мнооого любви и чуточку специальных духов в конце.",
        },
        {
          title: "Чистота",
          description:
            "Стол и инструмент чистится и дезинфицируется после каждого клиента.",
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
          img: client,
          description:
            "Записываете питомца на стрижку удобным для вас способом: звоните по телефону или пишите в вайбер/телеграмм.",
        },
        {
          title: "Шаг 2",
          img: groom,
          description:
            "Приходите в оговоренное время вместе с собачкой или котиком, и доверяете Ваше сокровище мастеру.",
        },
        {
          title: "Шаг 3",
          img: happyClient,
          description: "И когда мастер закончит - забираете Вашу красотулечку!",
        },
      ],
    },
  },
  gallery: "Галерея",
  price: {
    title: "Цены",
    warningText:
      "Возможно повышение цены на 50-100 грн в зависимости от поведения собачки во время процедур и объема работы",
    prices: [
      {
        withWarning: true, //Предупреждение про +50грн за колтуны/плохое поведение
        section: "Полная комплексная стрижка",
        items: [
          { title: "Аффенпинчер стрижка/тримминг", price: "350/450" },
          { title: "Бивер-йоркширский терьер", price: "350" },
          { title: "Бишон фризе", price: "400" },
          { title: "Вест-хайленд вайт терьер стрижка/тримминг", price: "450/550" },
          { title: "Грифон стрижка/тримминг", price: "350/450" },
          { title: "Джек-рассел г/ш", price: "350" },
          { title: "Джек-рассел ж/ш стрижка/тримминг", price: "350/450" },
          { title: "Йоркширский терьер", price: "350" },
          { title: "Карликовый пудель", price: "350" },
          { title: "Китайская хохлатая пуховка", price: "400" },
          { title: "Кокер спаниель английский", price: "350" },
          { title: "Кокер спаниель американский", price: "400" },
          { title: "Мальтийская болонка", price: "400" },
          { title: "Мопс", price: "300" },
          { title: "Одис", price: "400" },
          { title: "Папильон", price: "350" },
          { title: "Пекинес", price: "350" },
          { title: "Такса г/ш", price: "350" },
          { title: "Такса ж/ш стрижка/тримминг", price: "350/450" },
          { title: "Той-терьер", price: "350" },
          { title: "Французский бульдог", price: "300" },
          { title: "Чихуахуа г/ш", price: "250" },
          { title: "Чихуахуа д/ш", price: "300" },
          { title: "Цвергшнауцер стрижка/тримминг", price: "400/500" },
          { title: "Ши-тсу", price: "400" },
          { title: "Шпиц померанский", price: "350" },
          { title: "Шпиц малый", price: "400" }, 
        ],
      },
       {
        section: "Гигиенические процедуры",
        items: [
          { title: "Подстригание когтей", price: "50" },
          { title: "Подстригание когтей + чистка ушек", price: "75" },
        ],
      },
       {
        section: "Стрижка котов",
        items: [
          { title: "Короткошерстные вычесывание/стрижка", price: "200/300" },
          { title: "Длинношерстные вычесывание/стрижка", price: "250/350" },
        ],
      },
    ],
  },
  contacts: {
    heading: "Контакты",
    title: "Привет! Меня зовут Марина.",
    text:
      "Я грумер-мультипородник с ветеринарным образованием, специализируюсь на пэт-груминге. Всегда рада новым знакомствам с Вашими хвостиками!",
    phone: "Контактный номер: ",
    adress: "Принимаю по адресу: г. Киев, пр. Маяковского 14/13",
    insta: "mint.punchgroom",
    instaLink: "https://www.instagram.com/mint.punchgroom/",
  },
};

export default text;
