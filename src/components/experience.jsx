import React from 'react'

class Experience extends React.Component {
  constructor() {
    super()
    this.state = {
      experience: [
        {
          id: 'first-p-exp',
          title: 'Audubon National Society',
          position: 'React Developer',
          datesWorked: 'February 2021 - March 2022',
          content: [
            `Migrated their website that used previous libraries,
          Backbone.js and jQuery, to use newer and more versatile
          technologies such as React and Redux`,
            `Converted ESRI’s ArcGIS API, which was responsible for the
          rendering of a map, to use Google’s Map API for more
          support and better documentation`,
            `Used SCSS rules like @mixin and @include to make effective

          and cross-browser compatible front-end pages with easy-to-
          use functionalities`,
            `Built responsive UI pages using CSS modules like flexbox,
          grid and the CSS @media rule`,
            `Constructed and built RESTful API endpoints using Node.js
          with Express for front-end to back-end communication`,
            `Actively involved in Agile software development
          methodologies by participating in daily stand-ups and
          seasonal sprints`,
          ],
        },
        {
          id: 'second-p-exp',
          title: 'Avante Gardner',
          position: 'Full-Stack Software Engineer',
          datesWorked: 'April 2018 - February 2021',
          content: [
            `Worked on the front-end of an internal Event Management
          Software to assist those in charge of organizing and
          planning events at the venue, Avante Gardner`,
            `Created an accessibility-friendly user interface using
          practices like semantic HTML and Aria labeling in
          accordance with ADA compliance`,
            `Used Node.js and Express for making calls (GET, POST, PUT,
            DELETE) to trigger or fetch data from Restful APIs provided
            by the other team`,
            `Used Postman to test API and used Git as a version control
            tool`,
            `Worked with other engineers to architect flexible reusable
            UI components`,
            `Extensively used Git for version control and collaboration
            with colleague developers in project development`,
          ],
        },
      ],
    }
  }

  render() {
    return (
      <section id="experience" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="experiences pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">Experience</h5>
                    </div>
                    {this.state.experience.map((content) => {
                      return (
                        <div key={content.id}>
                          <h4>{content.title}</h4>
                          <h5>{content.position}</h5>
                          <h6>{content.datesWorked}</h6>
                          <ul className="lead">
                            {content.content.map((bullet) => {
                              return <li key={bullet}>{bullet}</li>
                            })}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Experience
