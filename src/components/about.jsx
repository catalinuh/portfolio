import React from 'react';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: 'JavaScript_skill',
          content: 'JavaScript',
          percentage: '90%',
          value: '90',
        },
        {
          id: 'ReactJS_skill',
          content: 'ReactJS',
          percentage: '85%',
          value: '85',
        },
        {
          id: 'VanillaJS_skill',
          content: 'VanillaJS',
          percentage: '95%',
          value: '95',
        },
        { id: 'HTML5_skill', content: 'HTML5', percentage: '80%', value: '80' },
        { id: 'CSS3_skill', content: 'CSS3', percentage: '75%', value: '75' },
        {
          id: 'Express_skill',
          content: 'Express',
          percentage: '85%',
          value: '85',
        },
        {
          id: 'MongoDB_skill',
          content: 'MongoDB',
          percentage: '80%',
          value: '80',
        },
        {
          id: 'Python_skill',
          content: 'Python',
          percentage: '70%',
          value: '70',
        },
        {
          id: 'Java_skill',
          content: 'Java',
          percentage: '75%',
          value: '75',
        },
      ],
      about_me: [
        {
          id: 'first-p-about',
          content: `Hi, I'm Catalina. I have been passionate about coding ever since I can remember. It started out as creating a webpage for my Neopets using HTML and CSS. Wanting to pursue my passion, I studied Computer Science and received my associate degree. Still not satisfied with my proficiency, I enrolled in The Grace Hopper Program at Fullstack Academy, a coding bootcamp, where I learned full stack web development using my favorite JavaScript libraries like React, Express, PostgreSQL, and Sequelize.`,
        },
        {
          id: 'second-p-about',
          content: `I use every opportunity to improve my depth of knowledge, trying to be better than I was the day before. I never stop trying to learn, doing research and constant practice until I perfect my clients' projects. Helping people achieve their goals and the resulting satisfaction from projects I've worked on with them is my ultimate objective.`,
        },
        {
          id: 'third-p-about',
          content: `Now that I'm working as a React developer for Antra, my software engineer journey is just getting started and I can't wait to see where life will take me! Please feel free to reach out to me at any time and thank you for stopping by!`,
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: '0 auto' }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: 'center' }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{' '}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
