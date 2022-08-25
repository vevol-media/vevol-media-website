import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { Field, Control, Content, Container, Title, Help, Input } from 'bloomer';
import { IconTopo } from '../../helpers/icons';
import './main-form.scss';

export default function MainForm({ title, subtitle }) {
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
			.sendForm('service_jjvtsbx', 'template_gml6ymr', form.current, 'FztBENgS0iLGuoF_F')
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
		<Content className="main-contact vm-section vm-bg--black">
			<IconTopo className="main-contact__pattern-one" />
			<Container>
				<Content className="main-contact__intro">
					<Title tag="h2" isSize={1}>
						{title}
					</Title>
					<p>{subtitle}</p>
				</Content>
				<form className="main-contact__form" ref={form} onSubmit={handleSubmit(onSubmit)}>
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
								placeholder="Business Email*"
								name="email"
								{...register('email', {
									required: true,
									pattern: /^\S+@\S+\.\S+$/i,
									message: 'invalid email address',
								})}
							/>
							{errors.email && <Help isColor="warning">Business email is required</Help>}
						</Control>
					</Field>
					<Field>
						<Control>
							<input
								className={`input ${errors.phone && 'is-danger'}`}
								type="tel"
								placeholder="Business Phone*"
								name="phone"
								{...register('phone', {
									required: true,
								})}
							/>
							{errors.phone && <Help isColor="warning">Business phone is required</Help>}
						</Control>
					</Field>
					<Field>
						<Control>
							<input
								className={`input ${errors.company && 'is-danger'}`}
								type="text"
								placeholder="Company*"
								name="company"
								{...register('company', { required: true })}
								autoComplete="organization"
							/>
							{errors.company && <Help isColor="warning">Company name is required</Help>}
						</Control>
					</Field>
					<Field>
						<Control>
							<Input type="text" placeholder="Website" autcomplete="website" name="website" />
						</Control>
					</Field>
					<Field>
						<Control>
							<textarea
								className={`textarea ${errors.message && 'is-danger'}`}
								type="email"
								placeholder="Your message*"
								name="email"
								{...register('message', { required: true })}
							></textarea>
							{errors.message && <Help isColor="warning">Message is required</Help>}
						</Control>
					</Field>
					<p className="main-contact__disclaimer is-size-6 mb-5">
						By submitting this form you agree for Vevol Media to contact you in regards to your query.
					</p>
					<button
						className={`vm-button vm-button--green-alt button ${isSending && 'is-loading'}`}
						type="submit"
					>
						Send Message
					</button>
					{isSent && <Help isColor="success">Message was successfuly sent. We'll get back to you ASAP.</Help>}
				</form>
			</Container>
		</Content>
	);
}
