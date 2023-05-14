import ProjectComponents from './ProjectComponents';
import './project.css';

function Project() {
    return(
        <section className='project section' id='project'>
            <h2 className='section__title project__section'>Projects</h2>
            
            <ProjectComponents/>
        </section>
    )
}

export default Project;