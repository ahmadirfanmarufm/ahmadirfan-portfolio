function ProjectItems({item}) {
    return(
        <div className="project__content">
            <img src={item.image} alt='Project Image' className="project__img"/>
            <h3 className="project__title">{item.title}</h3>
            <a href='#' className="project__button">Live Demo <i className="bx bx-right-arrow-alt project__button-icon"></i></a>
        </div>
    );
}

export default ProjectItems;