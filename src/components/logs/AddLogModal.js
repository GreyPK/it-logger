import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = () => {
	const [message, setMessage] = useState('')
	const [attention, setAttention] = useState(false)
	const [tech, setTech] = useState('')

	const onSubmit = (e) => {
		if (message === '' || tech === '') {
			M.toast({ html: 'Please enter a message and tech' })
		} else {
			console.log(message, tech, attention)
		}
	}

	return (
		<div id="add-log-modal" className="modal">
			<div className="modal-content">
				<h4>Enter System Log</h4>

				<div className="row">
					<div className="input-field">
						<input type="text" name='message' value={message} onChange={e => setMessage(e.target.value)} />
						<label htmlFor="message" className='active'>
							Log message
						</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<select name="tech" value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
							<option value="" disabled>Select Technition</option>
							<option value="Jon Doe">Jon Doe</option>
							<option value="Jon Doe2">Jon Doe2</option>
							<option value="Jon Doe3">Jon Doe3</option>
						</select>
						<label htmlFor="message" className='active'>
							Log message
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

export default AddLogModal
