# React useReducer Example

This project demonstrates how to use React’s [`useReducer`](https://react.dev/reference/react/useReducer) hook to manage **complex state logic** in a clean and scalable way.  
It combines a simple **counter** with a **name list manager** using a single reducer.

## 🚀 Features

- Counter with:
  - ➕ Increment
  - ➖ Decrement (guarded so it never goes below 0)
  - 🔄 Reset
- Name manager with:
  - Controlled input field
  - Add new names immutably
  - Input clears after submission
- State is managed centrally with `useReducer`
- Example of mixing `useReducer` (for app state) with `useState` (for form state)

---

## 📂 Project Structure

    ├──src/
    ├── App.jsx # Main application component
    ├── App.css # Styles
    └── Reducers/
      └── CountReducer.js # Reducer logic for count + names

## 🔑 Reducer Implementation

`Reducers/CountReducer.js`:

```js
export const countReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        value: state.value + 1,
      }

    case 'reduce':
      return {
        ...state,
        value: state.value - 1,
      }

    case 'reset':
      return {
        ...state,
        value: 0,
      }

    case 'addname':
      return {
        ...state,
        name: [...state.name, action.payload],
      }

    default:
      return state
  }
}
```

## 📖 App Component Walkthrough

`App.jsx`:

### Initial State

```js
const initialState = {
  value: 0,
  name: [],
}
```

### Reducer Hook

```js
const [count, dispatch] = useReducer(countReducer, initialState)
```

### Local State for Input

```js
const [name, setName] = useState('')
```

### Dispatch Actions

```js
const handleClickAdd = () => dispatch({ type: 'add' })
const handleClickSub = () => dispatch({ type: 'reduce' })
const handleClick = () => dispatch({ type: 'reset' })
const handleSubmit = () => {
  dispatch({ type: 'addname', payload: name })
  setName('')
}
```

### Controlled Input

```jsx
<input
  id="namebox"
  placeholder="Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  maxLength={15}
/>
```

### Render Names

```jsx
{
  count.name.map((p, i) => <p key={i}>{p}</p>)
}
```

## ▶️ Getting Started

### Clone the repo:

```
git clone https://github.com/your-username/useReducer-counter-names.git
cd useReducer-counter-names
```

### Install dependencies:

```
npm install
```

### Run the development server:

```
npm run dev
```

### 📚 Key Learnings

- How to use useReducer for more complex state logic.
- How to combine useReducer (global state) with useState (local UI state).
- Importance of immutability (...state, [...state.name, payload]).
- Best practices for controlled components in React.
- Mixing multiple React hooks (useReducer + useState) in one component.

<br />

### ✍️ Author: Abhirup Roy
