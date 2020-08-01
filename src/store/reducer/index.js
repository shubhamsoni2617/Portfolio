import { APP_SET_PROFILE_COMPLETION_DATA } from "../action";

const initialState = {
  allData: {},
  isLoggedIn: true,
  viewMode: false,
  name: "shubham",
  designation: "Full Stack Developer",
  about:
    "I'm a newly graduated web developer offering enthusiasm and understanding of Front-end frameworks like React, Redux and advanced CSS techniques and back-end frameworks like Node.js and mongoDB. I will bring to the table the ability to design and develop beautiful and functional websites using the latest technologies and web guidelines.",
  education: [
    {
      fromMonth: "JULY",
      fromYear: "2018",
      toMonth: "JULY",
      toYear: "2018",
      title: "BACHELOR OF ENGINEERING",
      description:
        "Finished my Computer Science Bachelor&amp;s degree from Datta Meghe college of Engineering. I played a part in multiple projects throughout this course such as a website and an Android app. For the final year BE project I created a 2D platformer game using Unity3D engine for Windows and Mac platform. This project can be found here.",
    },
    {
      fromMonth: "JULY",
      fromYear: "2018",
      toMonth: "JULY",
      toYear: "2018",
      title: "BACHELOR OF ENGINEERING",
      description:
        "Finished my Computer Science Bachelor&amp;s degree from Datta Meghe college of Engineering. I played a part in multiple projects throughout this course such as a website and an Android app. For the final year BE project I created a 2D platformer game using Unity3D engine for Windows and Mac platform. This project can be found here.",
    },
  ],
  skill: {
    frontend: [
      "HTML5",
      "CSS3 / SCSS",
      "FlexBox / CSS-GRID",
      "JavaScript (ES6)",
    ],
    backend: ["HTML5", "CSS3 / SCSS", "FlexBox / CSS-GRID", "JavaScript (ES6)"],
    miscellaneous: [
      "HTML5",
      "CSS3 / SCSS",
      "FlexBox / CSS-GRID",
      "JavaScript (ES6)",
    ],
  },
  project: {
    official: [
      {
        tags: ["REACT.JS", "AJAX", "AXIOS", "ES7"],
        title: "Sistic",
        oneLiner: "First time in Mumbai? This is where you should go first!",
        description:
          "This is the final project of Udacity Front-End Nanodegree and was made using React16. Google Maps API and FourSquare API was used to take top locations dynamically and display them on the google map. Sass and flexbox was used for styling this website",
      },
      {
        tags: ["REACT.JS", "AJAX", "AXIOS", "ES7"],
        title: "Sistic",
        oneLiner: "First time in Mumbai? This is where you should go first!",
        description:
          "This is the final project of Udacity Front-End Nanodegree and was made using React16. Google Maps API and FourSquare API was used to take top locations dynamically and display them on the google map. Sass and flexbox was used for styling this website",
      },
    ],
    side: [
      {
        tags: ["REACT.JS", "AJAX", "AXIOS", "ES7"],
        title: "Sistic",
        oneLiner: "First time in Mumbai? This is where you should go first!",
        description:
          "This is the final project of Udacity Front-End Nanodegree and was made using React16. Google Maps API and FourSquare API was used to take top locations dynamically and display them on the google map. Sass and flexbox was used for styling this website",
      },
      {
        tags: ["REACT.JS", "AJAX", "AXIOS", "ES7"],
        title: "Sistic",
        oneLiner: "First time in Mumbai? This is where you should go first!",
        description:
          "This is the final project of Udacity Front-End Nanodegree and was made using React16. Google Maps API and FourSquare API was used to take top locations dynamically and display them on the google map. Sass and flexbox was used for styling this website",
      },
    ],
  },
  contact: {
    mail: "shubhamsoni2617@gmail.com",
    github: "https://github.com/shubhamsoni2617",
    linkedin: "https://www.linkedin.com/in/shubham-soni-607ab618b",
    instagram: "",
    mobile: "9718581385",
  },
};

const reducer = (state = initialState, action) => {
  // console.log("tar11211", action);
  switch (action.type) {
    case APP_SET_PROFILE_COMPLETION_DATA:
      return {
        termSheet: action.payload.termSheet,
      };
    case "SET_VIEW_MODE":
      return {
        ...state,
        viewMode: action.payload,
      };
    case "SET_LOGGEDIN":
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case "UPDATE_RESUME":
      return {
        ...state,
        ...action.payload,
      };

    case "UPDATE_EDUCATION":
      const allEducation = [...state.education];

      const education = allEducation[action.payload.index];
      education[action.payload.field] = action.payload.title;
      allEducation[action.payload.index] = education;

      return {
        ...state,
        education: allEducation,
      };

    case "ADD_EDUCATION":
      const oldEducation = [
        ...state.education,
        {
          fromMonth: "",
          fromYear: "",
          toMonth: "",
          toYear: "",
          title: "",
          description: "",
        },
      ];
      return {
        ...state,
        education: oldEducation,
      };
    case "DELETE_EDUCATION":
      let updateEducation = [...state.education];
      updateEducation.splice(action.payload.index, 1);
      return {
        ...state,
        education: updateEducation,
      };

    case "UPDATE_SKILLS":
      const allSkills = { ...state.skill };
      allSkills[action.payload.field][action.payload.index] =
        action.payload.value;
      return {
        ...state,
        skill: allSkills,
      };
    case "ADD_SKILLS":
      const oldSkills = { ...state.skill };
      oldSkills[action.payload].push("");
      return {
        ...state,
        skill: oldSkills,
      };
    case "DELETE_SKILL":
      let updateSkills = { ...state.skill };
      updateSkills[action.payload.field].splice(action.payload.index, 1);
      return {
        ...state,
        skill: updateSkills,
      };

    default:
      return state;
  }
};

export default reducer;
