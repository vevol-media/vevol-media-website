import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { Field, Control, Help } from 'bloomer';
import './main-form.scss';
import FileInput from '../general-components/file-input';

export default function JobForm({ jobRole }) {
	const [isSending, setIsSending] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const form = useRef();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		setIsSending(true);

		emailjs
			.sendForm('service_44yxlog', 'template_fmd4j5g', form.current, 'user_T4zJ3f0qyPDW9VIB6ajRT')
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			)
			.finally(() => {
				setIsSending(false);
				setIsSent(true);
			});
	};

	return (
		<form className="main-contact__form" ref={form} onSubmit={handleSubmit(onSubmit)}>
			<input type={'hidden'} value={jobRole} name="role" />
			<Field>
				<Control>
					<input
						className={`input ${errors.fullName && 'is-danger'}`}
						type="text"
						placeholder="Full Name*"
						name="fullName"
						{...register('fullName', { required: true })}
					/>
					{errors.fullName && <Help isColor="warning">Full name is required</Help>}
				</Control>
			</Field>
			<Field>
				<Control>
					<input
						className={`input ${errors.email && 'is-danger'}`}
						type="email"
						placeholder="Email*"
						name="email"
						{...register('email', {
							required: true,
							pattern: /^\S+@\S+\.\S+$/i,
							message: 'invalid email address',
						})}
					/>
					{errors.email && <Help isColor="warning">Email is required</Help>}
				</Control>
			</Field>
			<Field>
				<Control>
					<FileInput placeholder="Upload your Resume" inputName={'resume'} />
				</Control>
			</Field>
			<Field>
				<Control>
					<FileInput placeholder="Upload your Cover Letter" inputName={'cover_letter'} />
				</Control>
			</Field>
			<Field>
				<Control>
					<textarea
						className="textarea"
						type="message"
						placeholder="Anything to add?*"
						name="message"
					></textarea>
				</Control>
			</Field>
			<p className="main-contact__disclaimer is-size-6 mb-5">
				By submitting this form you agree for Vevol Media to contact you in regards to your query.
			</p>
			<button className={`vm-button vm-button--green-alt button ${isSending && 'is-loading'}`} type="submit">
				Send Message
			</button>
			{isSent && <Help isColor="success">Message was successfuly sent. We'll get back to you ASAP.</Help>}
		</form>
	);
}
