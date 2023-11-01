import List from './List.jsx';

function App() {
  const fruits = [
    { id: 1, name: 'apple', calories: 120 },
    { id: 2, name: 'orange', calories: 45 },
    { id: 3, name: 'banana', calories: 105 },
    { id: 4, name: 'coconut', calories: 159 },
    { id: 5, name: 'pineapple', calories: 37 },
  ];

  const vegatables = [
    { id: 6, name: 'potato', calories: 110 },
    { id: 7, name: 'celery', calories: 15 },
    { id: 8, name: 'carrot', calories: 25 },
    { id: 9, name: 'corn', calories: 63 },
    { id: 10, name: 'brocolli', calories: 50 },
  ];

  const justOne = [{ id: 11, name: 'Single Apple', calories: 43 }];

  const empty = [];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegatables.length > 0 && (
        <List items={vegatables} category="Vegetables" />
      )}
      {empty.length > 0 && <List items={empty} category="Empty" />}
      {justOne.length > 0 && <List items={justOne} />}
      {justOne.length > 0 && <List items={empty} />}
    </>
  );
}

export default App;
