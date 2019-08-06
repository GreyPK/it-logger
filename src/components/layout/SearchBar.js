import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchLogs } from '../../actions/logActions'

const SearchBar = ({ searchLogs }) => {
	const searchHandler = () => {
		searchLogs(text.current.value)
	}

	const clearInput = () => {
		text.current.value = '';
		searchLogs(text.current.value)
	}

	const text = useRef('')

	return (
		<nav style={{ marginBottom: '30px' }} className='blue'>
			<div className='nav-wrapper'>
				<form>
					<div className='input-field'>
						<input id='search' type='search' onChange={searchHandler} ref={text} />
						<label className='label-icon' htmlFor='search'>
							<i className='material-icons'>search</i>
						</label>
						<i className='material-icons' onClick={clearInput}>close</i>
					</div>
				</form>
			</div>
		</nav>
	)
}

SearchBar.propTypes = {
	searchLogs: PropTypes.func.isRequired
}

const mapDispatchToProps = {
	searchLogs
}

export default connect(null, mapDispatchToProps)(SearchBar)