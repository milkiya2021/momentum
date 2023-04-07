const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다.",
    author: "-키케로-",
  },
  {
    quote: "가장 어두운 밤이 지나면 반드시 해는 떠오른다",
    author: "-괴테-",
  },
  {
    quote: "진정한 지혜는 자기 모습을 인식하는 데서 시작된다.",
    author: "-소크라테스-",
  },
  {
    quote: "천천히 걷자, 그러나 절대 멈추지 말자.",
    author: "-고든 릿먼 하워드-",
  },
  {
    quote: "언제나 가장 중요한 일을 먼저 해라.",
    author: "-리차드 켈러-",
  },
  {
    quote:
      "진정한 가치는 결과에서 나오는 것이 아니라, 그것을 찾아가는 과정에서 나오는 것이다",
    author: "-매트 머커너히-",
  },
  {
    quote:
      "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "-Edmund Burke-",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "-Nelson Mandela-",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "-Ralph Waldo Emerson-",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "-Lao Tzu-",
  },
];

const quoteEl = document.querySelector("#quote1");
const authorEl = document.querySelector("#author1");

const random = quotes[Math.floor(Math.random() * quotes.length)];

quoteEl.innerText = random.quote;
authorEl.innerText = random.author;
