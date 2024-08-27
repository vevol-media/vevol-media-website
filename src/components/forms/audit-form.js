import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { Field, Control, Help, Input } from 'bloomer';
import './audit-form.scss';

export default function AuditForm() {
	const [isSending, setIsSending] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const [selectedValue, setSelectedValue] = useState('');

	const form = useRef();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		setIsSending(true);

		emailjs
			.sendForm('service_44yxlog', 'template_89gd8zq', form.current, 'user_T4zJ3f0qyPDW9VIB6ajRT')
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

				if (typeof window !== 'undefined') {
					window.location.pathname = '/nicely-done';
				}
			});
	};

	const handleSelectChange = (event) => {
		setSelectedValue(event.target.value);
	};

	const formContent = (
		<form className="main-contact__form" ref={form} onSubmit={handleSubmit(onSubmit)}>
			<Field>
				<Control>
					<input
						className={`input ${errors.firstName && 'is-danger'}`}
						type="text"
						placeholder="First Name*"
						name="firstName"
						{...register('firstName', { required: true })}
					/>
					{errors.firstName && <Help isColor="warning">First name is required</Help>}
				</Control>
			</Field>
			<Field>
				<Control>
					<input
						className={`input ${errors.surname && 'is-danger'}`}
						type="text"
						placeholder="Surname*"
						name="surname"
						{...register('surname', { required: true })}
					/>
					{errors.surname && <Help isColor="warning">Surname is required</Help>}
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
					<input
						className={`input ${errors.phone && 'is-danger'}`}
						type="tel"
						placeholder="Phone*"
						name="phone"
						{...register('phone', {
							required: true,
						})}
					/>
					{errors.phone && <Help isColor="warning">Phone is required</Help>}
				</Control>
			</Field>
			<Field>
				<Control>
					<Input type="text" placeholder="Website" autcomplete="website" name="website" />
				</Control>
			</Field>
			<Field>
				<Control>
					<div className={`select`}>
						<select name="plan" {...register('plan', { required: false })} onChange={handleSelectChange} value={selectedValue} className='vm-button-white'>
							<option value="" disabled hidden>
								Select your Shopify Plan
							</option>
							<option value="advanced">Shopify Advanced</option>
							<option value="plus">Shopify Plus</option>
							<option value="not_using_shopify">I'm not using Shopify yet</option>
						</select>
					</div>
				</Control>
			</Field>
			<button className={`vm-button vm-button--black button ${isSending && 'is-loading'}`} type="submit">
				Request Audit
			</button>
			{isSent && <Help isColor="success">Message was successfuly sent. We'll get back to you ASAP.</Help>}
		</form>
	);

	return <>{formContent}</>;
}
