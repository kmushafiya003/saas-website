
import './App.css';
import DynamicButton from './components/common/DynamicButton';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <DynamicButton text='get started'/>
      <DynamicButton text='click me' className={`text-primary-crocus-purple bg-primary-fuel-yellow`}/>
      <DynamicButton text='read more' className={`text-black bg-secondary-soft-blue`}/>
    </div>
  );
}

export default App;
