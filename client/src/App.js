import './App.css';
import Navbar from './components/Navbar';
import Home from '../src/components/pages/Home'
import SignUp from '../src/components/pages/SignUp';
import MealPlan from './components/pages/MealPlan';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const httpLink = createHttpLink({
  uri: "/graphql"
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/signup' exact Component={SignUp} />
        <Route path= '/plans' exact Component={MealPlan} />
      </Routes>
    </Router>
    </ApolloProvider>
  );
}

export default App;
