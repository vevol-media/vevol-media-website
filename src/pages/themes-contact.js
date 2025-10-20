import Layout from '../components/layout/layout';
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { Field, Control, Container, Help, Select } from 'bloomer';
import SlimHero from '../components/slim-hero/slim-hero';
import VevolSection from '../components/general-components/vm-section';
import { Helmet } from 'react-helmet';
import { Label } from 'bloomer/lib/elements/Form/Label';

export default function ThemesContactPage({ data }) {
	const [isSending, setIsSending] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const [mathChallenge, setMathChallenge] = useState({ question: '', answer: 0 });
	const [userAnswer, setUserAnswer] = useState('');
	const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
	const form = useRef();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// Generate random math equation with result between 1-9
	const generateMathChallenge = () => {
		const operations = ['+', '-', '*'];
		const operation = operations[Math.floor(Math.random() * operations.length)];
		let num1, num2, answer, question;

		do {
			num1 = Math.floor(Math.random() * 10) + 1; // 1-10
			num2 = Math.floor(Math.random() * 10) + 1; // 1-10

			switch (operation) {
				case '+':
					answer = num1 + num2;
					question = `${num1} + ${num2}`;

					break;
				case '-':
					// Ensure positive result
					if (num1 < num2) [num1, num2] = [num2, num1];
					answer = num1 - num2;
					question = `${num1} - ${num2}`;

					break;
				case '*':
					// Limit numbers to keep result reasonable
					num1 = Math.floor(Math.random() * 5) + 1; // 1-5
					num2 = Math.floor(Math.random() * 5) + 1; // 1-5
					answer = num1 * num2;
					question = `${num1} × ${num2}`;

					break;
				default:
					// Fallback to addition
					answer = num1 + num2;
					question = `${num1} + ${num2}`;

					break;
			}
		} while (answer <= 0 || answer >= 10);

		return { question, answer };
	};

	// Initialize math challenge on component mount
	useEffect(() => {
		setMathChallenge(generateMathChallenge());
	}, []);

	// Check if user answer is correct
	const handleAnswerChange = (e) => {
		const value = e.target.value;
		setUserAnswer(value);
		setIsAnswerCorrect(parseInt(value) === mathChallenge.answer);
	};

	const onSubmit = (data) => {
		setIsSending(true);

		emailjs
			.sendForm('service_vr3zb0g', 'template_g30vanq', form.current, 'user_T4zJ3f0qyPDW9VIB6ajRT')
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

	return (
		<Layout hasMainForm={false}>
			<Helmet>
				<title>Vevol Themes Support Form - Get in touch</title>
				<meta
					name="description"
					content="Reach out to our support team about any issues you might have with our themes. We'll get back to you ASAP."
				/>
			</Helmet>
			<SlimHero
				heading="Vevol Themes Support"
				subheading="Reach out to our support team about any issues you might have with our themes. We'll get back to you ASAP."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<form className="main-contact__form" ref={form} onSubmit={handleSubmit(onSubmit)}>
						<Field>
							<Control>
								<Label>Your name</Label>
								<input
									className={`input ${errors.fullName && 'is-danger'}`}
									type="text"
									placeholder="John Doe"
									name="fullName"
									{...register('fullName', { required: true })}
								/>
								{errors.fullName && <Help isColor="warning">Full name is required</Help>}
							</Control>
						</Field>
						<Field>
							<Control>
								<Label>Your email</Label>
								<input
									className={`input ${errors.email && 'is-danger'}`}
									type="email"
									placeholder="john@doe.com"
									name="email"
									{...register('email', {
										required: true,
										pattern: /^\S+@\S+\.\S+$/i,
										message: 'invalid email address',
									})}
								/>
								{errors.email && <Help isColor="warning">Email address is required</Help>}
							</Control>
						</Field>
						<Field>
							<Control>
								<Label>Store URL</Label>
								<input
									className={`input ${errors.storeURL && 'is-danger'}`}
									type="text"
									placeholder="STORENAME.myshopify.com OR admin.shopify.com/store/STORENAME"
									name="storeURL"
									{...register('storeURL', {
										required: true,
									})}
								/>
								{errors.storeURL && <Help isColor="warning">Store URL is required</Help>}
							</Control>
						</Field>
						<Field>
							<Control>
								<Label>Describe your problem</Label>
								<textarea
									className={`textarea ${errors.message && 'is-danger'}`}
									type="text"
									placeholder="Be as specific as possible"
									name="text"
									{...register('message', { required: true })}
								></textarea>
								{errors.message && <Help isColor="warning">Message is required</Help>}
							</Control>
						</Field>
						<Field>
							<Control>
								<Label>Theme</Label>
								<Select name="selectedTheme">
									<option value="Noblesse">Noblesse</option>
								</Select>
							</Control>
						</Field>
						<Field>
							<Control>
								<input
									className={`file`}
									type="file"
									placeholder="File upload*"
									name="uploadedFile"
								></input>
							</Control>
						</Field>
						<Field>
							<Control>
								<Label>Security check: What is {mathChallenge.question}?</Label>
								<input
									className={`input ${userAnswer && !isAnswerCorrect ? 'is-danger' : ''}`}
									type="number"
									placeholder="Enter your answer"
									value={userAnswer}
									onChange={handleAnswerChange}
								/>
								{userAnswer && !isAnswerCorrect && (
									<Help isColor="warning">Incorrect answer. Please try again.</Help>
								)}
							</Control>
						</Field>
						<button
							className={`vm-button vm-button--green-alt button ${isSending && 'is-loading'}`}
							type="submit"
							disabled={!isAnswerCorrect || isSending}
						>
							Send Message
						</button>
						{isSent && (
							<Help isColor="success">Message was successfuly sent. We'll get back to you ASAP.</Help>
						)}
					</form>
				</Container>
			</VevolSection>
		</Layout>
	);
}
