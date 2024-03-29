import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateLog } from '../../actions/logActions'
import TechSelectOptions from '../techs/TechSelectOptions'
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = ({ current, updateLog }) => {
	const [message, setMessage] = useState('')
	const [attention, setAttention] = useState(false)
	const [tech, setTech] = useState('')

	useEffect(() => {
		if (current) {
			setMessage(current.message)
			setAttention(current.attention)
			setTech(current.tech)
		}
	}, [current])

	const onSubmit = (e) => {
		if (message === '' || tech === '') {
			M.toast({ html: 'Please enter a message and tech' })
		} else {
			const updLog = {
				id: current.id,
				message,
				attention,
				tech,
				date: new Date()
			}
			updateLog(updLog)
			M.toast({ html: `Log updated by ${updLog.tech}` })
		}

		setMessage('')
		setTech('')
		setAttention(false)
	}

	return (
		<div id="edit-log-modal" className="modal">
			<div className="modal-content">
				<h4>Enter System Log</h4>

				<div className="row">
					<div className="input-field">
						<input type="text" name='message' value={message} onChange={e => setMessage(e.target.value)} />
						<span className="helper-text" data-error="wrong" data-success="right">Log message</span>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<select name="tech" value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
							<option value="" disabled>Select Technition</option>
							<TechSelectOptions />
						</select>
						<label htmlFor="message" className='active'>
							Technition
						</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<p>
							<label>
								<input type="checkbox" className="filled-in" checked={attention} value={attention}
									onChange={e => setAttention(!attention)} />
								<span>Needs Attention</span>
							</label>
						</p>
					</div>
				</div>
			</div>

			<div className="modal-footer">
				<a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green blue btn">
					Enter
				</a>
			</div>
		</div>
	)
}

EditLogModal.propTypes = {
	current: PropTypes.object,
	updateLog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	current: state.log.current
})

const mapDispatchToProps = {
	updateLog
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLogModal)
