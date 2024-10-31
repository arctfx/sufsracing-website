import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background, RevealFx, SparkleFx } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	// const links = [
	// 	{
	// 		href: "https://once-ui.com/docs/theming",
	// 		title: "Themes",
	// 		description: "Style your app in minutes.",
	// 	},
	// ];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Background
				dots={false}/>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
					<Heading
								wrap="balance"
								variant="display-strong-l">
								<Flex
									position="relative">
										{/* <Button
											data-border="rounded"
											href={`/about`}
											variant="tertiary"
											suffixIcon="chevronRight"
											size="m">
										About			
										</Button> */}
										SUFS Racing
								</Flex>
							</Heading>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						{/* <Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl">
							<Logo size="xl" icon={false} style={{zIndex: '1'}}/>
						</Flex> */}
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<RevealFx>
										<SparkleFx>Create your own formula</SparkleFx>
										
									</RevealFx>
								</span>
							</Heading>
							<RevealFx translateY="8" delay={0.2}>
							<Text
								wrap="balance"
								onBackground="neutral-weak"
								variant="body-default-l">
								SU FS Racing е първият отбор на Софийски Университет "Св. Климент Охридски"
								към международното съзтезание по инженерен дизайн Formula Student.
							</Text>
							</RevealFx>
							<Button
								href="https://www.imeche.org/events/formula-student"
								suffixIcon="chevronRight"
								variant="secondary">
								Formula Student
							</Button>
						</Flex>
					</Flex>
					{/* <Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{links.map((link) => (
							<Link
								target="_blank"
								style={{ padding: 'var(--responsive-space-l)' }}
								key={link.href}
								href={link.href}>
								<Flex
									fillWidth paddingY="8" gap="8"
									direction="column">
									<Flex
										fillWidth gap="12"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="arrowUpRight" />
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						))}
					</Grid> */}
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Sofia University Formula Student Racing Team
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://discord.gg/JmTZXRdwJB"
						prefixIcon="discord" size="s" variant="tertiary">
						Discord
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
