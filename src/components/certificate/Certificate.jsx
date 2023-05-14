import './certificate.css';
import { useState } from 'react';
import { certificateData } from './Data';
import CertificateItems from './CertificateItem';

function Certificate2() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return(
        <section className="certificate section" id='certificate'>
            <h2 className='section__title certificate__section'>Certificate</h2>

            <div className='certificate__container container grid'>
                {certificateData.map((item, tabToggle, stateToggle) => {
                    return <CertificateItems item={item} tabToggle={toggleTab} stateToggle={toggleState} key={item.id}/>
                })}
            </div>
        </section>
    )
}

export default Certificate2