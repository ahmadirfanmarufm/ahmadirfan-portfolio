function CertificateItems({item, tabToggle, stateToggle}) {
    return(
        <div className='certificate__content'>
            <img src={item.image} alt='Certificate Image' className='certificate__img' onClick={() => tabToggle(item.id)}/>
            <div className={stateToggle === item.id ? 'certificate__modal active-modal' : 'certificate__modal'}>
                <div className='certificate__modal-content'>
                    <i onClick={() => tabToggle(0)} className='uil uil-times certificate__modal-close'></i>
                    <span className={item.title.length >= 40 ? 'certificate__modal-title-long' : 'certificate__modal-title'}>{item.title}</span>
                    <img src={item.image} alt='Certificate Image' className='certificate__modal-img'/>
                </div>
            </div>
        </div>
    );
}

export default CertificateItems;