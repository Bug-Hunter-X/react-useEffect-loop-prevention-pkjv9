```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count:', count); 
    return () => {
      console.log('Component unmounting or effect cleanup');
    };
  }, [count]); // Correct dependency array: only runs when 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```