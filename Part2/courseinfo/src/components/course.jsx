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
      <strong>total of exercises {props.sumExcercises}</strong>
    </div>
  );
};

export default Courses;
