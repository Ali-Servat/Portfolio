import projects from '../Projects-data';

const Projects = () => {
     return (
          <div className="container" id="projects">
               <h2 className="mb-4">نمونه کار</h2>
               <div className="cards container">
                    <div className="row">
                         {projects.map((project) => {
                              return (
                                   <div
                                        key={project.key}
                                        className="col-12 col-md-4 g-2"
                                   >
                                        <div
                                             className="card "
                                             style={{ height: '100%' }}
                                        >
                                             <h5 className="card-title text-center">
                                                  {project.title}
                                             </h5>
                                             <div className="card-body">
                                                  <a
                                                       target="_blank"
                                                       className="d-block text-center"
                                                       href={project.link}
                                                  >
                                                       لینک
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              );
                         })}
                    </div>
               </div>
          </div>
     );
};

export default Projects;
