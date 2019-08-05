import React, { Fragment, useEffect } from 'react'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModel from './components/techs/AddTechModel'
import TechListModal from './components/techs/TechListModal.js'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'

const App = () => {
	useEffect(() => {
		M.AutoInit()
	}, [])

	return (
		<Fragment>
			<SearchBar />
			<div className='container'>
				<AddBtn />
				<AddLogModal />
				<EditLogModal />
				<AddTechModel />
				<TechListModal />
				<Logs />
			</div>
		</Fragment>
	)
}

export default App
