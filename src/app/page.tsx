import React from 'react';
import Image from 'next/image';

import { Heading, Text, Flex, Button, Badge, Grid, Icon, InlineCode, Logo, SmartImage, SmartLink, Background, RevealFx, SparkleFx } from '@/once-ui/components';
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
			    position="absolute"
			    mask="cursor"
			    gradient={{
			      display: false
			    }}
			    dots={{
			      display: true
			    }}
			    lines={{
			      display: true
			    }}
			  />
			<Flex
                fillWidth
                alignItems="center" justifyContent="flex-end">
					<Image
      				  src="/images/sufs.png"
      				  alt="SUFS Racing logo"
      				  width={729/8} // Specify width
      				  height={159/8} // Specify height
      				/>
			{/* <Heading
								wrap="balance"
								variant="display-strong-l"> */}
                <Flex
                    hide="s"
                    textVariant="label-default-s"
                    fillWidth gap="4" paddingX="l"
                    alignItems="center">
                    <SmartLink
                        href="">
                        Home
                    </SmartLink>
                    <SmartLink
                        href="">
                        About us 
                    </SmartLink>
                    <SmartLink
                        href="">
                        Formula Student
                    </SmartLink>
                    <SmartLink
                        href="">
                        Join us
                    </SmartLink>
                </Flex>
                {/* <Flex
                    alignItems="center"
                    gap="8">
                    <Button
                        size="s"
                        variant="secondary"
                        label="Login"
                        href=""/>
                    <Button
                        size="s"
                        variant="primary"
                        label="Sign up"
                        href=""/>
                </Flex> */}
            {/* </Heading> */}
			</Flex>

			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
					<Heading
								wrap="balance"
								variant="display-strong-l">
								{/* <Flex
									position="relative">
										<Button
											data-border="rounded"
											href={`/about`}
											variant="tertiary"
											suffixIcon="chevronRight"
											size="m">
										About			
										</Button>
										SUFS Racing
								</Flex> */}
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
								<br/><br/>
								Ако си студент в Софийски Университет, бакалавър, магистър или докторант
								и те влече мотоспорта, не пропускай да се включиш в нашия отбор!
								За повече информация и изявяване на интерес можете да попълните следната
								<SmartLink
								  href="https://docs.google.com/forms/d/e/1FAIpQLSfejAkAj2_oeVM_-nGIfhDoEDq-TwG5UrHKyHW9SYyotc5sTA/viewform"
								  iconSize="xs">
								  анкета. 
								</SmartLink>
								Всеки попълнил анкетата ще получи обратна връзка. 
								Нашият екип ще разгледа регистрацията внимателно и ще върне отговор колкото е възможно най-скоро.
								<br/><br/>
								Все още се колебаеш дали да участваш или имаш още въпроси - влез в дискорд сървъра и попитай някой от модераторите ни.
							</Text>
							</RevealFx>
							<Badge
							  icon="openLink"
							  arrow
							  effect
							  href="https://www.imeche.org/events/formula-student"
							>
							  Formula Student
							</Badge>
							
							<Grid
								radius="l"
								border="neutral-medium"
								borderStyle="solid-1"
								columns="repeat(1, 1fr)"
								tabletColumns="1col"
								mobileColumns="1col"
								fillWidth>
								<SmartImage
								  src="/images/project-card-bg-1.png"
								  alt="Image description"
								  aspectRatio="16/10"
								  radius="l"
								  objectFit="cover"
								/>
						{/* {links.map((link) => (
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
						))} */}
							</Grid>
						</Flex>
					</Flex>
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
