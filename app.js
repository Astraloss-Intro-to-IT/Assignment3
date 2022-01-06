const reviews = [
    {
      id: 1,
      name: "Nguyen Thanh Hung",
      job: "Web Developer",
      img:
        "images/Hung.jpg",
      text:
        " Hi, my name is Nguyen Thanh Hung, since I was only a child, I've always wanted to be a professional athlete. However, an incident occurred, causing my leg to be hurt, and I am unable to move quickly with my injured leg. I felt the world had ended until one of my high school teachers introduced me to a programming course. Since then, I've spent the majority of my time researching and cultivating expertise in several IT knowledge, and I've discovered that this industry may be a good fit for me. As a result, when it came time to choose a university major, I decided that IT would be the ideal field for me to study because of the skills I already acquired. With the test result that I had conducted, I am a person who afraid of criticism, my team had tried my best to avoid putting pressure on me by guiding me and support me during the progress. It’s lucky for me that my team is discipline and solid, which make the progress going smoothly, and it’s even more efficient with the instruction given by Son and Minh Duc By the time I wrote this, I was fascinated by creating mobile applications which pursue me to select mobile developer as my ideal job. Fortunately, Cao Son in our group share a similar opinions and interests in mobile development as well as web development in order to improve people’s life quality. Therefore, we can share our experience while studying as well as working to support each other. Meanwhile, The Duc and Minh Duc was more concern about UI/UX design and want to be a Front-end Developer",
    },
    {
      id: 2,
      name: "Nguyen Huy Cao Son",
      job: "Project Manager",
      img:
        "images/CaoSon.jpg",
      text:
        "I was very close to my father so I have always wanted to follow his footsteps and become an architect. However, as I grew older, I realized that I wanted to accomplish something unique that did not rely on my family's assistance, therefore I am studying Chinese to support my future. I chose IT as my major for my cousin and uncle are IT postgraduate student in Singapore and the manager of Mobifone, they have many experiences and illuminated my interest as well as my curiosity in this subject. I get a lot of guidance and support from them, therefore I want to enter this profession to research and practice coding. Since we are in the era of 4.0, this major is in great demand and offers many prospects for a successful career. - Team profile: According to the exam, I am not only a motivated person who appreciates working in a group, but I am also willing to speak and listen to others in order to settle issues and be accountable for my work. My teammates are quite relaxed; they are all entertainers who offer delight to the others, and we rarely have conflicts. However, because Hung is afraid of criticism, we must avoid putting pressure on him by just providing advice and support. Furthermore, my teammates are highly creative and assertive in making decisions, which may come in handy as we strive to come up with an idea. - Ideal Jobs: My ideal job in my team is pretty identical to Hung's; we both want to work for large corporations in the apps and web development fields. It interests me since I can design many beneficial technologies to assist people improve their lives and experiences through applications and websites. On the other hand, two of my other team members are aiming for positions in the company such as UI/UX Design and Front-end Development. All of those occupations require a solid bachelor's degree and 2 to 3 years of experience in those fields. Thus, we all have the same aim of graduating from RMIT with a good bachelor's degree and gaining as much experience as possible in order to achieve our goals and become qualified for the jobs we want",
    },
    {
      id: 3,
      name: "Duong Minh Duc",
      job: "Designer",
      img:
        "images/MinhDuc.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Nguyen The Duc",
      job: "Documenter",
      img:
        "images/TheDuc.jpg",
      text:
        "My interest in IT began, as far as I can remember, in 2007, when Steve Jobs and his team introduced their first smartphone: the Apple iPhone, which had the ability to surf the internet just like a desktop computer, but in a pocket size. However, they had no idea that this innovation had sparked the explosion of digital technology era in which literally everything could be done without moving an inch from our own desktop chair by using internet-connected devices such as laptop and smartphone. From my test results, I am an outgoing person who embraces great concepts and acts that express my feeling of excitement and kindness towards one another. As a result of my high flexibility, I am able to work effectively on collaborative assignments. Because my teammates are polite and always exudes positive energy, we don't feel much pressure in bonding with others and completing our work. When it comes to our ideal employment, it appears that we all desired a position with a high-paying wage, an energetic and modern working environment. Hung, Son, and I are all interested in working as developers in various areas such as mobile, NET, and front-end. Meanwhile, Minh Duc has found a job that suited his drawing talent and his passion in IT which is becoming a UI/UX designer. Because the employment requirements are so high, we set a goal of graduating from RMIT with a decent degree in order to make our fantasy come true.",
    },
  ];
  // select items
  const img1 = document.getElementById("person-img1");
  const author1 = document.getElementById("author1");
  const job1 = document.getElementById("job1");
  const info1 = document.getElementById("info1");

  const img2 = document.getElementById("person-img2");
  const author2 = document.getElementById("author2");
  const job2 = document.getElementById("job2");
  const info2 = document.getElementById("info2");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  
  // set starting item
  let currentItem1 = 0;
  let currentItem2 = 1;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem1];
    img1.src = item.img;
    author1.textContent = item.name;
    job1.textContent = item.job;
    info1.textContent = item.text;
  });
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem2];
    img2.src = item.img;
    author2.textContent = item.name;
    job2.textContent = item.job;
    info2.textContent = item.text;
  });



  
  // show person based on item
  function showPerson1(person) {
    const item = reviews[person];
    img1.src = item.img;
    author1.textContent = item.name;
    job1.textContent = item.job;
    info1.textContent = item.text;
  }
  function showPerson2(person) {
    const item = reviews[person];
    img2.src = item.img;
    author2.textContent = item.name;
    job2.textContent = item.job;
    info2.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem1 = currentItem1 +2;
    currentItem2 = currentItem2 +2;
    if (currentItem1 > reviews.length - 1) {
      currentItem1 = 0;
    }
    if(currentItem2 >reviews.length -1){
      currentItem2 =1;
    }
    showPerson1(currentItem1);
    showPerson2(currentItem2)
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem1 = currentItem1 -2;
    currentItem2 = currentItem2 -2;
    if (currentItem1 < 0) {
      currentItem1 = reviews.length - 2;
    }
    if (currentItem2 < 0) {
      currentItem2 = reviews.length - 1;
    }
    showPerson1(currentItem1);
    showPerson2(currentItem2);
  });