```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, including the initial one.
    console.log('Count:', count); 
    return () => {
      // Cleanup function (optional). It runs when the component unmounts or before the next effect runs
      console.log('Component unmounting or effect cleanup');
    };
  }, [count]); // The effect only runs if the 'count' changes.

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```