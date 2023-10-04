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
      <header>
        <div className='header-container'>
          <h2>Vendix.de</h2>
        </div>

      </header>

      <img width={200} style={{ marginTop: 50 }} src='https://betanyeli-images.s3.amazonaws.com/vending-machine-svgrepo-com+1+(1).png' />
      <div className='root-container'>

        <button>
          Get all products
        </button>
        <button onClick={() => getProductById(productId)}>
          Get product
        </button>
        <button>
          Update product
        </button>

        <button>
          Create product
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
