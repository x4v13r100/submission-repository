const Part1 = (props) => {
  //console.log(props);
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
    </div>
  )
}

const Part2 = (props) => {
  //console.log(props);
  return (
    <div>
      <p>
        {props.part2} {props.exercises2}
      </p>
    </div>
  )
}

const Part3 = (props) => {
  //console.log(props);
  return (
    <div>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}


const Header = (props) => {
  //console.log(props.title);
  return (
    <div>
      <h1>{props.title.name}</h1>
    </div>
  )
}

const Content = (props) => {
  //console.log(props.content.parts[0]);
  return (
    <div>
      <Part1 part1={props.content.parts[0].name} exercises1={props.content.parts[0].exercises}/>
      <Part2 part2={props.content.parts[1].name} exercises2={props.content.parts[1].exercises}/>
      <Part3 part3={props.content.parts[2].name} exercises3={props.content.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  //console.log(props.total);
  return (
    <div>
      <p>Number of exercises {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      }
    ]
  };
  return (
    <>
      <Header title = {course} />
      <Content content = {course}/>
      <Total total = {course}/>
    </>
  )
}

export default App