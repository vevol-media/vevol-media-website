import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Field, Control, Input, TextArea, Content, Container, Title, Help } from 'bloomer';
import './main-form.scss';
import { IconTopo } from '../../helpers/icons';

export default function MainForm({ title, subtitle }) {
	const [isSending, setIsSending] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
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
				<form className="main-contact__form" ref={form} onSubmit={sendEmail}>
					<Field>
						<Control>
							<Input type="text" placeholder="Full Name" name="full_name" />
						</Control>
					</Field>
					<Field>
						<Control>
							<Input type="email" placeholder="Business Email" name="email" />
						</Control>
					</Field>
					<Field>
						<Control>
							<Input type="tel" placeholder="Business Phone" name="phone" />
						</Control>
					</Field>
					<Field>
						<Control>
							<Input type="text" placeholder="Company" autcomplete="organization" name="company" />
						</Control>
					</Field>
					<Field>
						<Control>
							<Input type="text" placeholder="Website" autcomplete="website" name="website" />
						</Control>
					</Field>
					<Field>
						<Control>
							<TextArea placeholder="Your message to us" name="message" />
						</Control>
					</Field>
					<p className="main-contact__disclaimer is-size-6 mb-5">
						By Submitting this form you agree for Vevol Media to contact you in regards to your query.
					</p>
					<span
						className={`vm-button vm-button--green-alt button ${isSending && 'is-loading'}`}
						type="button"
						onClick={sendEmail}
					>
						Send Message
					</span>
					{isSent && <Help isColor="success">Message was successfuly sent. We'll get back to you ASAP.</Help>}
				</form>
			</Container>
		</Content>
	);
}
