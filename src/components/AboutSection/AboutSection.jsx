import React from 'react';
import './AboutSection.scss';
import { Center, Blockquote, Container, Tabs, Text, Title, Divider, Grid } from '@mantine/core';
import { Headshot } from '../../assets';
import { IconInfoCircle, IconTools, IconArchive } from '@tabler/icons';

const AboutSection = () => {
     return (
          <section id="about">
               <Container>
                    <div style={{ marginBottom: 20 }}>
                         <Text color="white">
                              <Title order={1}> Get to know me more! 🚀 </Title>
                              <div className="spacer" style={{ width: "100%", height: "1.5em" }} />                                       
                              <Divider />
                              <div className="spacer" style={{ width: "100%", height: "2em" }} />
                              <Blockquote color="btn-color.6">
                                   <Text color="white">
                                        I'm currently a 3rd year Honours BSc Computer Science student at Wilfrid Laurier University
                                        in Waterloo, Ontario. I'm passionate about software development and I'm always looking for
                                        new opportunities to learn and grow. I'm currently looking for internship positions for the
                                        Winter 2022 and Summer 2023 term.
                                   </Text>
                              </Blockquote>
                         </Text>
                         <Tabs defaultValue="intro" color="btn-color.6">
                              <Tabs.List grow>
                                   <Tabs.Tab value="intro" icon={<IconInfoCircle size={22} />}><Title order={4}>About Me</Title></Tabs.Tab>
                                   <Tabs.Tab value="skills" icon={<IconTools size={22} />}><Title order={4}>Skills</Title></Tabs.Tab>
                                   <Tabs.Tab value="hobbies" icon={<IconArchive size={22} />}><Title order={4}>Hobbies</Title></Tabs.Tab>
                              </Tabs.List>

                              <Tabs.Panel value="intro" pt="lg">
                                 <Text color="white">
                                   From a young age, I found myself drawn to technology - its inner workings, why things did what they did and how they did it.
                                   Whenever, I had the opportunity to use a computer of any sort, I would often try to push it to its limits and understand how it worked.
                                   At first, I considered this more of a hobby that I did not see as a potential career and was more inclinded towards business, 
                                   philosophy and the arts, mostly english and music. However, in my final year of my first high school, I discovered that I had a natural
                                   talent for programming, mathematics and tinkering with technology. I liked to solve puzzles and figure out the patterns in such puzzles, so much so,
                                   that my thinking behand to form around this idea. Naturally, I found computer science to be a perfect fit for me.   

                                 </Text>
                              </Tabs.Panel>

                              <Tabs.Panel value="skills" pt="lg">
                                   <Grid>
                                        <Grid.Col span={4}>
                                             <Title order={4} color="btn-color.6">Languages</Title>
                                             <div className="spacer" style={{ width: "100%", height: "1.5em" }} />                                       
                                             <Text color="white" align="left">
                                                  <ul>
                                                       <li>ARMv7 Assembly</li>
                                                       <li>Bash</li>
                                                       <li>C/C++</li>
                                                       <li>HTML/CSS</li>
                                                       <li>Java</li>
                                                       <li>JavaScript</li>
                                                       <li>PHP</li>
                                                       <li>Python</li>
                                                       <li>Rust</li>
                                                       <li>SQL</li>
                                                  </ul>
                                             </Text>
                                        </Grid.Col>
                                        <Grid.Col span={4}>
                                             <Title order={4} color="btn-color.6">Frameworks</Title>
                                             <div className="spacer" style={{ width: "100%", height: "1.5em" }} />                                       
                                             <Text color="white" align="left">
                                                  <ul>
                                                       <li>Actix Web</li>
                                                       <li>Django</li>
                                                       <li>Flask</li>
                                                       <li>Gin</li>
                                                       <li>Laravel</li>
                                                       <li>Node.js</li>
                                                       <li>React.js</li>
                                                  </ul>
                                             </Text>
                                        </Grid.Col>
                                        <Grid.Col span={4}>
                                             <Title order={4} color="btn-color.6">Developer Tools</Title>
                                             <div className="spacer" style={{ width: "100%", height: "1.5em" }} />                                       
                                             <Text color="white" align="left">
                                                  <ul>
                                                       <li>AWS</li>
                                                       <li>Apache</li>
                                                       <li>Confluence</li>
                                                       <li>Docker</li>
                                                       <li>Git</li>
                                                       <li>Google Cloud</li>
                                                       <li>Jira</li>
                                                       <li>Kali Linux</li>
                                                       <li>Kubernetes</li>
                                                       <li>Manjaro</li>
                                                       <li>Metasploit</li>
                                                       <li>Postman</li>
                                                       <li>VSCode</li>
                                                       <li>Wireshark</li>
                                                  </ul>
                                             </Text>
                                        </Grid.Col>
                                   </Grid>
                              </Tabs.Panel>

                              <Tabs.Panel value="hobbies" pt="lg">

                              </Tabs.Panel>
                         </Tabs>
                    </div>
               </Container>
          </section>
     );
};

export default AboutSection;

