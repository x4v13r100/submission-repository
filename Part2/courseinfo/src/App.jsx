const Course = (props) => {
  const { courses } = props;
  const { parts } = courses;
  const sumExcercises = parts.map(part => part.exercises).reduce((total,curent) => total + curent,0);
  
  return (
    <div>
      <Header header={courses.name} />
      <ul>
        {parts.map((part) => (
          <Content key={part.id} content={part}/>
        ))}
      </ul>
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

const Content = ({content}) => {
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
      <p>
        total of exercises {props.sumExcercises}
      </p>
    </div>
  )
}

function App() {
  const course = {
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
  };

  return <Course courses={course} />;
}

export default App;
