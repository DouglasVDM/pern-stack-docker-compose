import { Fragment, useEffect, useState } from 'react';
import './App.css';

// components
import InputDepartment from './components/InputDepartment';
import ListDepartment from './components/ListDepartments';

// const baseURL = process.env.NODE_ENV==='production' ? "/departments" : 'https://backend-lllc.onrender.com/departments';
const baseURL = 'https://backend-lllc.onrender.com/departments';


function App() {
	const [departments, setDepartments] = useState([]);
	const [loading, setLoading] = useState(false);

	const getDepartments = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				baseURL
			);
			const jsonData = await response.json();
			console.log('jsonData', jsonData)

			setDepartments(jsonData);
		        setLoading(false);

      
		} catch (err) {
		        setLoading(false);
			console.error(err.message);      
		}
	};
  
	useEffect(() => {
    getDepartments();
	}, []);
  
  console.log('appJs departments', departments);

	return (
		<Fragment>
			<div className="container">
				<InputDepartment baseURL={baseURL} departments={departments} setDepartments={setDepartments} />
		{loading ? <>Loading...</> : <ListDepartment baseURL={baseURL} departments={departments} setDepartments={setDepartments} />}
			</div>
		</Fragment>
	);
}

export default App;
