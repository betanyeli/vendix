import './App.css'
import useApiManager from './services/ApiManager/ApiManager.hooks';

function App() {
  const {
    loading,
    error,
    getProductById
  } = useApiManager();

  const productId = 1;

  if (loading) <p>Loading...</p>
  if (error) <p> Error...</p>
  return (
    <>
      <h1>Vendix.de</h1>
      <div style={{ display: 'flex', justifyContent: "space-between" }}>
        <button>
          Create
        </button>
        <button onClick={() => getProductById(productId)}>
          Search
        </button>
        <button>
          Update
        </button>

      </div>
      <a>
        Delete
      </a>
      <p className="read-the-docs">
        {`To -do: \n 
        ☆ Fix retrieve data \n 
        ☆ Unit testing \n 
        ☆ Separate by atomic design \n 
        ☆ Create default screen, error screen, loading screen \n
        ☆`}

      </p>
    </>
  )
}

export default App
