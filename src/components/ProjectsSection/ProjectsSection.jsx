import React from 'react';
import './ProjectsSection.scss';
import { Button, Badge, Container, Card, Group, Grid, Image, Text, Title, Divider } from '@mantine/core';
import { Gradient } from '../../assets';

const ProjectsSection = () => {
     return (
          <section id="projects">
               <div className="projects__container">
                    <Container>
                         <Title order={1} align="left" color={"white"}>Projects</Title>
                         <div className="spacer" style={{ width: "100%", height: "1.5em" }} />
                         <Divider />
                         <div className="spacer" style={{ width: "100%", height: "2em" }} />
                         <Grid grow>
                              <Grid.Col md={6} lg={3}>
                                   {/* Project 1 */}
                                   <Card shadow="sm" p="lg" radius="lg" withBorder>
                                        <Card.Section>
                                             <Image 
                                                  src={Gradient}
                                                  height={150}
                                                  alt="Project 1"
                                             />
                                        </Card.Section>

                                        <Group positon="apart" mt="md" mb="xs">
                                             <Text weight={500}>This my 1st project card</Text>
                                             <Badge color="blue" variant="light"> Cybersecurity </Badge>
                                        </Group>

                                        <Text size="sm" color="dimmed">
                                             This is a description of my 1st project card
                                        </Text>

                                        <Button variant="light" color="blue" mt="md" radius="md" fullWidth>
                                             View Project Code
                                        </Button>
                                   </Card>
                              </Grid.Col>

                              <Grid.Col md={6} lg={3}>
                                   {/* Project 2 */}
                                   <Card shadow="sm" p="lg" radius="lg" withBorder>
                                        <Card.Section>
                                             <Image 
                                             src={Gradient}
                                             height={150}
                                             alt="Project 2"
                                             />
                                        </Card.Section>

                                        <Group positon="apart" mt="md" mb="xs">
                                             <Text weight={500}>This my 2nd project card</Text>
                                             <Badge color="blue" variant="light"> Cybersecurity </Badge>
                                        </Group>

                                        <Text size="sm" color="dimmed">
                                             This is a description of my 2nd project card
                                        </Text>

                                        <Button variant="light" color="blue" mt="md" radius="md" fullWidth>
                                             View Project Code
                                        </Button>
                                   </Card>
                              </Grid.Col>

                              <Grid.Col md={6} lg={3}>
                                   {/* Project 3 */}
                                   <Card shadow="sm" p="lg" radius="lg" withBorder>
                                        <Card.Section>
                                             <Image 
                                             src={Gradient}
                                             height={150}
                                             alt="Project 3"
                                             />
                                        </Card.Section>

                                        <Group positon="apart" mt="md" mb="xs">
                                             <Text weight={500}>This my 3rd project card</Text>
                                             <Badge color="blue" variant="light"> Cybersecurity </Badge>
                                        </Group>

                                        <Text size="sm" color="dimmed">
                                             This is a description of my 3rd project card
                                        </Text>

                                        <Button variant="light" color="blue" mt="md" radius="md" fullWidth>
                                             View Project Code
                                        </Button>
                                   </Card>
                              </Grid.Col>
                         </Grid>
                    </Container>
               </div>
          </section>
     );
};

export default ProjectsSection;