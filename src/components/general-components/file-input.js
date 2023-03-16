import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

export default function FileInput({ placeholder, inputName }) {
	const [fileName, setFileName] = useState(placeholder);

	return (
		<div className="file has-name is-fullwidth is-centered">
			<label className="file-label">
				<input
					className="file-input"
					type="file"
					name={inputName}
					onChange={(e) => {
						setFileName(e.target.files[0].name);
					}}
				/>
				<span className="file-cta">
					<span className="file-icon">
						<FontAwesomeIcon icon={faUpload} />
					</span>
				</span>
				<span className="file-name" title={fileName}>
					{fileName}
				</span>
			</label>
		</div>
	);
}
