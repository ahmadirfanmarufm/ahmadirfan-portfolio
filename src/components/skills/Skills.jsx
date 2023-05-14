import Backend from './Backend';
import Frontend from './Frontend';
import './skills.css';

function Skills() {
    return(
        <section className='skills section' id='skills'>
            <h2 className='section__title skills__section'>Skills</h2>

            <div className='skills__container container grid'>
                <Frontend/>
                <Backend/>
            </div>
        </section>
    )
}

export default Skills;