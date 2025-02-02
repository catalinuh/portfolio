import React from 'react'
import Image from 'next/image'

//import stock
const wanderlist1 = '../../../public/img/Wanderlist1.png'
const wanderlist2 = '../../../public/img/Wanderlist2.png'
const wanderlist3 = '../../../public/img/Wanderlist3.png'

const regex1 = '../../../public/img/RegexSpaceship1.png'
const regex2 = '../../../public/img/RegexSpaceship2.png'
const regex3 = '../../../public/img/RegexSpaceship3.png'
const regex4 = '../../../public/img/RegexSpaceship4.png'
const regex5 = '../../../public/img/RegexSpaceship5.png'

const blog1 = '../../../public/img/blog1.png'
const blog2 = '../../../public/img/blog2.png'

const forest1 = '../../../public/img/Forestland1.png'
const forest2 = '../../../public/img/Forestland2.png'

export default function Portfolio() {
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">
                Here are some of my most notable projects from recent years!
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a href={`${wanderlist1}`} data-lightbox="gallery-potato">
                <div className="work-img">
                  {/* <Image src={wanderlist1} alt="" className="img-fluid" /> */}
                </div>
                <div className="work-content">
                  <div className="row portfolio">
                    <div className="col-sm-8">
                      <h2 className="w-title">Wanderlist</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          JavaScript ReactJS Express MongoDB JWT
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={`${wanderlist2}`}
                data-lightbox="gallery-potato"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={`${wanderlist3}`}
                data-lightbox="gallery-potato"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={`${regex1}`} data-lightbox="gallery-todo">
                <div className="work-img">
                  {/* <Image src={regex1} alt="" className="img-fluid" /> */}
                </div>
                <div className="work-content">
                  <div className="row portfolio">
                    <div className="col-sm-8">
                      <h2 className="w-title">Regex Spaceship</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          JavaScript ReactJS Express Sequelize Phaser3 Socket.io
                          HTML5
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={`${regex2}`}
                data-lightbox="gallery-todo"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={`${regex3}`}
                data-lightbox="gallery-todo"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={`${regex4}`}
                data-lightbox="gallery-todo"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={`${regex5}`}
                data-lightbox="gallery-todo"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={`${blog1}`} data-lightbox="gallery-vmarine">
                <div className="work-img">
                  {/* <Image src={blog1} alt="" className="img-fluid" /> */}
                </div>
                <div className="work-content">
                  <div className="row portfolio">
                    <div className="col-sm-8">
                      <h2 className="w-title">My Blog</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          HTML5 CSS3 Bootstrap ReactJS
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={`${blog2}`}
                data-lightbox="gallery-vmarine"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={`${forest1}`} data-lightbox="gallery-aguadeluz">
                <div className="work-img">
                  {/* <Image src={forest1} alt="" className="img-fluid" /> */}
                </div>
                <div className="work-content">
                  <div className="row portfolio">
                    <div className="col-sm-8">
                      <h2 className="w-title">Forestland</h2>
                      <div className="w-more">
                        <span className="w-ctegory">HTML5 CSS3 Phaser3</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={`${forest2}`}
                data-lightbox="gallery-aguadeluz"
                style={{ display: 'none' }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
