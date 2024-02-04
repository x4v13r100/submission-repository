const Courses = (props) => {
  //console.log(props.courses);
  const { courses } = props;
  const { parts } = courses;
  const sumExcercises = parts
    .map((part) => part.exercises)
    .reduce((total, curent) => total + curent, 0);

  return (
    <div>
      <Header header={courses.name} />

      {parts.map((part) => (
        <Content key={part.id} content={part} />
      ))}

      <Total sumExcercises={sumExcercises} />
    </div>
  );
};

const Header = ({ header }) => {
  return (
    <div>
      <h1>{header}</h1>
    </div>
  );
};

const Content = ({ content }) => {
  //console.log(content);
  return (
    <div>
      <p>
        {content.name} {content.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>total of exercises {props.sumExcercises}</p>
    </div>
  );
};

function App() {
  const course = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      id: 2,
      name: "Node.js",
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      {course.map((course) => (
        <Courses key={course.id} courses={course} />
      ))}
    </div>
  );
}

export default App;
