import React from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from './service';

function App() {
  const serv = new HttpService();
  const getPrds=()=>{
    serv.getProducts()
      .then(
        (result)=>{
          console.log(`Products ${JSON.stringify(result.data.data)}`);
        }
      ).catch((error)=>{
        console.log(`Error Occured ${error}`)
      });
  }
  const postPrd=()=>{
    const prd ={
       ProdId:103, ProdName:'P3'
    };
    serv.postProduct(prd)
      .then(
        (result)=>{
          console.log(`Products ${JSON.stringify(result.data.data)}`);
        }
      ).catch((error)=>{
        console.log(`Error Occured ${error}`)
      });
  }

  const getCats=()=>{
    serv.getCategories()
      .then(
        (result)=>{
          console.log(`Categories ${JSON.stringify(result.data.data)}`);
        }
      ).catch((error)=>{
        console.log(`Error Occured ${error}`)
      });
  }
  const postCat=()=>{
    const cat ={
       CatId:203, CatName:'C3'
    };
    serv.postCategory(cat)
      .then(
        (result)=>{
          console.log(`Categories ${JSON.stringify(result.data.data)}`);
        }
      ).catch((error)=>{
        console.log(`Error Occured ${error}`)
      });
  }

  return (
    <div className="App">
        <table>
          <tbody>
            <tr>
              <td>
                <input type="button" value="Get Products"
                 onClick={getPrds}></input>
              </td>
              <td>
                <input type="button" value="Save Product"
                 onClick={postPrd}></input>
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" value="Get Categories"
                 onClick={getCats}></input>
              </td>
              <td>
                <input type="button" value="Save Category"
                 onClick={postCat}></input>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default App;
