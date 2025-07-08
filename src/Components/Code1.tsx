// Importing React and necessary types


// Step 1: Define the type for props
interface GreetingProps {
  name: string; // Expecting a name prop of type string
}

// Step 2: Use React.FC (FunctionComponent) and provide the prop type
const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
