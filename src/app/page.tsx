import React from 'react';
import Image from 'next/image';

import { Heading, Text, Flex, Button, Badge, Grid, Icon, InlineCode, Tag, Logo, SmartImage, SmartLink, Background, RevealFx, SparkleFx } from '@/once-ui/components';
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
                        href="#about">
                        About us 
                    </SmartLink>
                    <SmartLink
                        href="#formula-student">
                        Formula Student
                    </SmartLink>
                    <SmartLink
                        href="#join">
                        Open positions
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
								id="about"
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
								Нашият екип ще разгледа регистрацията внимателно и ще върне отговор възможно най-скоро.
								<br/><br/>
								Все още се колебаеш дали да участваш или имаш още въпроси - влез в дискорд сървъра и попитай някой от модераторите ни.
							</Text>
							</RevealFx>
							<Badge
								id="formula-student"
							  	icon="openLink"
							  	arrow
							  	effect
							  	href="https://www.imeche.org/events/formula-student">
							  Formula Student
							</Badge>
							
							<Grid // Carousel
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

							<Grid
							  id="join"
							  border="neutral-medium"
							  borderStyle="solid-1"
							  columns="repeat(3, 1fr)"
							  gap="24"
							  padding="24"
							  fillWidth
							  radius="l"
							  background="neutral-medium"
							>
							  <Tag
							    variant="accent"
							    size="m"
							    label="Job Title"
							  />
							  <Tag
							    variant="accent"
							    size="m"
							    label="Target specs"
							  />
							  <Tag
							    variant="accent"
							    size="m"
							    label="Weekly tasks"
							  />

							  {/* FA */}
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									Faculty Advisor
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
							    	must have PhD
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									Advise team. Cooperate with university administration
							  </Text>

							  {/* PM */}
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									Project manager
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
							    nice to have experience with Jira / Alternatives
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
							    Distribute tasks amongst team members. 
								Prepare materials for and manage team meetings.
								Ensures that all tasks are finished according to deadlines and all docs/receipts are accounted for.
							  </Text>

							  {/* CAD */}
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									CAD enginner
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
							      experience with SolidWorks
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
							      Assist with chassis design or any
								  car part that needs modeling, including but not limited to
								  wings, diffusers, sidepods, and the undertray.
								  Collaborate with the aerodynamics and suspension teams.
								  Ensures that everything is according with the FS rules
							  </Text>
							  
							  {/* EE */}
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									Electrical engineer / R&D
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									general experience with electronics;
							    	work on sensor integration,
									control systems 
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									Selects sensors according to their specifications.
								    Refines control algorithms, bench-tests the prototypes.
									Ensures are electric components are in order and
									all is according with FS regulations
							  </Text>

							  {/* SE */}
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									Suspension engineer / R&D
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									experience with any kinematics simulation tool;
									work on suspension, tyres
									and steering geometry
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									 Explore  suspension geometry setups that optimize grip, balance, and response.
									 Ensures that everything is according with the FS rules
							  </Text>

							  {/* PE */}
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									Powertrain engineer / R&D
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									 Solid understanding of electric motors, inverters, batteries, and drivetrain components
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									 Looking into motor options and energy management for achiecing high power-to-weight ratio.
									 Ensures that everything is according with the FS rules
							  </Text>

							  {/* AE */}
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									Aerodynamics engineer / R&D
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									eager to learn new software a.k.a. Ansys Fluent
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									 Refines concepts for wings, diffusers, and other aerodynamic elements.
									 Explore lightweight and strong materials.
									 Collaborate with the chassis and suspension teams to ensure smooth integration of the aerodynamic parts.									 
									 Ensures that everything is according with the FS rules
							  </Text>

							  {/* SD */}
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									Software developer / Website administrator *
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									good programming and design skills, github portfolio required
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									 Includes but is not limited to developing and designing the team website.
									 Assists other team members with any algorithmic problems and coding tasks.
							  </Text>

							  {/* SMA */}
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									Discord / Social media admin *
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									good communication and data mining skills, thrustworthy,
									able to meet deadlines, chronically online
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									 Includes but is not limited to moderate the discord server and any other social media account.
							  </Text>

							  {/* DA */}
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									Data Analyst
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									experenced in Tableau / Excel
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									 Collecting, analyzing and processing data from sensors or external sources for research on vehicle performance or other. Visualizing the data and reporting back to the PM. Working on the documentation and BOM.
							  </Text>

							  {/* Content creator */}
							  {/* SD */}
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									Content creator *
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									solid experience with Adobe Suite or alternatives, able to showcase their work -
									original, swift and keen on details
							  </Text>
							  <Text
							  	id="about"
								  wrap="balance"
								  onBackground="neutral-weak"
								  variant="body-default-m">
									 Includes but is not limited to creating original photo and video material for 
									 getting the attention of a wide auditory of both student and potential sponsors.
									 Assists other team members with any marketing logistics.
							  </Text>
							</Grid>
							<Text
								wrap="balance"
								onBackground="neutral-weak"
								variant="body-default-s">
									* Secondary priority - могат да бъдат комбинирани с други задачи
							</Text>
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
