import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card color="pink" colorCode="FF6633" colorName="PINK" />
      <Card color="gray" colorCode="333333" colorName="GRAY" />
      <Card color="black" colorCode="000000" colorName="BLACK" />
      <Card color="green" colorCode="38BB14" colorName="GREEN" />
      <Card color="red" colorCode="390B0B" colorName="RED" />
      <Card color="blue" colorCode="FF6633" colorName="BLUE" />
      <Card color="orange" colorCode="FF8000" colorName="ORANGE" />
      <Card color="yellow" colorCode="FFF500" colorName="YELLOW" />
      <Card color="lightgrey" colorCode="CCCCCC" colorName="LIGHT GRAY" />
      <Card color="purple" colorCode="7E41A2" colorName="PURPLE" />
      <Card color="brown" colorCode="C14911" colorName="BROWN" />
      <Card color="lime" colorCode="FF6633" colorName="LIME" />
    </div>
  );
}

export default App;
