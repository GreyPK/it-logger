import React from 'react'
import { connect } from 'react-redux'
import { deleteLog, setCurrent } from '../../actions/logActions'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({ log, deleteLog, setCurrent }) => {
	const onDelete = () => {
		deleteLog(log.id)
		M.toast({ html: `Log successful deleted by ${log.tech}` })
	}

	return (
		<li className='collection-item'>
			<a href='#edit-log-modal' onClick={() => setCurrent(log)}
				className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a>
			<br />
			<span className='grey-text'>
				<span className='black-text'>ID #{log.id}</span> last updated by <span className='black-text'>{log.tech}</span> on <Moment format='Do MMMM YYYY, hh:mm:ss'>{log.date}</Moment>
			</span>
			<a href="#!" onClick={onDelete} className='secondary-content'>
				<i className='material-icons grey-text'>delete</i>
			</a>
		</li>
	)
}

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLog: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired
}

const mapDispatchToProps = {
	deleteLog,
	setCurrent
}

export default connect(null, mapDispatchToProps)(LogItem)
